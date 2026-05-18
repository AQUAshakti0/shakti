"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    name: "John S Odell",
    role: "Customer",
    stars: 4,
    text: "Aquashakti Water Solution is very specializes in providing hi-tech reverse osmosis plants at the most affordable rates. Their excellent quality water plants prove the name itself. Their RO Plant solves all your hard water problems and many more.",
  },
  {
    name: "Rajesh Patel",
    role: "Industrial Client",
    stars: 5,
    text: "We have been using Aqua Shakti's ETP plant for over 3 years now. The quality of treated water consistently meets Pollution Control Board norms. Their after-sales service is exceptional and response time is very quick.",
  },
  {
    name: "Suresh Mehta",
    role: "Hotel Owner",
    stars: 5,
    text: "Installed their commercial RO system in our hotel chain. The water quality has improved dramatically and our guests are very satisfied. Aqua Shakti team is professional, knowledgeable and always available for support.",
  },
  {
    name: "Amit Sharma",
    role: "Factory Manager",
    stars: 4,
    text: "Their boiler water treatment chemicals have significantly reduced scaling and corrosion in our systems. Production downtime has decreased by 40%. Highly recommend their ASTreat product range for industrial applications.",
  },
];

const AUTO_SLIDE_MS = 3500;
const ANIMATION_MS = 500;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animClass, setAnimClass] = useState("testimonial-card-enter");
  const isAnimating = useRef(false);

  const slideTo = useCallback((nextIndex: number, direction: "left" | "right") => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Exit animation
    setAnimClass(direction === "left" ? "testimonial-card-exit-left" : "testimonial-card-exit-right");

    setTimeout(() => {
      setCurrent(nextIndex);
      // Enter animation from opposite side
      setAnimClass(direction === "left" ? "testimonial-card-enter-right" : "testimonial-card-enter-left");

      // Small delay to trigger the enter transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimClass("testimonial-card-enter");
          setTimeout(() => {
            isAnimating.current = false;
          }, ANIMATION_MS);
        });
      });
    }, ANIMATION_MS);
  }, []);

  const next = useCallback(() => {
    const nextIndex = current === testimonials.length - 1 ? 0 : current + 1;
    slideTo(nextIndex, "left");
  }, [current, slideTo]);

  const prev = useCallback(() => {
    const nextIndex = current === 0 ? testimonials.length - 1 : current - 1;
    slideTo(nextIndex, "right");
  }, [current, slideTo]);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    slideTo(index, index > current ? "left" : "right");
  }, [current, slideTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, current, next]);

  const t = testimonials[current];

  return (
    <section
      className="testimonials-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="testimonials-title">What Our Client Says</h2>
      <p className="testimonials-subtitle">
        Customer satisfaction is a primary goal for our company, here is what our customers feel about our products & Services!
      </p>

      <div className="testimonials-carousel">
        {/* Left Arrow */}
        <button className="testimonial-arrow testimonial-arrow-left" onClick={prev} aria-label="Previous testimonial">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Card */}
        <div className={`testimonial-card ${animClass}`}>
          {/* Open quote */}
          <span className="testimonial-quote testimonial-quote-open">&ldquo;</span>

          {/* Avatar */}
          <div className="testimonial-avatar">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#e8eff5" />
              <circle cx="24" cy="18" r="7" fill="#92b4c8" />
              <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#92b4c8" />
            </svg>
          </div>

          <h3 className="testimonial-name">{t.name}</h3>
          <span className="testimonial-role">{t.role}</span>

          {/* Stars */}
          <div className="testimonial-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={i < t.stars ? "star-filled" : "star-empty"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
              </svg>
            ))}
          </div>

          <p className="testimonial-text">{t.text}</p>

          {/* Close quote */}
          <span className="testimonial-quote testimonial-quote-close">&rdquo;</span>
        </div>

        {/* Right Arrow */}
        <button className="testimonial-arrow testimonial-arrow-right" onClick={next} aria-label="Next testimonial">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot ${i === current ? "testimonial-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Auto-slide progress bar */}
      <div className="testimonial-progress-track">
        <div
          className="testimonial-progress-bar"
          key={current}
          style={{
            animationDuration: `${AUTO_SLIDE_MS}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>
    </section>
  );
}
