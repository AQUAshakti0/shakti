"use client";

import React from "react";
import Link from "next/link";

export default function MissionAndUsage({ showReadMore = false }: { showReadMore?: boolean }) {
  return (
    <section className="mission-usage-section" style={{ margin: "50px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        
        {/* Mission Banner Card (Water-Color Gradient + Round Bubble Texture + Black Text Highlights) */}
        <div
          className="mission-card"
          style={{
            background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
            borderRadius: "0px",
            padding: "36px 40px",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 12px 30px rgba(2, 132, 199, 0.25)"
          }}
        >
          {/* Background Decorative Bubble Texture (Preserved) */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.15)",
              pointerEvents: "none"
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span
              style={{
                background: "#000000",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "20px"
              }}
            >
              Our Mission
            </span>
          </div>

          <h2 style={{ fontSize: "26px", fontWeight: 700, margin: "0 0 16px 0", color: "#ffffff", fontFamily: "'Inter', sans-serif", lineHeight: 1.3 }}>
            Customer-Centric Innovation &amp; Strategic Market Excellence
          </h2>

          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#f0f9ff", maxWidth: "920px", margin: "0 0 24px 0" }}>
            We work with clear and strategic market focus for providing customer centric solutions and services. Keeping pace with latest technological developments, we combine our own innovative thinking to build solutions and services for a strong competitive position.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 800, color: "#000000" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Customer Centric Focus
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 800, color: "#000000" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Latest Tech Pace
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 800, color: "#000000" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Competitive Edge
            </div>

            {showReadMore && (
              <Link
                href="/about"
                style={{
                  marginLeft: "auto",
                  background: "#000000",
                  color: "#ffffff",
                  padding: "9px 22px",
                  borderRadius: "6px",
                  fontWeight: 800,
                  fontSize: "13px",
                  textDecoration: "none"
                }}
              >
                Learn More About Us &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
