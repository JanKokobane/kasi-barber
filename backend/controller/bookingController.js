import { sendBookingEmail } from '../service/emailService.js';

export const bookingController = {
  async createBooking(req, res) {
    try {
      const {
        customerName,
        customerEmail,
        customerWhatsapp,
        service,
        serviceName,
        barber,
        date,
        dateFormatted,
        time,
        duration,
        price,
        chosenStyle
      } = req.body;

      if (!customerName || !customerName.trim()) {
        return res.status(400).json({
          error: 'Customer name is required'
        });
      }

      if (!customerEmail || !customerEmail.includes('@')) {
        return res.status(400).json({
          error: 'A valid email address is required for booking confirmation'
        });
      }

      const bookingId = `NL-${Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()}`;

      const createdAt = new Date().toISOString();

      const bookingRecord = {
        id: bookingId,
        customerName: customerName.trim(),
        customerEmail: customerEmail.trim().toLowerCase(),
        customerWhatsapp: customerWhatsapp
          ? customerWhatsapp.trim()
          : '',
        service: service || 'signature',
        serviceName: serviceName || 'Signature Cut',
        barber: barber || 'Next available',
        date: date || new Date().toISOString(),
        dateFormatted: dateFormatted || new Date().toLocaleDateString(
          'en-US',
          {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          }
        ),
        time: time || '10:00 AM',
        duration: duration || '45 min',
        price: price || 'R42',
        chosenStyle: chosenStyle || null,
        createdAt
      };

      let emailResult = null;
      let emailError = null;

      try {
        emailResult = await sendBookingEmail(bookingRecord);
      } catch (err) {
        console.error(
          '[Booking Controller] Email dispatch warning:',
          err.message
        );

        emailError = {
          message: err.message,
          details: err.details || null
        };
      }

      return res.status(201).json({
        success: true,
        message: emailResult
          ? `Booking confirmed! Confirmation email dispatched to ${bookingRecord.customerEmail}`
          : `Booking received. ${emailError?.message || 'Email delivery pending'}`,
        booking: bookingRecord,
        emailSent: Boolean(emailResult),
        emailResult,
        emailError
      });
    } catch (error) {
      console.error('[Booking Controller] Unexpected error:', error);

      return res.status(500).json({
        error: 'Failed to process booking',
        message: error.message
      });
    }
  },

  healthCheck(req, res) {
    res.json({
      status: 'ok',
      service: 'Northline Barbers Booking & Email Backend',
      timestamp: new Date().toISOString()
    });
  }
};