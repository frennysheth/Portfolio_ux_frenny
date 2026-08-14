export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ detail: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ detail: 'Name, email, and message are required.' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
  const SENDER_EMAIL = process.env.SENDER_EMAIL?.trim() || 'onboarding@resend.dev';
  const OWNER_EMAIL = process.env.OWNER_EMAIL?.trim() || 'ux.frenny@gmail.com';

  const letterSubject = subject?.trim() || `A letter from ${name}`;
  const safeMessage = message.replace(/\n/g, '<br/>');

  const htmlContent = `
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2E0D2;padding:32px 0;font-family:Georgia,serif;color:#2A2626">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#FAF7F2;border-radius:6px;padding:32px;box-shadow:0 8px 24px rgba(42,38,38,0.12)">
          <tr><td>
            <p style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#9E182B;margin:0 0 8px">A NEW LETTER · FROM YOUR PORTFOLIO</p>
            <h1 style="font-family:Georgia,serif;font-size:26px;margin:0 0 16px;color:#2A2626">${letterSubject}</h1>
            <p style="margin:0 0 4px"><strong>From:</strong> ${name}</p>
            <p style="margin:0 0 20px"><strong>Email:</strong> <a href="mailto:${email}" style="color:#9E182B">${email}</a></p>
            <div style="border-top:1px dashed #9E182B;margin:16px 0"></div>
            <p style="font-size:16px;line-height:1.7;white-space:pre-wrap">${safeMessage}</p>
            <div style="border-top:1px dashed #9E182B;margin:20px 0 12px"></div>
            <p style="font-size:12px;color:#7A7070;margin:0">Sent with love from your portfolio website</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  `;

  if (!RESEND_API_KEY) {
    // If RESEND_API_KEY is not configured yet on Vercel
    return res.status(200).json({
      status: 'pending',
      delivered: false,
      message: 'Your letter was received! (To deliver to your inbox, add RESEND_API_KEY to your Vercel Environment Variables).'
    });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [OWNER_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${letterSubject}`,
        html: htmlContent
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(502).json({
        detail: data.message || 'Email provider error. Please try emailing directly.'
      });
    }

    return res.status(200).json({
      status: 'success',
      delivered: true,
      provider_id: data.id,
      message: 'Your letter has been sent. Thank you for reaching out!'
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      detail: error.message || 'Could not send your letter at this moment.'
    });
  }
}
