'use client';

import { useActionState } from 'react';
import { sendEmail, type EmailFormState } from '@/app/actions/sendEmail';
import { Turnstile } from '@marsidev/react-turnstile';

const initialState: EmailFormState = {
  success: false,
  message: '',
  error: '',
};

// Web Audio API Synthesized Water Droplet Sound Effect
const playWaterDropSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    // Classic water droplet pitch sweep (low -> high -> low)
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.04);
    osc.frequency.exponentialRampToValueAtTime(450, now + 0.13);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  } catch {
    // Ignore audio permission restrictions
  }
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="contact-form" style={{ marginTop: 0, maxWidth: "100%" }}>
      <div className="field">
        <label htmlFor="name">NAME *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onFocus={playWaterDropSound}
          onClick={playWaterDropSound}
          placeholder="Enter your full name"
        />
      </div>
      <div className="field">
        <label htmlFor="phone">PHONE</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onFocus={playWaterDropSound}
          onClick={playWaterDropSound}
          placeholder="Enter phone number"
        />
      </div>
      <div className="field">
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onFocus={playWaterDropSound}
          onClick={playWaterDropSound}
          placeholder="Enter email address"
        />
      </div>
      <div className="field">
        <label htmlFor="subject">SUBJECT</label>
        <input
          type="text"
          id="subject"
          name="subject"
          onFocus={playWaterDropSound}
          onClick={playWaterDropSound}
          placeholder="Inquiry subject"
        />
      </div>
      <div className="field">
        <label htmlFor="message">MESSAGE *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          onFocus={playWaterDropSound}
          onClick={playWaterDropSound}
          placeholder="Write your inquiry message here..."
        ></textarea>
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
