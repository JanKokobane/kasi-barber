const services = {
  'signature': { name: 'Signature Cut', duration: '45 min', price: 42 },
  'skin-fade': { name: 'Skin Fade', duration: '50 min', price: 48 },
  'beard': { name: 'Beard Sculpt', duration: '30 min', price: 30 },
  'cut-beard': { name: 'Cut + Beard', duration: '75 min', price: 68 },
  'kids-cut': { name: 'Kids Cut', duration: '30 min', price: 28 },
}

const times = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '5:30 PM']

const state = {
  service: 'signature',
  barber: 'No preference',
  date: new Date(Date.now() + 86400000),
  time: '3:00 PM',
}

const page = document.body.dataset.page

document.querySelector('.menu-button')?.addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav')
  nav.classList.toggle('open')
})

if (page === 'booking') initBooking()
if (page === 'home') initPromo()

function initPromo() {
  const modal = document.querySelector('[data-promo-modal]')
  if (!modal) return
  if (sessionStorage.getItem('northline-promo-seen')) return
  setTimeout(() => modal.classList.add('visible'), 3000)
  document.querySelectorAll('[data-close-promo], [data-close-promo-link]').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('visible')
      sessionStorage.setItem('northline-promo-seen', '1')
    })
  })
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('visible')
      sessionStorage.setItem('northline-promo-seen', '1')
    }
  })
}

function initBooking() {
  const preselect = new URLSearchParams(location.search).get('service')
  if (preselect && services[preselect]) state.service = preselect

  const els = {
    serviceOptions: document.querySelectorAll('.service-option'),
    barberOptions: document.querySelectorAll('.barber-option'),
    dateOptions: document.querySelector('[data-date-options]'),
    dateArrows: document.querySelectorAll('[data-date-move]'),
    timeOptions: document.querySelectorAll('.time-option'),
    continueBtn: document.querySelector('[data-open-details]'),
    continueService: document.querySelector('[data-continue-service]'),
    summaryService: document.querySelector('[data-summary-service]'),
    summaryBarber: document.querySelector('[data-summary-barber]'),
    summaryDuration: document.querySelector('[data-summary-duration]'),
    summaryDate: document.querySelector('[data-summary-date]'),
    summaryTime: document.querySelector('[data-summary-time]'),
    summaryPrice: document.querySelector('[data-summary-price]'),
    modal: document.querySelector('[data-modal-backdrop]'),
    modalDescription: document.querySelector('[data-modal-description]'),
    closeModal: document.querySelector('[data-close-modal]'),
    form: document.querySelector('[data-booking-form]'),
  }

  els.serviceOptions.forEach(btn => btn.addEventListener('click', () => {
    state.service = btn.dataset.service
    syncUI(els)
  }))

  els.timeOptions.forEach(btn => btn.addEventListener('click', () => {
    state.time = btn.dataset.time
    syncUI(els)
  }))

  els.barberOptions.forEach(btn => btn.addEventListener('click', () => {
    state.barber = btn.dataset.barber === 'any' ? 'No preference' : btn.dataset.barber
    syncUI(els)
  }))

  els.dateArrows.forEach(btn => btn.addEventListener('click', () => {
    state.date.setDate(state.date.getDate() + Number(btn.dataset.dateMove))
    renderDates(els)
    syncUI(els)
  }))

  els.continueBtn.addEventListener('click', () => {
    els.modalDescription.textContent = `We will hold your spot for ${services[state.service].name} on ${state.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} at ${state.time}.`
    els.modal.classList.add('visible')
  })

  els.closeModal.addEventListener('click', () => els.modal.classList.remove('visible'))
  els.modal.addEventListener('click', e => { if (e.target === els.modal) els.modal.classList.remove('visible') })

  els.form.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(els.form)
    state.customerName = formData.get('name')
    state.customerWhatsapp = formData.get('whatsapp')
    els.modal.classList.remove('visible')
    showConfirmation()
  })

  renderDates(els)
  syncUI(els)
}

function renderDates(els) {
  els.dateOptions.replaceChildren()
  for (let i = -2; i <= 2; i++) {
    const d = new Date(state.date)
    d.setDate(state.date.getDate() + i)
    const btn = document.createElement('button')
    btn.className = 'date-option' + (d.toDateString() === state.date.toDateString() ? ' selected' : '')
    btn.dataset.date = d.toISOString()
    const dayLabel = document.createElement('small')
    dayLabel.textContent = d.toLocaleDateString('en-US', { weekday: 'short' })
    const dayNum = document.createElement('strong')
    dayNum.textContent = d.getDate()
    btn.append(dayLabel, dayNum)
    btn.addEventListener('click', () => {
      state.date = new Date(btn.dataset.date)
      renderDates(els)
      syncUI(els)
    })
    els.dateOptions.appendChild(btn)
  }
}

function syncUI(els) {
  const svc = services[state.service]
  els.serviceOptions.forEach(btn => btn.classList.toggle('selected', btn.dataset.service === state.service))
  els.barberOptions.forEach(btn => {
    const label = btn.dataset.barber === 'any' ? 'No preference' : btn.dataset.barber
    btn.classList.toggle('selected', label === state.barber)
  })
  els.timeOptions.forEach(btn => btn.classList.toggle('selected', btn.dataset.time === state.time))
  els.continueService.textContent = svc.name
  els.summaryService.textContent = svc.name
  els.summaryBarber.textContent = state.barber
  els.summaryDuration.textContent = svc.duration
  els.summaryDate.textContent = state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  els.summaryTime.textContent = state.time
  els.summaryPrice.textContent = `R${svc.price}`
}

function showConfirmation() {
  const svc = services[state.service]
  const start = parseStartTime(state.date, state.time)
  const end = new Date(start.getTime() + parseInt(svc.duration, 10) * 60000)

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Northline Barbers — ' + svc.name)}&dates=${fmtCal(start)}/${fmtCal(end)}&details=${encodeURIComponent('Booking for ' + state.customerName + ' (' + state.customerWhatsapp + '). Barber: ' + state.barber + '. Your appointment at Northline Barbers. See you in the chair.')}&location=${encodeURIComponent('14 Northline Road, Easton, NY 10012')}`

  const backdrop = document.createElement('div')
  backdrop.className = 'modal-backdrop visible'
  backdrop.dataset.confirmationModal = ''

  const modal = document.createElement('div')
  modal.className = 'booking-modal confirmation-modal'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')

  const checkmark = document.createElement('div')
  checkmark.className = 'success-icon'
  checkmark.textContent = '✓'

  const eyebrow = document.createElement('p')
  eyebrow.className = 'eyebrow'
  eyebrow.textContent = 'YOU ARE ALL SET'

  const heading = document.createElement('h2')
  heading.append('See you in', document.createElement('br'))
  const italic = document.createElement('em')
  italic.textContent = 'the chair.'
  heading.appendChild(italic)

  const desc = document.createElement('p')
  desc.className = 'modal-description'
  desc.textContent = `Your ${svc.name} with ${state.barber === 'No preference' ? 'the next available barber' : state.barber} is booked for ${state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at ${state.time}. A confirmation with your booking details has been sent to ${state.customerWhatsapp}.`

  const actions = document.createElement('div')
  actions.className = 'calendar-actions'

  const googleLink = document.createElement('a')
  googleLink.className = 'button button-dark full-button'
  googleLink.href = googleUrl
  googleLink.target = '_blank'
  googleLink.rel = 'noreferrer'
  googleLink.textContent = 'Add to Google Calendar'

  const icsButton = document.createElement('button')
  icsButton.className = 'button button-outline full-button'
  icsButton.dataset.downloadIcs = ''
  icsButton.textContent = 'Add Apple Calendar file'

  actions.append(googleLink, icsButton)

  const backLink = document.createElement('a')
  backLink.className = 'text-link centered-link'
  backLink.href = '../../index.html'
  backLink.textContent = 'Back to home →'

  modal.append(checkmark, eyebrow, heading, desc, actions, backLink)
  backdrop.appendChild(modal)
  document.body.appendChild(backdrop)

  icsButton.addEventListener('click', () => {
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${fmtCal(start)}\nDTEND:${fmtCal(end)}\nSUMMARY:Northline Barbers — ${svc.name}\nLOCATION:14 Northline Road, Easton, NY 10012\nDESCRIPTION:Booking for ${state.customerName} (${state.customerWhatsapp}). Barber: ${state.barber}\nEND:VEVENT\nEND:VCALENDAR`
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
    link.download = 'northline-appointment.ics'
    link.click()
    URL.revokeObjectURL(link.href)
  })
}

function parseStartTime(date, timeStr) {
  const [time, meridiem] = timeStr.split(' ')
  const [hours, minutes] = time.split(':').map(Number)
  const d = new Date(date)
  d.setHours(hours % 12 + (meridiem === 'PM' ? 12 : 0), minutes, 0, 0)
  return d
}

function fmtCal(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}
