"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface ChemicalDetail {
  id: string;
  code: string;
  name: string;
  category: "boiler" | "ro" | "cooling" | "descaling" | "etp";
  categoryLabel: string;
  image: string;
  packSize: string;
  dosage: string;
  form: string;
  applications: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  capacity?: string;
}

export const chemicalsData: ChemicalDetail[] = [
  {
    id: "astreat-boiler-chemicals",
    code: "ASTreat-101",
    name: "Boiler Water Treatment Chemical",
    category: "boiler",
    categoryLabel: "Boiler Chemicals",
    image: "/boiler-system.png",
    packSize: "35 kg / 50 kg / 200 kg HDPE Carboys",
    dosage: "15 – 50 ppm (based on feed water)",
    form: "Clear Liquid",
    applications: "Steam Boilers, Thermic Fluid Heaters, Power Plants",
    shortDesc: "All-in-one multi-functional boiler chemical containing anti-scalant, oxygen scavenger, pH booster, and sludge conditioner.",
    fullDesc: "ASTreat-101 prevents scaling, pitting corrosion, and caustic embrittlement in steam boilers. It reacts rapidly with dissolved oxygen, neutralizes carbonic acid in steam condensate, and keeps hardness minerals suspended for easy blowdown removal.",
    features: ["Rapid Dissolved Oxygen Removal", "pH Neutralization & Anti-Corrosion", "Sludge Conditioner for Easy Blowdown", "Extends Boiler Tube Life"],
    specs: [
      { label: "Product Code", value: "ASTreat-101" },
      { label: "Physical Form", value: "Pale Yellow to Clear Liquid" },
      { label: "pH (1% solution)", value: "10.5 – 12.0" },
      { label: "Specific Gravity", value: "1.12 ± 0.05" },
      { label: "Packaging", value: "50 kg & 200 kg HDPE Barrels" },
      { label: "Recommended Dosage", value: "15 to 50 ppm depending on water analysis" }
    ]
  },
  {
    id: "astreat-ro-antiscalant",
    code: "ASTreat-202",
    name: "Industrial RO Membrane Antiscalant",
    category: "ro",
    categoryLabel: "RO Chemicals",
    image: "/chemical-dosing.png",
    packSize: "25 kg / 50 kg HDPE Drums",
    dosage: "3 – 6 ppm continuous dosing",
    form: "Liquid Concentrate",
    applications: "Brackish Water RO, Sea Water Desalination, ZLD Plants",
    shortDesc: "High-efficacy super-concentrated antiscalant for thin-film composite membranes preventing silica, calcium, and sulfate scaling.",
    fullDesc: "ASTreat-202 is an advanced organic polymer antiscalant designed to inhibit precipitation of Calcium Carbonate, Calcium Sulfate, Barium Sulfate, and Reactive Silica on RO membrane surfaces. Doubles membrane cleaning intervals and reduces downtime.",
    features: ["Silica & Sulfate Scale Inhibition", "Compatible with DOW, Hydranautics & Toray", "Effective over pH Range 2.0 – 12.0", "Doubles Membrane Lifespan"],
    specs: [
      { label: "Product Code", value: "ASTreat-202" },
      { label: "Solubility", value: "100% Soluble in Water" },
      { label: "pH (as is)", value: "2.0 – 4.0" },
      { label: "Specific Gravity", value: "1.15 ± 0.03" },
      { label: "Membrane Compatibility", value: "Compatible with all Polyamide TFC Membranes" }
    ]
  },
  {
    id: "astreat-cooling-tower-chemical",
    code: "ASTreat-303",
    name: "Cooling Tower Corrosion & Scale Inhibitor",
    category: "cooling",
    categoryLabel: "Cooling Tower",
    image: "/cooling-water-treatment.png",
    packSize: "50 kg / 200 kg Barboys",
    dosage: "30 – 80 ppm continuously",
    form: "Clear Liquid",
    applications: "Open Recirculating Cooling Towers, Chillers, HVAC",
    shortDesc: "Multi-functional corrosion inhibitor, scale dispersant, and bio-dispersant formulation for industrial cooling towers.",
    fullDesc: "ASTreat-303 controls mineral scale deposition and bio-fouling in cooling tower heat exchangers, condenser tubes, and drift eliminators. Contains zinc-free organic phosphonates and azole copper corrosion inhibitors.",
    features: ["Prevents Scale & Limescale Buildup", "Controls Micro-Algae & Slime Formation", "Safe for Mild Steel, Copper & Brass", "Reduces Chiller Power Consumption"],
    specs: [
      { label: "Product Code", value: "ASTreat-303" },
      { label: "Active Components", value: "Organo-Phosphonates & Polymer Dispersants" },
      { label: "pH (1% Solution)", value: "6.5 – 8.5" },
      { label: "Compatibility", value: "Fully compatible with chlorine & non-oxidizing biocide" }
    ]
  },
  {
    id: "astreat-descaling-acid-cleaner",
    code: "ASTreat-404",
    name: "Inhibited Descaling & Rust Remover Chemical",
    category: "descaling",
    categoryLabel: "Descaling Chemicals",
    image: "/descaling-treatment.png",
    packSize: "35 kg / 50 kg Carboys",
    dosage: "5% – 10% solution circulation",
    form: "Concentrated Liquid",
    applications: "Heat Exchangers, Condensers, Boilers, Cooling Jackets",
    shortDesc: "Fast-acting inhibited acid descaler that dissolves thick limescale, silica scale, and rust deposits without attacking base metals.",
    fullDesc: "ASTreat-404 formulated with high-tech acid corrosion inhibitors safely strips heavy mineral scales and iron oxides from heat transfer surfaces. Restores original thermal efficiency in boilers and chillers.",
    features: ["Dissolves Heavy Limescale & Iron Oxide", "Contains Base Metal Corrosion Inhibitor", "Safe for Mild Steel & Copper Tubes", "Quick 4-6 Hour Cleaning Cycle"],
    specs: [
      { label: "Product Code", value: "ASTreat-404" },
      { label: "Inhibitor Efficacy", value: "> 99% Metal Protection" },
      { label: "pH", value: "< 1.5" },
      { label: "Application Method", value: "Circulation CIP or Soaking" }
    ]
  },
  {
    id: "astreat-etp-polyelectrolyte",
    code: "ASTreat-505",
    name: "ETP & STP Coagulant & Polyelectrolyte",
    category: "etp",
    categoryLabel: "Wastewater Chemicals",
    image: "/water-plant.png",
    capacity: "25 kg Bags / 50 kg Carboys",
    packSize: "25 kg Powder Bags / 50 kg Liquid",
    dosage: "0.5 – 5.0 ppm for settling",
    form: "Powder / Liquid Polymer",
    applications: "Effluent Treatment Plants (ETP), Sludge Filter Press, Sewage Clarifiers",
    shortDesc: "High-molecular-weight Anionic & Cationic polyelectrolyte polymers for rapid solids flocculation and sludge dewatering.",
    fullDesc: "ASTreat-505 speeds up solids settling in primary and secondary clarifiers. Dramatically improves sludge cake dryness in chamber filter presses and centrifuges, reducing sludge handling costs.",
    features: ["Rapid Flocculation & Solids Settling", "High Sludge Cake Dryness", "Low Consumption Dosage", "Suitable for Chemical & Textile Effluents"],
    specs: [
      { label: "Product Code", value: "ASTreat-505" },
      { label: "Charge Density", value: "High Anionic / Cationic Variants" },
      { label: "Molecular Weight", value: "High Molecular Weight Polymer" }
    ]
  },
  {
    id: "astreat-ro-membrane-cleaner",
    code: "ASTreat-606",
    name: "RO Membrane CIP Cleaning Chemicals (Acidic & Alkaline)",
    category: "ro",
    categoryLabel: "RO CIP Cleaning",
    image: "/chemical-dosing.png",
    packSize: "25 kg / 50 kg Drums",
    dosage: "1% – 2% CIP Tank solution",
    form: "Powder & Liquid Concentrates",
    applications: "Industrial RO Plants, DM Plants, MBR Systems",
    shortDesc: "High-performance CIP chemicals (Acidic for inorganic scale, Alkaline for organic/biological fouling) restoring RO flux rate.",
    fullDesc: "ASTreat-606 CIP chemical kit removes severe silica, calcium scales, oil, grease, bio-film, and organic slime from foul RO membranes. Restores salt rejection and permeate flow rates up to 98%.",
    features: ["Removes Organic Foulants & Bio-Slime", "Dissolves Silica & Calcium Carbonate Scale", "Restores Original Permeate Flow", "Safe for Polyamide & TFC Membranes"],
    specs: [
      { label: "Product Code", value: "ASTreat-606A (Alkaline) & 606B (Acidic)" },
      { label: "Operating Temperature", value: "30°C – 40°C during CIP" },
      { label: "Cleaning Time", value: "45 – 90 Minutes Circulation" }
    ]
  }
];

function ChemicalsContent() {
  const searchParams = useSearchParams();
  const catQuery = searchParams.get("cat");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedChemical, setSelectedChemical] = useState<ChemicalDetail | null>(null);

  useEffect(() => {
    if (catQuery) {
      setActiveCategory(catQuery);
    }
  }, [catQuery]);

  const filteredChemicals = chemicalsData.filter((chem) => {
    if (activeCategory === "all") return true;
    return chem.category === activeCategory;
  });

  return (
    <div className="page-content" style={{ paddingBottom: "40px" }}>
      {/* Premium Hero Header */}
      <div style={{ textAlign: "center", margin: "20px 0 36px 0" }}>
        <h1 className="page-title" style={{ fontSize: "36px", color: "#0b3c26", margin: "0 0 10px 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Water Treatment &amp; Process Chemicals
        </h1>
        <p className="page-intro" style={{ margin: "0 auto", maxWidth: "760px", color: "#475569", fontSize: "16px", lineHeight: 1.6 }}>
          Aqua Shakti Industries manufactures and supplies high-performance ASTreat chemicals for Boilers, RO Membrane Antiscalants, Cooling Towers, Descaling, and Effluent Treatment Plants (ETP).
        </p>

        {/* Key Features Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginTop: "20px", fontSize: "13.5px", fontWeight: 700, color: "#0b3c26" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            High Purity Formulations
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Bulk Supply in Carboys &amp; Drums
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            On-Site Dosage &amp; Water Analysis
          </div>
        </div>

        {/* Hero Showcase Image Banner */}
        <div style={{ marginTop: "28px", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "100%",
            maxWidth: "960px",
            height: "280px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            background: "#ffffff"
          }}>
            <img
              src="/chemicals-hero.png"
              alt="Water Treatment &amp; Process Chemicals Collection"
              style={{ width: "100%", height: "100%", objectFit: "contain", background: "#ffffff" }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "36px" }}>
        {[
          { id: "all", label: "All Chemicals" },
          { id: "boiler", label: "Boiler Chemicals" },
          { id: "ro", label: "RO Antiscalants" },
          { id: "cooling", label: "Cooling Tower" },
          { id: "descaling", label: "Descaling & Rust" },
          { id: "etp", label: "Wastewater Coagulants" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            style={{
              padding: "9px 20px",
              borderRadius: "30px",
              fontSize: "13.5px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s ease",
              border: activeCategory === tab.id ? "1px solid #0284c7" : "1px solid #cbd5e1",
              background: activeCategory === tab.id ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" : "#ffffff",
              color: activeCategory === tab.id ? "#ffffff" : "#334155",
              boxShadow: activeCategory === tab.id ? "0 4px 14px rgba(2, 132, 199, 0.3)" : "0 2px 6px rgba(0,0,0,0.03)"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Chemical Product Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px", marginBottom: "50px" }}>
        {filteredChemicals.map((chem) => (
          <div
            key={chem.id}
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="product-card-hover"
          >
            {/* Image Box */}
            <div style={{ position: "relative", height: "210px", width: "100%", background: "#f8fafc", overflow: "hidden" }}>
              <img
                src={chem.image}
                alt={chem.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(11, 60, 38, 0.9)", backdropFilter: "blur(4px)", color: "#ffffff", fontSize: "11.5px", fontWeight: 800, padding: "4px 12px", borderRadius: "14px", letterSpacing: "0.5px" }}>
                {chem.code}
              </span>
              <span style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(4px)", color: "#0284c7", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                {chem.categoryLabel}
              </span>
            </div>

            {/* Card Body */}
            <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h2 style={{ fontSize: "19px", fontWeight: 700, color: "#0b3c26", margin: "0 0 8px 0", fontFamily: "'Inter', sans-serif" }}>
                {chem.name}
              </h2>
              <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.55, margin: "0 0 16px 0" }}>
                {chem.shortDesc}
              </p>

              {/* Quick Spec Box */}
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "12px 14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12.5px" }}>
                  <div>
                    <span style={{ color: "#94a3b8", display: "block", fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase" }}>Packaging</span>
                    <strong style={{ color: "#1e293b", fontWeight: 700, fontSize: "11.5px" }}>{chem.packSize}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#94a3b8", display: "block", fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase" }}>Dosage</span>
                    <strong style={{ color: "#059669", fontWeight: 700, fontSize: "11.5px" }}>{chem.dosage}</strong>
                  </div>
                </div>
              </div>

              {/* Feature Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px", marginTop: "auto" }}>
                {chem.features.map((feat, idx) => (
                  <span key={idx} style={{ background: "#e0f2fe", color: "#0369a1", fontSize: "11.5px", fontWeight: 700, padding: "3px 10px", borderRadius: "12px" }}>
                    ✓ {feat}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                <button
                  onClick={() => setSelectedChemical(chem)}
                  style={{ flex: 1, background: "#f1f5f9", color: "#0b3c26", border: "1px solid #cbd5e1", padding: "10px 14px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", cursor: "pointer", transition: "all 0.2s ease" }}
                >
                  Specs &amp; MSDS
                </button>
                <Link
                  href={`/contact?chemical=${encodeURIComponent(chem.name)}`}
                  style={{ flex: 1.2, background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", color: "#ffffff", textDecoration: "none", padding: "10px 14px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                >
                  Get Quote &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chemical Specs Detail Modal */}
      {selectedChemical && (
        <div className="area-modal-overlay" onClick={() => setSelectedChemical(null)}>
          <div className="area-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "680px" }}>
            <button className="area-modal-close" onClick={() => setSelectedChemical(null)} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "12px", overflow: "hidden", flexShrink: 0, background: "#f1f5f9" }}>
                <img src={selectedChemical.image} alt={selectedChemical.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", color: "#0284c7", background: "rgba(2, 132, 199, 0.1)", padding: "3px 10px", borderRadius: "12px", display: "inline-block", marginBottom: "4px" }}>
                  {selectedChemical.code}
                </span>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0b3c26", margin: 0 }}>
                  {selectedChemical.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "14.5px", color: "#334155", lineHeight: 1.6, marginBottom: "20px" }}>
              {selectedChemical.fullDesc}
            </p>

            {/* Technical Parameters Table */}
            <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", marginBottom: "24px", border: "1px solid #e2e8f0" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 800, color: "#0b3c26", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 12px 0" }}>
                Chemical Parameters &amp; Dosage:
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {selectedChemical.specs.map((spec, idx) => (
                  <div key={idx} style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                    <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, display: "block", textTransform: "uppercase" }}>{spec.label}</span>
                    <strong style={{ fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setSelectedChemical(null)}
                style={{ background: "#f1f5f9", color: "#475569", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "13.5px", cursor: "pointer" }}
              >
                Close
              </button>
              <Link
                href={`/contact?chemical=${encodeURIComponent(selectedChemical.name)}`}
                onClick={() => setSelectedChemical(null)}
                style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", color: "#ffffff", padding: "10px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "13.5px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                Inquire Price &amp; MSDS &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChemicalsPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "60px 0" }}>Loading Water Treatment Chemicals...</div>}>
      <ChemicalsContent />
    </Suspense>
  );
}
