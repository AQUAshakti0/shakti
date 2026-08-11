"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: React.ReactNode;
  ctaText: string;
  ctaHref: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/ro-plant.png",
    alt: "Industrial RO Plant manufactured by Aqua Shakti Industries, Vapi Gujarat",
    title: "Industrial Water Treatment Plant",
    subtitle: (
      <>
        Manufacturer Supplier &amp; Service Provider of high-capacity RO,<br />
        STP &amp; ETP water treatment plants across Gujarat.
      </>
    ),
    ctaText: "View Products",
    ctaHref: "/products",
  },
  {
    id: 2,
    image: "/water-plant.png",
    alt: "STP and ETP Water Treatment Facility by Aqua Shakti",
    title: "STP &amp; ETP Turnkey Solutions",
    subtitle: (
      <>
        Complete design, operation, and chemical analysis for<br />
        all types of industrial effluent and sewage water.
      </>
    ),
    ctaText: "Contact Experts",
    ctaHref: "/contact",
  },
  {
    id: 3,
    image: "/boiler-system.png",
    alt: "Boiler Water Treatment System and Chemicals",
    title: "Water Treatment Chemicals",
    subtitle: (
      <>
        High-grade specialty chemicals for boiler, RO membrane<br />
        antiscalants, and waste water purification.
      </>
    ),
    ctaText: "View Chemicals",
    ctaHref: "/chemicals",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="fade-hero-slider" aria-label="Featured water treatment solutions">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`fade-slide ${isActive ? "active" : ""}`}
            aria-hidden={!isActive}
          >
            <div className="fade-slide-bg">
              <img
                src={slide.image}
                alt={slide.alt}
                width={1920}
                height={420}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="fade-slide-overlay">
              <div className="slide-overlay-content">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <Link href={slide.ctaHref} className="slide-cta-btn">
                  {slide.ctaText} <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
