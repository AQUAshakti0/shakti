"use client";

import React from "react";

export interface ReviewItem {
  id: number;
  name: string;
  company: string;
  rating: number;
  headline: string;
  reviewText: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    company: "GIDC Chemical Unit, Vapi",
    rating: 5,
    headline: "Amazing Industrial RO Plant",
    reviewText: "Aqua Shakti provides top-tier industrial RO systems with exceptional water recovery. Clean installation and unmatched technical support.",
  },
  {
    id: 2,
    name: "Suresh Shah",
    company: "Pharma Formulations, Ankleshwar",
    rating: 5,
    headline: "Exceptional ETP Performance",
    reviewText: "Their 24/7 effluent treatment plant running in our pharmaceutical unit has reduced operational downtime and maintenance costs significantly.",
  },
  {
    id: 3,
    name: "Vikram Desai",
    company: "Lords Hotels & Resorts, Surat",
    rating: 5,
    headline: "Zero Downtime & Pure Output",
    reviewText: "Installed their commercial water softening plant for our resort. Water purity is outstanding and after-sales service is truly unmatched.",
  },
  {
    id: 4,
    name: "Amit Sharma",
    company: "Blue Star Manufacturing, Ahmedabad",
    rating: 5,
    headline: "Top Water Treatment Partner",
    reviewText: "Specialty chemicals from Aqua Shakti solved all our boiler scaling issues. Highly professional team and fast delivery across Gujarat.",
  },
];

export default function Testimonials() {
  return (
    <section className="customer-reviews-section" aria-label="Customer Reviews" style={{ margin: "60px 0 40px 0" }}>
      {/* Centered Header */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h2 className="section-heading" style={{ color: "#0f172a", fontSize: "32px", fontWeight: 800, margin: "0 0 6px 0", fontFamily: "'Inter', sans-serif" }}>
          Customers Review
        </h2>
        <p style={{ color: "#64748b", fontSize: "15px", margin: "0 auto", maxWidth: "600px" }}>
          What our customers say about Aqua Shakti Industries
        </p>
      </div>

      {/* Sticky Note Cards Grid (Clean, Neutral, No Hover Animation) */}
      <div className="reviews-cards-grid">
        {reviewsData.map((item) => (
          <div key={item.id} className="sticky-review-card">
            {/* Top Tape Strip */}
            <div className="sticky-tape" aria-hidden="true" />

            {/* Card Top: Stars & Quote */}
            <div className="sticky-card-top">
              <div className="sticky-stars" aria-label={`${item.rating} star rating`}>
                {"★".repeat(item.rating)}
              </div>
              <span className="sticky-quote-icon" aria-hidden="true">“</span>
            </div>

            {/* Headline & Review Text */}
            <div className="sticky-card-body">
              <h3 className="sticky-headline">{item.headline}</h3>
              <p className="sticky-text">{item.reviewText}</p>
            </div>

            {/* Card Bottom: Reviewer Avatar + Name */}
            <div className="sticky-card-bottom">
              <div className="sticky-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="sticky-author">
                <h4 className="sticky-name">{item.name}</h4>
                <span className="sticky-company">{item.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
