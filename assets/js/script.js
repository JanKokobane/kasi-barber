const BACKEND_URL = 'https://kasi-barber.onrender.com';

const serviceCategories = {
  'signature': {
    id: 'signature',
    name: 'Signature Cut',
    eyebrow: '01 · SIGNATURE CUT',
    description: 'The Northline standard. Considered cuts, proper consultation, precision scissors and clippers, and a warm hot towel finish.',
    styles: [
      {
        id: 'sig-classic',
        name: 'Classic Gentleman Cut',
        price: 42,
        duration: '45 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzrrTtvO-olTKa-byc7zsl56pWeSKeO5TWGiNq-EUhPzEN6S3qRgNpGAh&s=10',
        description: 'Timeless scissor and clipper cut, natural side parting, tapered neck, finished with a warm hot towel and organic styling balm.'
      },
      {
        id: 'sig-crop',
        name: 'Textured Modern Crop',
        price: 44,
        duration: '45 min',
        image: 'https://cdn.shopify.com/s/files/1/0029/0868/4397/files/textured-crop-drop-fade-hairstyle-men.webp?v=1763977299',
        description: 'Forward textured crop with clean shear work, blunt micro-fringe, and low natural taper. Easy effortless finger-combed style.'
      },
      {
        id: 'sig-taper',
        name: 'Executive Scissor Taper',
        price: 45,
        duration: '45 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFpyZmtnBj_0U12rwoOMRqRJ15mofhqTUieT1rqcfpg&s=10',
        description: 'Hand-crafted all-scissor cut tailored to your natural growth patterns. Soft graduated sides with natural movement.'
      },
      {
        id: 'sig-pompadour',
        name: 'Classic Pompadour',
        price: 44,
        duration: '45 min',
        image: 'https://therighthairstyles.com/wp-content/uploads/2025/07/26-black-flat-top-haircut.jpg',
        description: 'Structured silhouette with rich crown volume, clean taper graduation, and high-hold matte finish.'
      }
    ]
  },

  'skin-fade': {
    id: 'skin-fade',
    name: 'Skin Fade',
    eyebrow: '02 · SKIN FADE',
    description: 'A seamless, blurry fade blended cleanly to skin with meticulous foil or razor work and razor-sharp edge lines.',
    styles: [
      {
        id: 'fade-low',
        name: 'Low Drop Fade',
        price: 48,
        duration: '50 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR023FM2rRHxLJVRAb6zRZvQ9kEit3j6vUgQtYu6_zNoh3qUXyeaGEk0&s=10',
        description: 'Smooth fade dipping naturally around the ear and nape, leaving substantial density and weight across the upper sides.'
      },
      {
        id: 'fade-mid',
        name: 'Mid Skin Fade',
        price: 48,
        duration: '50 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VLxm79LOAOKdw2Iqfrvi1R4MTp-aw1Fb8RPK5ZWpz0uf_KWdAv81xMI&s=10',
        description: 'The balanced classic. Transition starts right at temple level down to bare skin with an ultra-clean contrast.'
      },
      {
        id: 'fade-high',
        name: 'High & Tight Fade',
        price: 50,
        duration: '50 min',
        image: 'https://beardburys.com/img/cms/high-fade-hombre-beardburys.jpg',
        description: 'Crisp high transition beginning high on the temples for an athletic, ultra-clean silhouette.'
      },
      {
        id: 'fade-taper',
        name: 'Temple & Neck Taper Fade',
        price: 46,
        duration: '45 min',
        image: 'https://i.pinimg.com/736x/21/d6/c8/21d6c8df5117e3857a08f90c4b8e97cb.jpg',
        description: 'Subtle fade isolated strictly to the sideburns and neckline, preserving natural full body through the sides and crown.'
      }
    ]
  },

  'beard': {
    id: 'beard',
    name: 'Beard Sculpt',
    eyebrow: '03 · BEARD SCULPT',
    description: 'Precision shape, crisp cheek line-up, trim, hot towel massage, and conditioning beard oils.',
    styles: [
      {
        id: 'beard-sculpt',
        name: 'Full Beard Sculpt & Condition',
        price: 30,
        duration: '30 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7A0KFp3gcvTjJsQ87gU2kXgSKQlBRMx-AA8Vvc95ARg&s=10',
        description: 'Complete shape-up, clipper de-bulking, hot towel steam, cheek razor alignment, and organic cedarwood oil treatment.'
      },
      {
        id: 'beard-lineup',
        name: 'Razor Edge Line-Up',
        price: 26,
        duration: '25 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XumRqQ8K_fIQCXYHr_4WNhwZ6sHXsqcMvRNcaOJyJsmkrh8N0b8JhgY&s=10',
        description: 'Sharp straight-razor detailing along cheeks and neckline with pre-shave oil and cooling post-shave tonic.'
      },
      {
        id: 'beard-stubble',
        name: 'Short Stubble Contour',
        price: 25,
        duration: '25 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4_52aORrrYwdUhOBEYIaPSP1zZN_yugxvcillzXb8e3yjnFpT5CoSo8&s=10',
        description: 'Uniform gradient trim keeping heavy stubble even and sculpted along jawline and lip lines.'
      },
      {
        id: 'beard-taper',
        name: 'Tapered Heavy Beard',
        price: 34,
        duration: '35 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtaJkIAh9c9gxkTZLZcbrVKOhpZfBldoJsAqND4SBK-d3K2IsR5SvGyI&s=10',
        description: 'Length retention sculpt with tapered sideburn connection, mustache shaping, and deep balm hydration.'
      }
    ]
  },

  'cut-beard': {
    id: 'cut-beard',
    name: 'Cut + Beard',
    eyebrow: '04 · CUT + BEARD RESET',
    description: 'The full Northline experience. Haircut of your choice paired with a comprehensive hot towel beard sculpt.',
    styles: [
      {
        id: 'combo-reset',
        name: 'Full Reset (Signature + Beard Sculpt)',
        price: 68,
        duration: '75 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZguHgBnHP5Cm6oyewyvx2jwQ16cyv8XKzq0I3dj1hhSiRsNYdRN4qXgst&s=10',
        description: 'Our most requested service. Classic tailored haircut paired with a complete hot towel beard trim and conditioning.'
      },
      {
        id: 'combo-fade-beard',
        name: 'Skin Fade + Line-Up Beard',
        price: 72,
        duration: '80 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgs5HBdMgpGD0YZn63kFk6O4QRsApzHkTeavnDR0_yFdZMNfOAVBrFmU&s=10',
        description: 'Seamless skin fade blended directly into a sharp razor-lined beard sculpt. Clean, sharp, top to bottom.'
      },
      {
        id: 'combo-executive',
        name: 'Executive Grooming Refresh',
        price: 75,
        duration: '80 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVp9-CaCLEDW1Ur3bqmYbLlEHA2-1JT2AcKQCVDlnLw&s=10',
        description: 'Scissor cut, facial hot towel massage, detailed beard sculpting, and premium hair styling.'
      }
    ]
  },

  'kids-cut': {
    id: 'kids-cut',
    name: 'Kids Cut Signature',
    eyebrow: '05 · KIDS CUT SIGNATURE',
    description: 'Patient, friendly barbers, low-buzz clippers, and great cuts for under-12s with a lollipop finish.',
    styles: [
      {
        id: 'kids-gentleman',
        name: 'Little Gentleman',
        price: 28,
        duration: '30 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVnne_4zS3oVRLgznNNibdijw_sWxx213gOyxZK31mVRXJZCVQL0SSbcw&s=10',
        description: 'Classic side part with scissor finish, natural ear contour, and soft neck taper. Smart and comfortable.'
      },
      {
        id: 'kids-textured-crop',
        name: 'Textured Mini Crop',
        price: 28,
        duration: '30 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr14W_wvD2NX6PJd0HZSmTyi0Y-coJf1WgVhOJgPDH0XOiSW3q0qLoXzg&s=10',
        description: 'Modern textured crop on top with a gentle low taper. Effortless school-day look with natural texture.'
      },
      {
        id: 'kids-taper-fade',
        name: 'Clean Taper Fade',
        price: 30,
        duration: '35 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wwLPoEezTm8xPxTT2Tl-MTwIJ7wL7XzY1stfs4XAZQ&s=10',
        description: 'Crisp edges with a gentle fade at the temples and neckline, keeping natural fullness through the crown.'
      },
      {
        id: 'kids-natural-curls',
        name: 'Natural Curls High-Top',
        price: 32,
        duration: '35 min',
        image: 'https://img.latest-hairstyles.com/2026/07/08/classic-curly-high-top-fade.jpg',
        description: 'Sculpted curl silhouette with precision temple lines and hydrating curl definition.'
      },
      {
        id: 'kids-first-cut',
        name: 'First Cut Milestone',
        price: 26,
        duration: '35 min',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQjH2kMuPEAb91JM_RG0JHfTZJdnlbuwr74vVpHRPZRCxYPBCtYfF0w61&s=10',
        description: 'Extra gentle first milestone haircut for toddlers. Quiet tools, warm cape, keepsake lock envelope and lollipop.'
      }
    ]
  }
}

const allStylesMap = {}

Object.values(serviceCategories).forEach(cat => {
  cat.styles.forEach(s => {
    allStylesMap[s.id] = {
      ...s,
      categoryId: cat.id,
      categoryName: cat.name
    }
  })
})

const services = {
  'signature': {
    name: 'Signature Cut',
    duration: '45 min',
    price: 42
  },
  'skin-fade': {
    name: 'Skin Fade',
    duration: '50 min',
    price: 48
  },
  'beard': {
    name: 'Beard Sculpt',
    duration: '30 min',
    price: 30
  },
  'cut-beard': {
    name: 'Cut + Beard',
    duration: '75 min',
    price: 68
  },
  'kids-cut': {
    name: 'Kids Cut Signature',
    duration: '30 min',
    price: 28
  }
}

const times = [
  '9:00 AM',
  '10:30 AM',
  '12:00 PM',
  '1:30 PM',
  '3:00 PM',
  '4:30 PM',
  '5:00 PM'
]

function getMinBookableDate() {
  const now = new Date()
  const minDate = new Date(now)

  minDate.setHours(0, 0, 0, 0)

  if (now.getHours() >= 17) {
    minDate.setDate(minDate.getDate() + 1)
  }

  return minDate
}

const state = {
  service: 'signature',
  chosenStyle: null,
  barber: 'No preference',
  date: getMinBookableDate(),
  time: '12:00 PM'
}

const page = document.body.dataset.page

const siteHeader = document.querySelector('.site-header')

if (siteHeader) {
  const handleScroll = () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 20)
  }

  window.addEventListener('scroll', handleScroll, {
    passive: true
  })

  handleScroll()
}

document.querySelector('.menu-button')?.addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav')

  nav.classList.toggle('open')
})

if (page === 'booking') {
  initBooking()
}

if (page === 'home') {
  initPromo()
}

initServicesMenu()

function initPromo() {
  const modal = document.querySelector('[data-promo-modal]')

  if (!modal) return

  if (sessionStorage.getItem('northline-promo-seen')) return

  setTimeout(() => {
    modal.classList.add('visible')
  }, 3000)

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

function initServicesMenu() {
  const isSubpage = window.location.pathname.includes('/assets/components/')

  const serviceStylesPage = isSubpage
    ? './service-styles.html'
    : './assets/components/service-styles.html'

  const openButtons = document.querySelectorAll(
    '[data-open-service-menu], [data-open-kids-menu], .kids-menu-trigger'
  )

  openButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      const category =
        btn.dataset.serviceCategory ||
        (btn.hasAttribute('data-open-kids-menu') ? 'kids-cut' : 'signature')

      window.location.href = `${serviceStylesPage}?category=${category}`
    })
  })

  document
    .querySelectorAll('[data-service-studio], [data-kids-studio]')
    .forEach(setupServiceStudio)
}

function setupServiceStudio(studio) {
  let activeCategoryId = 'signature'
  let activeStyleId = serviceCategories.signature.styles[0].id

  const eyebrowEl = studio.querySelector('[data-menu-eyebrow]')
  const headingEl = studio.querySelector('[data-menu-heading]')
  const descEl = studio.querySelector('[data-menu-desc]')
  const navList = studio.querySelector('[data-styles-nav]')
  const activeCard = studio.querySelector('[data-active-style-card]')
  const previewImg =
    studio.querySelector('[data-preview-img]') ||
    studio.querySelector('[data-turntable-img]')
  const previewTag = studio.querySelector('[data-preview-tag]')
  const previewCaption = studio.querySelector('[data-preview-caption]')

  const isSubpage = window.location.pathname.includes('/assets/components/')

  const bookingBasePath = isSubpage
    ? './booking.html'
    : './assets/components/booking.html'

  function setCategory(catId) {
    if (!serviceCategories[catId]) return

    activeCategoryId = catId

    const cat = serviceCategories[catId]

    activeStyleId = cat.styles[0].id

    if (eyebrowEl) {
      eyebrowEl.textContent = cat.eyebrow
    }

    if (headingEl) {
      headingEl.innerHTML = `${cat.name} <em>Styles.</em>`
    }

    if (descEl) {
      descEl.textContent = cat.description
    }

    renderStylesNav()
    renderActiveStyle()
  }

  function renderStylesNav() {
    if (!navList) return

    const cat = serviceCategories[activeCategoryId]

    if (!cat) return

    navList.innerHTML = cat.styles
      .map(
        style => `
          <button type="button" class="style-nav-item ${
            style.id === activeStyleId ? 'active' : ''
          }" data-style-select="${style.id}">
            <div class="style-nav-info">
              <strong>${style.name}</strong>
              <small>${style.description}</small>
            </div>
            <span class="style-nav-price">R${style.price}</span>
          </button>
        `
      )
      .join('')

    navList.querySelectorAll('[data-style-select]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectStyle(btn.dataset.styleSelect)
      })
    })
  }

  function renderActiveStyle() {
    const cat = serviceCategories[activeCategoryId]

    const style =
      cat?.styles.find(s => s.id === activeStyleId) ||
      cat?.styles[0]

    if (!style) return

    if (previewImg) {
      previewImg.style.opacity = '0.35'
      previewImg.src = style.image

      setTimeout(() => {
        previewImg.style.opacity = '1'
      }, 80)
    }

    if (previewTag) {
      previewTag.textContent = cat.name
    }

    if (previewCaption) {
      previewCaption.innerHTML = `
        <span>${style.name}</span>
        <span>R${style.price}</span>
      `
    }

    if (activeCard) {
      activeCard.innerHTML = `
        <div class="active-style-meta">
          <div>
            <span class="eyebrow" style="color:var(--orange);margin-bottom:4px;display:block;">${cat.name}</span>
            <h3>${style.name}</h3>
          </div>
          <span class="active-style-price">R${style.price}</span>
        </div>
        <p class="active-style-desc">${style.description}</p>
        <a class="button button-accent full-button book-style-cta" href="${bookingBasePath}?service=${cat.id}&style=${style.id}">
          Select ${style.name} & Book Chair (R${style.price})
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </a>
      `
    }
  }

  function selectStyle(styleId) {
    const cat = serviceCategories[activeCategoryId]

    const found = cat?.styles.find(s => s.id === styleId)

    if (!found) return

    activeStyleId = styleId

    if (navList) {
      navList.querySelectorAll('.style-nav-item').forEach(item => {
        item.classList.toggle(
          'active',
          item.dataset.styleSelect === styleId
        )
      })
    }

    renderActiveStyle()
  }

  function scrollToStudio() {
    const target = studio.closest('section') || studio

    setTimeout(() => {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 120)
  }

  studio._openCategory = catId => {
    setCategory(catId || 'signature')
    scrollToStudio()
  }

  const urlCat = new URLSearchParams(window.location.search).get('category')

  setCategory(
    urlCat && serviceCategories[urlCat]
      ? urlCat
      : 'signature'
  )

  scrollToStudio()
}

function initBooking() {
  const urlParams = new URLSearchParams(location.search)

  const serviceParam = urlParams.get('service')
  const styleParam = urlParams.get('style')

  if (styleParam && allStylesMap[styleParam]) {
    const styleObj = allStylesMap[styleParam]

    state.chosenStyle = styleObj
    state.service = styleObj.categoryId
  } else if (serviceParam && serviceCategories[serviceParam]) {
    state.service = serviceParam
    state.chosenStyle = null
  } else {
    state.service = 'signature'
    state.chosenStyle = null
  }

  const minDate = getMinBookableDate()

  if (state.date < minDate) {
    state.date = new Date(minDate)
  }

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
    form: document.querySelector('[data-booking-form]')
  }

  els.serviceOptions.forEach(btn => {
    btn.addEventListener('click', e => {
      if (e.target.closest('.service-tag')) return

      const newService = btn.dataset.service

      if (serviceCategories[newService]) {
        state.service = newService
        state.chosenStyle = null

        syncUI(els)
      }
    })
  })

  els.timeOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return

      state.time = btn.dataset.time

      syncTimes(els)
      syncUI(els)
    })
  })

  els.barberOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      state.barber =
        btn.dataset.barber === 'any'
          ? 'No preference'
          : btn.dataset.barber

      syncUI(els)
    })
  })

  els.dateArrows.forEach(btn => {
    btn.addEventListener('click', () => {
      const move = Number(btn.dataset.dateMove)

      const targetDate = new Date(state.date)

      targetDate.setDate(targetDate.getDate() + move)

      const currentMin = getMinBookableDate()

      if (targetDate < currentMin) return

      state.date = targetDate

      renderDates(els)
      syncTimes(els)
      syncUI(els)
    })
  })

  els.continueBtn?.addEventListener('click', () => {
    const cat = serviceCategories[state.service]

    const chosen =
      state.chosenStyle &&
      state.chosenStyle.categoryId === state.service
        ? state.chosenStyle
        : null

    const displayName = chosen
      ? `${cat ? cat.name : services[state.service]?.name} — ${chosen.name}`
      : services[state.service]?.name || 'Signature Cut'

    if (els.modalDescription) {
      els.modalDescription.textContent =
        `We will hold your spot for ${displayName} on ` +
        `${state.date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric'
        })} at ${state.time}.`
    }

    els.modal?.classList.add('visible')
  })

  els.closeModal?.addEventListener('click', () => {
    els.modal?.classList.remove('visible')
  })

  els.modal?.addEventListener('click', e => {
    if (e.target === els.modal) {
      els.modal.classList.remove('visible')
    }
  })

  els.form?.addEventListener('submit', async e => {
    e.preventDefault()

    const formData = new FormData(els.form)

    state.customerName = String(
      formData.get('name') || ''
    ).trim()

    state.customerEmail = String(
      formData.get('email') || ''
    ).trim()

    state.customerWhatsapp = String(
      formData.get('whatsapp') || ''
    ).trim()

    if (!state.customerName) {
      alert('Please enter your name.')
      return
    }

    if (
      !state.customerEmail ||
      !state.customerEmail.includes('@')
    ) {
      alert('Please enter a valid email address.')
      return
    }

    if (!state.customerWhatsapp) {
      alert('Please enter your WhatsApp number.')
      return
    }

    const cat = serviceCategories[state.service]

    const chosen =
      state.chosenStyle &&
      state.chosenStyle.categoryId === state.service
        ? state.chosenStyle
        : null

    const displayName = chosen
      ? `${cat ? cat.name : services[state.service]?.name} — ${chosen.name}`
      : services[state.service]?.name || 'Signature Cut'

    const duration = chosen
      ? chosen.duration
      : services[state.service]?.duration || '45 min'

    const price = chosen
      ? `R${chosen.price}`
      : `R${services[state.service]?.price || 42}`

    const bookingData = {
      customerName: state.customerName,
      customerEmail: state.customerEmail,
      customerWhatsapp: state.customerWhatsapp,
      service: state.service,
      serviceName: displayName,
      barber: state.barber,
      date: state.date.toISOString(),
      dateFormatted: state.date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      time: state.time,
      duration,
      price,
      chosenStyle: chosen
        ? {
            id: chosen.id,
            name: chosen.name,
            categoryId: chosen.categoryId,
            categoryName: chosen.categoryName
          }
        : null
    }

    const submitButton =
      els.form.querySelector('button[type="submit"]')

    if (submitButton) {
      submitButton.disabled = true
      submitButton.textContent = 'Confirming booking...'
    }

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        }
      )

      let result = {}

      try {
        result = await response.json()
      } catch {
        result = {}
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
          result.error ||
          'Unable to complete your booking.'
        )
      }

      state.bookingId = result.booking?.id || null
      state.emailSent = Boolean(result.emailSent)
      state.whatsappSent = Boolean(result.whatsappSent)

      els.modal?.classList.remove('visible')

      showConfirmation()
    } catch (error) {
      console.error('[Booking] Failed:', error)

      alert(
        error.message ||
        'Something went wrong while confirming your booking. Please try again.'
      )
    } finally {
      if (submitButton) {
        submitButton.disabled = false
        submitButton.textContent = 'Confirm Booking'
      }
    }
  })

  renderDates(els)
  syncTimes(els)
  syncUI(els)
}

function syncTimes(els) {
  if (!els.timeOptions) return

  const now = new Date()

  const isToday =
    state.date.toDateString() === now.toDateString()

  let firstAvailableTime = null

  els.timeOptions.forEach(btn => {
    const timeStr = btn.dataset.time

    const [timePart, meridiem] = timeStr.split(' ')

    const [h, m] = timePart.split(':').map(Number)

    const hour24 =
      (h % 12) +
      (meridiem === 'PM' ? 12 : 0)

    const isBefore9 = hour24 < 9

    const isAfter5 =
      hour24 > 17 ||
      (hour24 === 17 && m > 0)

    let isPast = false

    if (isToday) {
      const slotTime = new Date(state.date)

      slotTime.setHours(
        hour24,
        m,
        0,
        0
      )

      if (slotTime <= now) {
        isPast = true
      }
    }

    const disabled =
      isBefore9 ||
      isAfter5 ||
      isPast

    btn.disabled = disabled

    btn.classList.toggle(
      'disabled',
      disabled
    )

    if (!disabled && !firstAvailableTime) {
      firstAvailableTime = timeStr
    }
  })

  const currentBtn = Array.from(
    els.timeOptions
  ).find(
    b => b.dataset.time === state.time
  )

  if (!currentBtn || currentBtn.disabled) {
    if (firstAvailableTime) {
      state.time = firstAvailableTime
    }
  }

  els.timeOptions.forEach(btn => {
    btn.classList.toggle(
      'selected',
      btn.dataset.time === state.time &&
      !btn.disabled
    )
  })
}

function renderDates(els) {
  if (!els.dateOptions) return

  els.dateOptions.replaceChildren()

  const minDate = getMinBookableDate()

  if (state.date < minDate) {
    state.date = new Date(minDate)
  }

  let startDate = new Date(state.date)

  startDate.setDate(
    startDate.getDate() - 2
  )

  if (startDate < minDate) {
    startDate = new Date(minDate)
  }

  for (let i = 0; i < 5; i++) {
    const d = new Date(startDate)

    d.setDate(
      startDate.getDate() + i
    )

    const isPast = d < minDate

    const isSelected =
      d.toDateString() ===
      state.date.toDateString()

    const btn = document.createElement('button')

    btn.type = 'button'

    btn.className =
      'date-option' +
      (isSelected ? ' selected' : '') +
      (isPast ? ' disabled' : '')

    btn.dataset.date = d.toISOString()

    btn.disabled = isPast

    const dayLabel =
      document.createElement('small')

    const now = new Date()

    now.setHours(0, 0, 0, 0)

    if (
      d.toDateString() ===
      now.toDateString()
    ) {
      dayLabel.textContent = 'Today'
    } else {
      dayLabel.textContent =
        d.toLocaleDateString(
          'en-US',
          {
            weekday: 'short'
          }
        )
    }

    const dayNum =
      document.createElement('strong')

    dayNum.textContent = d.getDate()

    btn.append(
      dayLabel,
      dayNum
    )

    btn.addEventListener('click', () => {
      if (btn.disabled) return

      state.date =
        new Date(btn.dataset.date)

      renderDates(els)
      syncTimes(els)
      syncUI(els)
    })

    els.dateOptions.appendChild(btn)
  }

  const prevDate =
    new Date(state.date)

  prevDate.setDate(
    prevDate.getDate() - 1
  )

  els.dateArrows.forEach(btn => {
    if (
      btn.dataset.dateMove === '-1'
    ) {
      const canGoBack =
        prevDate >= minDate

      btn.disabled = !canGoBack

      btn.setAttribute(
        'aria-disabled',
        String(!canGoBack)
      )
    }
  })
}

function syncUI(els) {
  const cat =
    serviceCategories[state.service]

  const chosen =
    state.chosenStyle &&
    state.chosenStyle.categoryId ===
      state.service
      ? state.chosenStyle
      : null

  const displayName = chosen
    ? `${cat ? cat.name : services[state.service]?.name} — ${chosen.name}`
    : services[state.service]?.name ||
      'Signature Cut'

  const displayDuration =
    chosen
      ? chosen.duration
      : services[state.service]?.duration ||
        '45 min'

  const displayPrice =
    chosen
      ? `R${chosen.price}`
      : `R${services[state.service]?.price || 42}`

  const buttonLabel = chosen
    ? `${chosen.name} (${displayPrice})`
    : `${services[state.service]?.name || 'Signature Cut'} (${displayPrice})`

  els.serviceOptions.forEach(btn => {
    const isSelected =
      btn.dataset.service ===
      state.service

    btn.classList.toggle(
      'selected',
      isSelected
    )
  })

  els.barberOptions.forEach(btn => {
    const label =
      btn.dataset.barber === 'any'
        ? 'No preference'
        : btn.dataset.barber

    btn.classList.toggle(
      'selected',
      label === state.barber
    )
  })

  if (els.continueService) {
    els.continueService.textContent =
      buttonLabel
  }

  if (els.summaryService) {
    els.summaryService.textContent =
      displayName
  }

  if (els.summaryBarber) {
    els.summaryBarber.textContent =
      state.barber
  }

  if (els.summaryDuration) {
    els.summaryDuration.textContent =
      displayDuration
  }

  if (els.summaryDate) {
    els.summaryDate.textContent =
      state.date.toLocaleDateString(
        'en-US',
        {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        }
      )
  }

  if (els.summaryTime) {
    els.summaryTime.textContent =
      state.time
  }

  if (els.summaryPrice) {
    els.summaryPrice.textContent =
      displayPrice
  }
}

function showConfirmation() {
  const cat =
    serviceCategories[state.service]

  const chosen =
    state.chosenStyle &&
    state.chosenStyle.categoryId ===
      state.service
      ? state.chosenStyle
      : null

  const displayName = chosen
    ? `${cat ? cat.name : services[state.service]?.name} — ${chosen.name}`
    : services[state.service]?.name ||
      'Signature Cut'

  const durationMin =
    chosen
      ? parseInt(chosen.duration, 10)
      : parseInt(
          services[state.service]?.duration ||
            '45',
          10
        )

  const start =
    parseStartTime(
      state.date,
      state.time
    )

  const end =
    new Date(
      start.getTime() +
      durationMin * 60000
    )

  const googleUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(
      'Northline Barbers — ' + displayName
    )}` +
    `&dates=${fmtCal(start)}/${fmtCal(end)}` +
    `&details=${encodeURIComponent(
      'Booking for ' +
      state.customerName +
      ' (' +
      state.customerWhatsapp +
      '). Barber: ' +
      state.barber +
      '. Your appointment at Northline Barbers. See you in the chair.'
    )}` +
    `&location=${encodeURIComponent(
      '14 Lynnwood Road, Brooklyn, Pretoria 0181'
    )}`

  const backdrop =
    document.createElement('div')

  backdrop.className =
    'modal-backdrop visible'

  backdrop.dataset.confirmationModal = ''

  const modal =
    document.createElement('div')

  modal.className =
    'booking-modal confirmation-modal'

  modal.setAttribute(
    'role',
    'dialog'
  )

  modal.setAttribute(
    'aria-modal',
    'true'
  )

  const checkmark =
    document.createElement('div')

  checkmark.className =
    'success-icon'

  checkmark.textContent = '✓'

  const eyebrow =
    document.createElement('p')

  eyebrow.className =
    'eyebrow'

  eyebrow.textContent =
    'YOU ARE ALL SET'

  const heading =
    document.createElement('h2')

  heading.append(
    'See you in',
    document.createElement('br')
  )

  const italic =
    document.createElement('em')

  italic.textContent =
    'the chair.'

  heading.appendChild(italic)

  const desc =
    document.createElement('p')

  desc.className =
    'modal-description'

  const confirmationChannel =
    state.emailSent && state.whatsappSent
      ? `A confirmation has been sent to ${state.customerEmail} and ${state.customerWhatsapp}.`
      : state.emailSent
        ? `A confirmation has been sent to ${state.customerEmail}.`
        : state.whatsappSent
          ? `A confirmation has been sent to ${state.customerWhatsapp}.`
          : 'Your booking has been successfully confirmed.'

  desc.textContent =
    `Your ${displayName} with ${
      state.barber === 'No preference'
        ? 'the next available barber'
        : state.barber
    } is booked for ${
      state.date.toLocaleDateString(
        'en-US',
        {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        }
      )
    } at ${state.time}. ${confirmationChannel}`

  const actions =
    document.createElement('div')

  actions.className =
    'calendar-actions'

  const googleLink =
    document.createElement('a')

  googleLink.className =
    'button button-dark full-button'

  googleLink.href =
    googleUrl

  googleLink.target =
    '_blank'

  googleLink.rel =
    'noreferrer'

  googleLink.textContent =
    'Add to Google Calendar'

  const icsButton =
    document.createElement('button')

  icsButton.type = 'button'

  icsButton.className =
    'button button-outline full-button'

  icsButton.dataset.downloadIcs = ''

  icsButton.textContent =
    'Add Apple Calendar file'

  actions.append(
    googleLink,
    icsButton
  )

  const backLink =
    document.createElement('a')

  backLink.className =
    'text-link centered-link'

  backLink.href =
    '../../index.html'

  backLink.textContent =
    'Back to home →'

  modal.append(
    checkmark,
    eyebrow,
    heading,
    desc,
    actions,
    backLink
  )

  backdrop.appendChild(modal)

  document.body.appendChild(backdrop)

  icsButton.addEventListener(
    'click',
    () => {
      const ics =
        `BEGIN:VCALENDAR\n` +
        `VERSION:2.0\n` +
        `BEGIN:VEVENT\n` +
        `DTSTART:${fmtCal(start)}\n` +
        `DTEND:${fmtCal(end)}\n` +
        `SUMMARY:Northline Barbers — ${displayName}\n` +
        `LOCATION:14 Lynnwood Road, Brooklyn, Pretoria 0181\n` +
        `DESCRIPTION:Booking for ${state.customerName} (${state.customerWhatsapp}). Barber: ${state.barber}\n` +
        `END:VEVENT\n` +
        `END:VCALENDAR`

      const link =
        document.createElement('a')

      link.href =
        URL.createObjectURL(
          new Blob(
            [ics],
            {
              type: 'text/calendar'
            }
          )
        )

      link.download =
        'northline-appointment.ics'

      link.click()

      URL.revokeObjectURL(
        link.href
      )
    }
  )
}

function parseStartTime(
  date,
  timeStr
) {
  const [time, meridiem] =
    timeStr.split(' ')

  const [hours, minutes] =
    time.split(':').map(Number)

  const d = new Date(date)

  d.setHours(
    hours % 12 +
      (meridiem === 'PM' ? 12 : 0),
    minutes,
    0,
    0
  )

  return d
}

function fmtCal(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')
}