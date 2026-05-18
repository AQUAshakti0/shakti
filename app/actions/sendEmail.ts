'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: { success: boolean; message?: string; error?: string; } | undefined, formData: FormData) {
  console.log('sendEmail action triggered');
  console.log('RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields.' };
  }

  const turnstileResponse = formData.get('cf-turnstile-response') as string;

  if (!turnstileResponse) {
    return { success: false, error: 'Please complete the CAPTCHA.' };
  }

  // Verify Turnstile
  try {
    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(turnstileResponse)}`,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return { success: false, error: 'CAPTCHA verification failed. Please try again.' };
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return { success: false, error: 'Failed to verify CAPTCHA.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'Aqua Shakti Inquiries <onboarding@resend.dev>', // Fallback sender
      to: 'info@aquashaktiipl.com',
      subject: `New Inquiry: ${subject || 'General Inquiry'}`,
      replyTo: email,
      text: `
        New inquiry received from the website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject || 'General Inquiry'}
        
        Message:
        ${message}
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return { success: false, error: data.error.message };
    }

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, error: errorMessage };
  }
}
