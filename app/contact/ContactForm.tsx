'use client';

import { useActionState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';
import { Turnstile } from '@marsidev/react-turnstile';

const initialState = {
  success: false,
  message: '',
  error: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="contact-form">
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="field">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>
      
      <div className="field">
        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
      </div>
      
      <button type="submit" className="submit-btn" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </button>

      {state?.success && (
        <div className="success-message" style={{ color: 'green', marginTop: '1rem' }}>
          {state.message}
        </div>
      )}

      {state?.error && (
        <div className="error-message" style={{ color: 'red', marginTop: '1rem' }}>
          {state.error}
        </div>
      )}
    </form>
  );
}
