"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface SectorItem {
  id: string;
  title: string;
  category: "industrial" | "healthcare" | "hospitality" | "residential";
  subTags: string;
  badgeText: string;
  bgGradient: string;
  iconBg: string;
  icon: React.ReactNode;
  fullDesc: string;
  solutions: string[];
  keyApplications: string[];
}

const sectorsList: SectorItem[] = [
  {
    id: "factory-industrial",
    title: "Factory & Heavy Industries",
    category: "industrial",
    subTags: "Chemical Plants • Textile • Manufacturing",
    badgeText: "ETP & ZLD",
    bgGradient: "linear-gradient(135deg, #0b3c26 0%, #1e5a3c 100%)",
    iconBg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <circle cx="17" cy="17" r="2" fill="#f59e0b" stroke="none" />
      </svg>
    ),
    fullDesc: "Heavy manufacturing and chemical plants rely on continuous 24/7 water treatment for cooling towers, high-pressure boiler feed, and strict environmental compliance.",
    solutions: ["Industrial RO Plants", "Effluent Treatment (ETP)", "DM Plants", "Boiler Chemicals"],
    keyApplications: ["Boiler Feedwater Conditioning", "Cooling Tower Blowdown Recycling", "Zero Liquid Discharge (ZLD)"]
  },
  {
    id: "pharma-healthcare",
    title: "Hospital & Pharmaceuticals",
    category: "healthcare",
    subTags: "Pharma Labs • Medical Clinics • Research",
    badgeText: "WHO-GMP Grade",
    bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    iconBg: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M12 8v8" stroke="#ffffff" strokeWidth="3" />
        <path d="M8 12h8" stroke="#ffffff" strokeWidth="3" />
      </svg>
    ),
    fullDesc: "Ultra-pure pyrogen-free purified water plants meeting strict pharmacopoeia regulations for medical laboratories and pharmaceutical drug formulations.",
    solutions: ["Ultra Pure RO Systems", "Double Pass DM Plants", "UV Sterilization", "Pharma Specialty Chemicals"],
    keyApplications: ["Purified Water for Formulations", "Dialysis & Pathology Lab Water", "Autoclave Unit Supply"]
  },
  {
    id: "hospitality-commercial",
    title: "Hotel, Restaurant & Resorts",
    category: "hospitality",
    subTags: "Luxury Resorts • Restaurants • Swimming Pools",
    badgeText: "Culinary Water",
    bgGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    iconBg: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" stroke="#ffffff" />
        <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" stroke="#ffffff" />
        <path d="M10 21v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4" fill="#ffffff" />
      </svg>
    ),
    fullDesc: "Automated water softeners and commercial purifiers providing crystal-clear water for kitchens, dishwashing, laundry, and luxury swimming pools.",
    solutions: ["Water Softeners", "Commercial Kitchen RO", "STP Water Recycling", "Pool Filtration"],
    keyApplications: ["Food & Beverage Ice Chiller Filtration", "Commercial Laundry Softening", "Odourless Sewage Recycling"]
  },
  {
    id: "residential-complex",
    title: "Society & Housing Complexes",
    category: "residential",
    subTags: "Apartments • Residential Townships • Villages",
    badgeText: "Community Hub",
    bgGradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    iconBg: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" stroke="#ffffff" />
        <path d="M6 22V10l6-5 6 5v12" stroke="#ffffff" />
        <path d="M10 14h4" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M12 14v8" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    ),
    fullDesc: "Centralized drinking water filtration and eco-friendly sewage recycling plants for residential housing societies and townships.",
    solutions: ["Centralized Society RO", "Community STP Recycling", "Hard Water Softeners", "Iron Removal"],
    keyApplications: ["Central Drinking Water Stations", "Whole-Building Water Softening", "Flushing & Gardening Recycled Water"]
  },
  {
    id: "education-institutional",
    title: "Universities & Hostels",
    category: "residential",
    subTags: "Colleges • Educational Campuses • Hostels",
    badgeText: "Campus Eco",
    bgGradient: "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    iconBg: "linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#ffffff" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    ),
    fullDesc: "High-capacity drinking water chilling stations and campus-wide eco sewage treatment for educational institutions and hostels.",
    solutions: ["High-Cap Commercial RO", "Campus STP Plants", "Institutional Softeners"],
    keyApplications: ["Chilled RO Drinking Water Fountains", "Hostel Mess Water Filtration", "Green Campus Sewage Water Reuse"]
  },
  {
    id: "commercial-retail",
    title: "Corporate Office & Showroom",
    category: "hospitality",
    subTags: "Workplaces • Retail Outlets • Offices",
    badgeText: "Compact RO",
    bgGradient: "linear-gradient(135deg, #334155 0%, #1e293b 100%)",
    iconBg: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#ffffff" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    ),
    fullDesc: "Compact, quiet, and reliable domestic RO purifiers, under-sink softeners, and office water dispensers designed for modern corporate workplaces.",
    solutions: ["Domestic RO+UV Purifiers", "Office Water Dispensers", "Under-Sink Softeners"],
    keyApplications: ["Office Pantry Drinking Water", "Showroom Guest Water Stations", "Home Appliance Limescale Protection"]
  }
];

export default function AreaOfUsageShowcase() {
  const [selectedSector, setSelectedSector] = useState<SectorItem | null>(null);

  return (
    <div className="area-usage-wrapper">
      {/* Clean Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="section-heading" style={{ color: "#0b3c26", fontSize: "30px", margin: "0 0 8px 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Area of Usage
        </h2>
        <p style={{ color: "#526058", fontSize: "15px", margin: "0 auto", maxWidth: "600px", lineHeight: 1.5 }}>
          Our custom water treatment plants &amp; specialty chemicals are engineered for key sectors across Gujarat &amp; India.
        </p>
      </div>

      {/* Unique Sticker / Logo Icon Cards Grid */}
      <div className="usage-sticker-grid">
        {sectorsList.map((item) => (
          <div
            key={item.id}
            className="usage-sticker-card"
            onClick={() => setSelectedSector(item)}
          >
            {/* Mid-sized 3D Sticker Badge Icon */}
            <div className="sticker-icon-badge" style={{ background: item.iconBg }}>
              {item.icon}
            </div>

            {/* Content info */}
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                <h3 className="sticker-card-title">{item.title}</h3>
                <span className="sticker-pill-tag">{item.badgeText}</span>
              </div>
              <p className="sticker-subtags">{item.subTags}</p>
            </div>

            <div className="sticker-action-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b3c26" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Details Modal */}
      {selectedSector && (
        <div className="area-modal-overlay" onClick={() => setSelectedSector(null)}>
          <div className="area-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="area-modal-close" onClick={() => setSelectedSector(null)} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Sticker Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div className="sticker-icon-badge" style={{ background: selectedSector.iconBg, width: "64px", height: "64px", borderRadius: "16px", flexShrink: 0 }}>
                {selectedSector.icon}
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#0b3c26", background: "rgba(11, 60, 38, 0.08)", padding: "3px 10px", borderRadius: "12px", display: "inline-block", marginBottom: "4px" }}>
                  {selectedSector.badgeText}
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0b3c26", margin: 0, fontFamily: "'Inter', sans-serif" }}>
                  {selectedSector.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "14.5px", color: "#334155", lineHeight: 1.65, marginBottom: "20px" }}>
              {selectedSector.fullDesc}
            </p>

            <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px 18px", marginBottom: "20px", border: "1px solid #e2e8f0" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 800, color: "#0b3c26", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px 0" }}>
                Key Applications:
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
                {selectedSector.keyApplications.map((app, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#1e293b", fontWeight: 500 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b3c26" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {app}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 800, color: "#0b3c26", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 8px 0" }}>
                Recommended Solutions:
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {selectedSector.solutions.map((sol, idx) => (
                  <span key={idx} style={{ background: "#0b3c26", color: "#ffffff", fontSize: "12px", fontWeight: 600, padding: "4px 12px", borderRadius: "16px" }}>
                    {sol}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setSelectedSector(null)}
                style={{ background: "#f1f5f9", color: "#475569", border: "none", padding: "9px 18px", borderRadius: "6px", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}
              >
                Close
              </button>
              <Link
                href={`/contact?sector=${encodeURIComponent(selectedSector.title)}`}
                onClick={() => setSelectedSector(null)}
                style={{ background: "#f59e0b", color: "#0b3c26", padding: "9px 20px", borderRadius: "6px", fontWeight: 800, fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                Request Quote &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
