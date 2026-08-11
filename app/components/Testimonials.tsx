"use client";

import React from "react";

export interface ReviewCardItem {
  id: number;
  variant: "pastel" | "white" | "watercolor" | "magenta";
  name: string;
  company: string;
  rating: string;
  headline: string;
  reviewText: string;
  iconBg: string;
}

const reviewsData: ReviewCardItem[] = [
  {
    id: 1,
    variant: "pastel",
    name: "Rajesh Patel",
    company: "GIDC Chemical Unit, Vapi",
    rating: "5.0",
    headline: "Amazing Industrial RO Plant",
    reviewText: "Aqua Shakti provides top-tier industrial RO systems with exceptional water recovery. Clean installation and unmatched technical support.",
    iconBg: "linear-gradient(135deg, #0b3c26 0%, #115033 100%)"
  },
  {
    id: 2,
    variant: "white",
    name: "Suresh Shah",
    company: "Pharma Formulations, Ankleshwar",
    rating: "4.9",
    headline: "Exceptional ETP Performance",
    reviewText: "Their 24/7 effluent treatment plant running in our pharmaceutical unit has reduced operational downtime and maintenance costs significantly.",
    iconBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)"
  },
  {
    id: 3,
    variant: "magenta",
    name: "Vikram Desai",
    company: "Lords Hotels & Resorts, Surat",
    rating: "4.9",
    headline: "Zero Downtime & Pure Output",
    reviewText: "Installed their commercial water softening plant for our resort. Water purity is outstanding and after-sales service is truly unmatched.",
    iconBg: "rgba(255, 255, 255, 0.25)"
  },
  {
    id: 4,
    variant: "watercolor",
    name: "Amit Sharma",
    company: "Blue Star Manufacturing, Ahmedabad",
    rating: "5.0",
    headline: "Top Water Treatment Partner",
    reviewText: "Specialty chemicals from Aqua Shakti solved all our boiler scaling issues. Highly professional team and fast delivery across Gujarat.",
    iconBg: "rgba(255, 255, 255, 0.25)"
  }
];

function UserIcon({ bg = "#0b3c26", size = 48 }: { bg?: string; size?: number }) {
  const iconSize = Math.round(size * 0.52);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        border: "2px solid #ffffff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.12)"
      }}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="customer-reviews-section" aria-label="Customer Reviews" style={{ margin: "60px 0 40px 0" }}>
      {/* Centered Header matching reference image */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h2 className="section-heading" style={{ color: "#2d3748", fontSize: "32px", fontWeight: 800, margin: "0 0 6px 0", fontFamily: "'Inter', sans-serif" }}>
          Customers Review
        </h2>
        <p style={{ color: "#718096", fontSize: "15px", margin: "0 auto", maxWidth: "600px" }}>
          What our customers say about Aqua Shakti Industries
        </p>
      </div>

      {/* 4 Unique Cards Grid with Indian Names & User Icons */}
      <div className="reviews-cards-grid">
        {reviewsData.map((item) => {
          if (item.variant === "pastel") {
            return (
              <div key={item.id} className="review-card card-pastel">
                {/* Top Row: Icon Avatar + Name + Rating */}
                <div className="card-top-row">
                  <div className="avatar-wrapper">
                    <UserIcon bg={item.iconBg} size={50} />
                    <div className="quote-bubble-badge">❝</div>
                  </div>
                  <div>
                    <h4 className="reviewer-name">{item.name}</h4>
                    <span className="reviewer-company">{item.company}</span>
                    <div className="star-rating-row">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="card-body-content">
                  <h3 className="card-headline">{item.headline}</h3>
                  <p className="card-review-text">{item.reviewText}</p>
                </div>
              </div>
            );
          }

          if (item.variant === "white") {
            return (
              <div key={item.id} className="review-card card-white">
                {/* Top Badge */}
                <div className="card-top-badge-row">
                  <div className="quote-bubble-badge">❝</div>
                </div>

                {/* Body Content */}
                <div className="card-body-content">
                  <h3 className="card-headline">{item.headline}</h3>
                  <p className="card-review-text">{item.reviewText}</p>
                </div>

                {/* Bottom Row: Icon Avatar + Name */}
                <div className="card-bottom-row">
                  <UserIcon bg={item.iconBg} size={42} />
                  <div>
                    <h4 className="reviewer-name-sm">{item.name}</h4>
                    <span className="reviewer-company-sm">{item.company}</span>
                  </div>
                </div>
              </div>
            );
          }

          if (item.variant === "watercolor") {
            return (
              <div key={item.id} className="review-card card-watercolor">
                {/* Unique Water Caustics / Bubble Ring Background Overlay */}
                <div className="water-texture-overlay" />

                {/* Top Row: Quote Badge + Rating Badge */}
                <div className="card-top-badge-row" style={{ position: "relative", zIndex: 2 }}>
                  <div className="quote-bubble-badge">❝</div>
                  <div className="rating-pill-badge">{item.rating} ★</div>
                </div>

                {/* Body Content */}
                <div className="card-body-content" style={{ position: "relative", zIndex: 2 }}>
                  <h3 className="card-headline light-text">{item.headline}</h3>
                  <p className="card-review-text light-text">{item.reviewText}</p>
                </div>

                {/* Bottom Row: Icon Avatar + Name */}
                <div className="card-bottom-row" style={{ position: "relative", zIndex: 2 }}>
                  <UserIcon bg={item.iconBg} size={42} />
                  <div>
                    <h4 className="reviewer-name-sm light-text">{item.name}</h4>
                    <span className="reviewer-company-sm light-text-muted">{item.company}</span>
                  </div>
                </div>
              </div>
            );
          }

          if (item.variant === "magenta") {
            return (
              <div key={item.id} className="review-card card-magenta">
                {/* Top Row: Quote Badge + Rating Badge */}
                <div className="card-top-badge-row">
                  <div className="quote-bubble-badge white-badge">❝</div>
                  <div className="rating-pill-badge">{item.rating} ★</div>
                </div>

                {/* Body Content */}
                <div className="card-body-content">
                  <h3 className="card-headline light-text">{item.headline}</h3>
                  <p className="card-review-text light-text">{item.reviewText}</p>
                </div>

                {/* Bottom Row: Icon Avatar + Name */}
                <div className="card-bottom-row">
                  <UserIcon bg={item.iconBg} size={42} />
                  <div>
                    <h4 className="reviewer-name-sm light-text">{item.name}</h4>
                    <span className="reviewer-company-sm light-text-muted">{item.company}</span>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
