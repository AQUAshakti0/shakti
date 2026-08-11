"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  isTextOnly?: boolean;
  textValue?: string;
  isLive?: boolean;
}

function StatCounterItem({
  value,
  prefix = "",
  suffix = "",
  label,
  isTextOnly = false,
  textValue,
  isLive = false,
}: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isTextOnly) return;

    const end = value;
    const duration = 1800; // 1.8 seconds animation duration
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Smooth deceleration curve (cubic ease-out)
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible, value, isTextOnly]);

  return (
    <div ref={itemRef} className={`stat-item-card ${isVisible ? "visible" : ""}`}>
      <div className="stat-number">
        {isTextOnly ? (
          <span>{textValue}</span>
        ) : (
          <>
            {prefix && <span className="stat-affix">{prefix}</span>}
            <span>{count}</span>
            {suffix && <span className="stat-affix">{suffix}</span>}
          </>
        )}
        {isLive && (
          <span className="live-pill">
            <span className="live-pulse" />
            LIVE
          </span>
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatCounter() {
  const [liveVisitors] = useState(() => {
    if (typeof window !== "undefined") {
      const STORAGE_KEY = "asi_live_visitor_count";
      const SESSION_KEY = "asi_session_tracked";

      let baseCount = 394;
      const savedCount = localStorage.getItem(STORAGE_KEY);
      if (savedCount) {
        const parsed = parseInt(savedCount, 10);
        if (!isNaN(parsed) && parsed >= 394) {
          baseCount = parsed;
        }
      }

      // Track new unique session visitor
      if (!sessionStorage.getItem(SESSION_KEY)) {
        baseCount += 1;
        localStorage.setItem(STORAGE_KEY, baseCount.toString());
        sessionStorage.setItem(SESSION_KEY, "true");
      }

      return baseCount;
    }
    return 394;
  });

  return (
    <section className="swl-stat-section" aria-label="Company statistics">
      <div className="swl-stat-container">
        <StatCounterItem value={1250} suffix="+" label="Happy Clients" />
        <StatCounterItem value={19} suffix="+" label="Years of Experience" />
        <StatCounterItem value={10} suffix="K+" label="Service Processed" />
        <StatCounterItem value={liveVisitors} label="Total Website Visitors" isLive={true} />
      </div>
    </section>
  );
}
