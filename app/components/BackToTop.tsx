"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (currentScroll > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Convert scroll percentage (0 - 100%) to liquid Y position (54px - 0px)
  // At 0% scroll, water level is at Y = 54 (bottom, empty)
  // At 100% scroll, water level is at Y = -2 (top, full)
  const waterLevelY = 54 - (scrollProgress / 100) * 56;

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top water-fill-btn ${isVisible ? "back-to-top-visible" : ""}`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      {/* Liquid Water Container */}
      <svg className="water-canvas" viewBox="0 0 54 54">
        <defs>
          {/* Circular Clip Path to keep liquid inside the round button */}
          <clipPath id="button-circle-clip">
            <circle cx="27" cy="27" r="27" />
          </clipPath>

          {/* Realistic Liquid Gradients - Light Blue Theme */}
          <linearGradient id="water-gradient-front" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="water-gradient-back" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Liquid Content clipped into circle */}
        <g clipPath="url(#button-circle-clip)">
          {/* Background tint when empty */}
          <rect x="0" y="0" width="54" height="54" className="water-btn-bg" />

          {/* Liquid Fill Group - Y position moves up with scroll */}
          <g style={{ transform: `translateY(${waterLevelY}px)`, transition: "transform 0.15s ease-out" }}>
            {/* Back Wave */}
            <path
              className="water-wave wave-back"
              d="M -108 0 Q -81 6 -54 0 T 0 0 T 54 0 T 108 0 V 70 H -108 Z"
              fill="url(#water-gradient-back)"
            />

            {/* Front Wave */}
            <path
              className="water-wave wave-front"
              d="M -108 0 Q -81 -6 -54 0 T 0 0 T 54 0 T 108 0 V 70 H -108 Z"
              fill="url(#water-gradient-front)"
            />
          </g>

          {/* Rising Water Bubbles */}
          {scrollProgress > 15 && (
            <g className="water-bubbles">
              <circle cx="18" cy="38" r="1.5" className="bubble bubble-1" />
              <circle cx="32" cy="42" r="2" className="bubble bubble-2" />
              <circle cx="24" cy="45" r="1.2" className="bubble bubble-3" />
            </g>
          )}
        </g>
      </svg>

      {/* Floating Arrow Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="back-to-top-icon"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Percentage tooltip / badge on hover */}
      <span className="water-progress-badge">{Math.round(scrollProgress)}%</span>
    </button>
  );
}
