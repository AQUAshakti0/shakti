"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  tag: string;
  title: string;
  subtitle: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    tag: "15 YEARS OF EXPERIENCE WE PROVIDE SERVICES",
    title: "Industry A Variety Of High Quality Products",
    subtitle: (
      <>
        Aqua Shakti is an Industry &amp; Manufacturing Services Provider Institution.<br />
        Suitable for Factory, Manufacturing, Engineering &amp; Construction Fields.
      </>
    ),
    ctaText: "Let's Start",
    ctaHref: "/contact",
    image: "/hero/hero_plant_v2.png",
    imageAlt: "Aqua Shakti Commercial & Industrial RO Plant System",
  },
  {
    id: 2,
    tag: "CPCB & GPCB COMPLIANT RECYCLING SOLUTIONS",
    title: "Wastewater Treatment & ZLD Plants",
    subtitle: (
      <>
        Turnkey Sewage &amp; Effluent Recycling Treatment Systems<br />
        with Zero Liquid Discharge technology for 100% water recovery.
      </>
    ),
    ctaText: "Explore STP & ETP",
    ctaHref: "/products?tab=wastewater",
    image: "/hero/hero_plant_2_v2.png",
    imageAlt: "Aqua Shakti Wastewater & Industrial RO Plant",
  },
  {
    id: 3,
    tag: "HARDNESS & DEMINERALIZATION PLANTS",
    title: "Industrial Softeners & DM Plants",
    subtitle: (
      <>
        High-capacity ion-exchange water softeners &amp; Mixbed plants<br />
        preventing boiler limescale &amp; outputting ultra-pure deionized water.
      </>
    ),
    ctaText: "Explore Softeners",
    ctaHref: "/products?tab=softener",
    image: "/hero/hero_plant_3.png",
    imageAlt: "Aqua Shakti Industrial Water Softener & DM Plant",
  },
  {
    id: 4,
    tag: "COMMERCIAL & DOMESTIC DRINKING WATER",
    title: "Commercial & Domestic RO Systems",
    subtitle: (
      <>
        Alkaline RO+UV purifiers &amp; chilled water dispensers<br />
        engineered for corporate offices, hostels, restaurants &amp; modern homes.
      </>
    ),
    ctaText: "Explore Commercial",
    ctaHref: "/products?tab=domestic",
    image: "/hero/hero_plant_4.png",
    imageAlt: "Aqua Shakti Commercial & Domestic RO Filter System",
  },
  {
    id: 5,
    tag: "ASTREAT SPECIALTY FORMULATIONS",
    title: "Specialty Water Treatment Chemicals",
    subtitle: (
      <>
        High-performance antiscalants, boiler chemicals, descaling formulations<br />
        &amp; cooling tower biocides manufactured in Vapi, Gujarat.
      </>
    ),
    ctaText: "View Chemicals",
    ctaHref: "/chemicals",
    image: "/hero/hero_plant_5.png",
    imageAlt: "Aqua Shakti High Capacity Industrial RO & Membrane Plant",
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
            className={`fade-slide ${isActive ? "active" : ""} ${!slide.image ? "has-no-image" : ""}`}
            aria-hidden={!isActive}
          >
            <div className="fade-slide-overlay">
              <div className={`slide-content-container ${!slide.image ? "no-media" : ""}`}>
                <div className="slide-overlay-content">
                  <span className="hero-slide-badge">{slide.tag}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                  <div className="hero-btn-group">
                    <Link href={slide.ctaHref} className="slide-cta-btn">
                      {slide.ctaText}
                    </Link>
                    <Link href="/products" className="slide-sec-btn">
                      Our Products
                    </Link>
                  </div>
                </div>

                {slide.image && (
                  <div className="slide-overlay-media">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt || slide.title}
                      className={`hero-plant-img hero-plant-img-${slide.id}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Indicator Pills */}
      <div className="hero-slider-dots">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            className={`hero-dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
