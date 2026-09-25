const RESEND_API_KEY = process.env.RESEND_API_KEY;
const DEFAULT_SENDER = 'Northline Barbers <onboarding@resend.dev>';

function buildBookingEmailHtml(booking) {
  const {
    id,
    customerName,
    serviceName,
    barber,
    dateFormatted,
    time,
    duration,
    price,
    customerWhatsapp
  } = booking;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Booking is Confirmed — Northline Barbers</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0c;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#e8e5df;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#0d0d0c;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#161514;border:1px solid #2d2a26;border-radius:4px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,0.5);">
          <tr>
            <td style="padding:32px 32px 24px;border-bottom:1px solid #2d2a26;background-color:#1c1a18;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display:inline-block;width:34px;height:34px;line-height:34px;text-align:center;background:#c59b6d;color:#121110;font-weight:700;font-size:18px;letter-spacing:1px;border-radius:2px;margin-bottom:8px;">N</span>
                    <h1 style="margin:8px 0 0;font-size:22px;letter-spacing:0.06em;text-transform:uppercase;color:#f3efe8;font-weight:600;">Northline Barbers</h1>
                    <p style="margin:4px 0 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#c59b6d;">Est. 2014 · Pretoria, South Africa</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display:inline-block;padding:4px 10px;font-size:11px;font-family:monospace;letter-spacing:0.08em;color:#c59b6d;background:rgba(197,155,109,0.12);border:1px solid rgba(197,155,109,0.3);border-radius:2px;">#${id || 'BOOKING'}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 32px 20px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#c59b6d;font-weight:600;">Booking Confirmed</p>
              <h2 style="margin:0 0 12px;font-size:26px;line-height:1.25;color:#ffffff;font-weight:500;">See you in the chair,<br><span style="color:#c59b6d;font-style:italic;">${customerName}</span>.</h2>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#a8a49c;">
                We've reserved your appointment at Northline. Below is a breakdown of your upcoming visit.
              </p>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background:#1f1d1a;border:1px solid #332f2a;border-radius:4px;padding:20px;margin-bottom:24px;">
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;width:35%;">Service</td>
                  <td style="padding:6px 0;font-size:14px;color:#f3efe8;font-weight:600;text-align:right;">${serviceName}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;">Barber</td>
                  <td style="padding:6px 0;font-size:14px;color:#f3efe8;font-weight:500;text-align:right;">${barber}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;">Date</td>
                  <td style="padding:6px 0;font-size:14px;color:#c59b6d;font-weight:600;text-align:right;">${dateFormatted}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;">Time</td>
                  <td style="padding:6px 0;font-size:14px;color:#c59b6d;font-weight:600;text-align:right;">${time} (${duration})</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;">Total Price</td>
                  <td style="padding:6px 0;font-size:15px;color:#f3efe8;font-weight:700;text-align:right;">${price}</td>
                </tr>
                ${customerWhatsapp ? `
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#8a867e;text-transform:uppercase;letter-spacing:0.06em;">Phone / WhatsApp</td>
                  <td style="padding:6px 0;font-size:13px;color:#a8a49c;text-align:right;">${customerWhatsapp}</td>
                </tr>` : ''}
              </table>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px dashed #332f2a;padding-top:20px;">
                <tr>
                  <td>
                    <h3 style="margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#c59b6d;">Shop Location</h3>
                    <p style="margin:0 0 16px;font-size:13px;line-height:1.5;color:#b8b4ab;">
                      14 Lynnwood Road, Brooklyn, Pretoria 0181<br>
                      Free customer parking available in front of the shop.
                    </p>
                    <p style="margin:0;font-size:12px;line-height:1.5;color:#7a766e;">
                      Need to reschedule or running late? Reply to this email or send us a WhatsApp at <strong>+27 12 345 6789</strong>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px;background:#121110;border-top:1px solid #2d2a26;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#6f6b64;">
                Northline Barbers — Considered cuts, proper service, and a chair worth returning to.
              </p>
              <p style="margin:0;font-size:11px;color:#524e47;">
                © ${new Date().getFullYear()} Northline Barbers. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function sendBookingEmail(booking) {
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  if (!booking.customerEmail) {
    throw new Error('Customer email is required to send confirmation');
  }

  const payload = {
    from: process.env.EMAIL_FROM || DEFAULT_SENDER,
    to: [booking.customerEmail],
    subject: `Booking Confirmed: ${booking.serviceName} at Northline Barbers (${booking.time})`,
    html: buildBookingEmailHtml(booking),
    text: `Your appointment at Northline Barbers is confirmed!

Service: ${booking.serviceName}
Barber: ${booking.barber}
Date: ${booking.dateFormatted}
Time: ${booking.time} (${booking.duration})
Price: ${booking.price}
Location: 14 Lynnwood Road, Brooklyn, Pretoria 0181

See you in the chair!`
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data?.message || data?.error?.message || 'Failed to dispatch email via Resend';
    console.error('[Resend Error]', response.status, data);

    const err = new Error(errorMsg);
    err.statusCode = response.status;
    err.details = data;

    throw err;
  }

  return {
    success: true,
    emailId: data.id,
    recipient: booking.customerEmail
  };
}