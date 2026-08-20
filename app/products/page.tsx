"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface ProductDetail {
  id: string;
  name: string;
  category: "ro" | "wastewater" | "softener" | "spares";
  categoryLabel: string;
  badge: string;
  image: string;
  capacity: string;
  recoveryRate: string;
  automation: string;
  applications: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  price?: string;
  moq?: string;
}

const industrialProductsData: ProductDetail[] = [
  {
    id: "industrial-ro-plant",
    name: "Industrial RO Plant",
    category: "ro",
    categoryLabel: "Reverse Osmosis",
    badge: "High Recovery (Up to 75%)",
    image: "/ro-plant.png",
    capacity: "500 LPH – 100,000 LPH",
    recoveryRate: "As per plant Design",
    automation: "Fully Automatic / Semi-Auto",
    applications: "Pharma, Chemical, Textile, Power",
    shortDesc: "Custom-engineered industrial reverse osmosis systems with high-pressure DOW / Hydranautics membranes for pure process water.",
    fullDesc: "Aqua Shakti Industrial RO Plants remove up to 99.2% of dissolved salts, heavy metals, and silica from brackish and borewell water. Built on heavy-duty SS 304/316 skids with Grundfos / CNP high-pressure pumps and automatic backwash control.",
    features: ["Food-Grade SS 304 Skid", "DOW / Hydranautics Membranes", "Auto Backwash & CIP System", "Low Power Consumption"],
    specs: [
      { label: "Flow Rate Capacity", value: "500 LPH to 100 M³/Hr" },
      { label: "Desalination Rate", value: "98.5% – 99.4%" },
      { label: "Operating Pressure", value: "12 – 18 bar" },
      { label: "Control System", value: "PLC / Microprocessor Panel with TDS Controller" },
      { label: "Membrane Brand", value: "Filmtec / Hydranautics / Toray" },
      { label: "Skid Material", value: "Stainless Steel SS 304 / SS 316" }
    ]
  },
  {
    id: "effluent-treatment-plant",
    name: "Effluent Treatment Plant (ETP) & ZLD",
    category: "wastewater",
    categoryLabel: "Wastewater Treatment",
    badge: "CPCB / GPCB Compliant",
    image: "/water-plant.png",
    capacity: "5,000 LPD – 500,000 LPD",
    recoveryRate: "As per plant Design",
    automation: "Fully Automated PLC",
    applications: "Textiles, Dyes, Chemical, Electroplating",
    shortDesc: "Advanced physico-chemical & biological ETP plants designed for high COD/BOD industrial wastewater and Zero Liquid Discharge (ZLD).",
    fullDesc: "Our ETP & ZLD plants process hazardous chemical effluents, dye bath wastewater, and heavy metals through multi-stage clarification, aeration tanks, filter presses, and evaporator crystallizers for 100% water recycling.",
    features: ["Zero Liquid Discharge (ZLD)", "High COD / BOD Reduction", "Automatic Sludge Filter Press", "Heavy Metal Removal"],
    specs: [
      { label: "Treatment Technology", value: "Physico-Chemical + Aerobic / Anaerobic MBR" },
      { label: "BOD Reduction", value: "> 95%" },
      { label: "COD Reduction", value: "> 90%" },
      { label: "Recycled Water Quality", value: "Suitable for Cooling Tower & Process Rinse" },
      { label: "Sludge Handling", value: "Automatic Chamber Filter Press" }
    ]
  },
  {
    id: "sewage-treatment-plant",
    name: "Sewage Treatment Plant (STP)",
    category: "wastewater",
    categoryLabel: "Sewage Recycling",
    badge: "Zero Odour Technology",
    image: "/cooling-water-treatment.png",
    capacity: "10 KLD – 500 KLD",
    recoveryRate: "As per plant Design",
    automation: "Automatic Operation",
    applications: "Hotels, Commercial Complexes, Hostels, Malls",
    shortDesc: "Packaged & underground MBBR / SBR sewage treatment plants that convert wastewater into crystal clear water for gardening & flushing.",
    fullDesc: "Aqua Shakti STPs utilize Moving Bed Biofilm Reactor (MBBR) and Sequential Batch Reactor (SBR) technology to treat sewage efficiently with minimal footprint, low energy use, and zero foul odour.",
    features: ["MBBR / MBR Advanced Bio-Media", "Compact Packaged Design", "Zero Foul Odour & Quiet Operation", "Recycled Water for Flushing"],
    specs: [
      { label: "Biological Technology", value: "MBBR (Moving Bed Biofilm Reactor)" },
      { label: "Effluent BOD", value: "< 10 mg/L" },
      { label: "Effluent TSS", value: "< 10 mg/L" },
      { label: "Disinfection", value: "Online Sodium Hypochlorite / Ozone" }
    ]
  },
  {
    id: "water-softener-plant",
    name: "Industrial Water Softener Plant",
    category: "softener",
    categoryLabel: "Hardness Removal",
    badge: "Anti-Limescale Tech",
    image: "/water-softener-plant.png",
    capacity: "500 LPH – 50,000 LPH",
    recoveryRate: "As per plant Design",
    automation: "Automatic Multiport / Manual",
    applications: "Boilers, Laundries, Hotels, Cooling Towers",
    shortDesc: "High-capacity ion-exchange water softeners for complete removal of hardness minerals (Calcium & Magnesium) to prevent scale buildup.",
    fullDesc: "Engineered with food-grade cation exchange resin and FRP/MSRL vessels. Removes hardness down to < 5 ppm, protecting expensive industrial boilers, cooling towers, heat exchangers, and commercial laundry equipment.",
    features: ["Food-Grade Cation Resin", "Salt-Saving Regeneration", "FRP / Stainless Steel Vessel", "Hardness < 5 ppm Output"],
    specs: [
      { label: "Outflow Hardness", value: "< 5 ppm (as CaCO3)" },
      { label: "Resin Type", value: "High-Exchange Capacity Cation Resin" },
      { label: "Vessel MOC", value: "FRP (Fiberglass) / MSRL" },
      { label: "Regenerant", value: "Commercial Sodium Chloride (Salt)" }
    ]
  },
  {
    id: "dm-mixbed-plant",
    name: "Demineralization (DM) & Mix Bed Plant",
    category: "softener",
    categoryLabel: "High Purity Water",
    badge: "Ultra Low TDS (< 1 ppm)",
    image: "/dm-plant.png",
    capacity: "250 LPH – 20,000 LPH",
    recoveryRate: "As per plant Design",
    automation: "Semi-Auto / PLC Control",
    applications: "Pharma Labs, High Pressure Boilers, Solar",
    shortDesc: "Two-bed Cation & Anion exchangers with Mixed Bed polishers producing deionized ultra-pure water with conductivity < 0.1 µS/cm.",
    fullDesc: "Aqua Shakti DM & Mix Bed plants utilize strong acid cation and strong base anion resins to strip virtually all mineral ions from water. Essential for high-pressure boiler feed, electronics manufacturing, and pharmaceutical laboratories.",
    features: ["Conductivity < 0.1 µS/cm", "Silica Removal", "Acid & Alkali CIP System", "Digital Conductivity Meter"],
    specs: [
      { label: "Output Conductivity", value: "< 0.5 µS/cm (Mixbed < 0.1 µS/cm)" },
      { label: "Resin Brands", value: "Purolite / Thermax / Ion Exchange" },
      { label: "Regenerant Acid/Alkali", value: "HCl & NaOH" }
    ]
  },
  {
    id: "ro-plant-25lph",
    name: "25 LPH Commercial RO Plant",
    category: "ro",
    categoryLabel: "Commercial RO",
    badge: "25 LPH Capacity",
    image: "/products/industrial/ro-plant-25lph.png",
    capacity: "25 LPH",
    recoveryRate: "Up to 50%",
    automation: "Semi-Automatic / Auto Cutoff",
    applications: "Offices, Restaurants, Small Clinics, Schools",
    shortDesc: "Compact 25 LPH commercial reverse osmosis plant skid with 3 vertical big blue filter canisters, heavy duty booster pump & high-rejection TFC RO membranes.",
    fullDesc: "Aqua Shakti 25 LPH Commercial RO Plant provides clean, pure drinking water for small offices, restaurants, and educational institutes. Built on a rigid skid with 3 Big Blue filter housings and heavy-duty diaphragm booster pump.",
    features: ["3 Big Blue Canister Skid", "25 LPH Pure Water Output", "Built-in Diaphragm Booster Pump", "Low Power Consumption"],
    specs: [
      { label: "Flow Rate Capacity", value: "25 Liters / Hour" },
      { label: "Purification Method", value: "RO + UV + Sediment Pre-Filter" },
      { label: "Operating Voltage", value: "230V AC / 24V DC" },
      { label: "Skid Material", value: "Powder Coated Metal Skid Frame" },
      { label: "Membrane Type", value: "High Rejection 75/80 GPD TFC Membrane" }
    ]
  },
  {
    id: "ro-plant-50lph",
    name: "50 LPH Commercial RO Plant",
    category: "ro",
    categoryLabel: "Commercial RO",
    badge: "50 LPH Capacity",
    image: "/products/industrial/ro-plant-50lph.png",
    capacity: "50 LPH",
    recoveryRate: "Up to 55%",
    automation: "Fully Automatic Auto Cutoff",
    applications: "Hotels, Corporate Offices, Mess, Colleges",
    shortDesc: "High-output 50 LPH commercial RO water purifier equipped with dual booster pumps, 20-inch jumbo filter housings & digital TDS controller.",
    fullDesc: "The 50 LPH Commercial RO Plant delivers continuous pure water flow for medium establishments like corporate cafeterias, hostels, and hotels. Features dual booster pumps and auto-flush controller.",
    features: ["Dual Heavy-Duty Booster Pumps", "50 LPH High Flow Rate", "Jumbo Micron Pre-filters", "Auto Flush & TDS Controller"],
    specs: [
      { label: "Flow Rate Capacity", value: "50 Liters / Hour" },
      { label: "Purification Method", value: "RO + UV + Anti-Scalant Dosing" },
      { label: "Pump Type", value: "Dual Diaphragm Booster Pumps" },
      { label: "Storage Tank", value: "Compatible with SS / Plastic Storage Tank" },
      { label: "Membrane Type", value: "100 GPD / 150 GPD TFC Membranes" }
    ]
  },
  {
    id: "ro-plant-500lph",
    name: "500 LPH Industrial RO Plant",
    category: "ro",
    categoryLabel: "Industrial RO",
    badge: "500 LPH Capacity",
    image: "/products/industrial/ro-plant-500lph.png",
    capacity: "500 LPH",
    recoveryRate: "Up to 70%",
    automation: "PLC / Microprocessor Panel",
    applications: "Factories, Bottling Plants, Hospitals, Textiles",
    shortDesc: "Custom-engineered 500 LPH industrial reverse osmosis plant featuring dual FRP pretreatment vessels, CRI vertical high-pressure pump, and stainless steel control panel.",
    fullDesc: "Aqua Shakti 500 LPH Industrial RO Plant removes up to 99.2% of dissolved solids from groundwater and municipal water. Built with heavy-duty FRP pretreatment vessels, CRI multi-stage vertical high pressure pump, and SS control panel with online flow rotameters.",
    features: ["2 x FRP Pretreatment Vessels", "CRI Vertical High-Pressure Pump", "SS Control Panel with Rotameters", "99% Salt Desalination"],
    specs: [
      { label: "Flow Rate Capacity", value: "500 Liters / Hour" },
      { label: "Membrane Vessel", value: "FRP / SS 4040 x 2" },
      { label: "High Pressure Pump", value: "CRI / CNP Vertical Multistage Pump" },
      { label: "Pretreatment Vessels", value: "1054 / 1252 FRP Vessels with Multiport Valves" },
      { label: "Control System", value: "Microprocessor Panel with Auto Flush" }
    ]
  },
  {
    id: "ro-plant-1000lph",
    name: "1000 LPH Industrial RO Plant",
    category: "ro",
    categoryLabel: "Industrial RO",
    badge: "1000 LPH Capacity",
    image: "/products/industrial/ro-plant-1000lph.png",
    capacity: "1000 LPH (1 M³/Hr)",
    recoveryRate: "Up to 75%",
    automation: "Fully Automatic PLC with HMI",
    applications: "Pharmaceuticals, Chemical Plants, Heavy Manufacturing",
    shortDesc: "Heavy-duty 1000 LPH industrial RO water treatment system equipped with 4040/8040 horizontal membrane vessels, automated chemical dosing unit & online conductivity meter.",
    fullDesc: "The 1000 LPH Industrial RO Plant is engineered for continuous 24/7 industrial process water supply. Features heavy-duty horizontal SS membrane rack, automatic antiscalant dosing, and digital monitoring.",
    features: ["1000 LPH Continuous Output", "4040 / 8040 Membrane Rack", "Online TDS & Conductivity Monitor", "Chemical Dosing System"],
    specs: [
      { label: "Flow Rate Capacity", value: "1000 LPH (1 M³/Hr)" },
      { label: "Desalination Rate", value: "99.2% Salt Removal" },
      { label: "Pretreatment", value: "Sand & Carbon Media Filters (1354 FRP)" },
      { label: "High Pressure Pump", value: "SS 304 Vertical Multistage Pump" },
      { label: "Dosing Unit", value: "Automatic Antiscalant Metering Pump" }
    ]
  },
  {
    id: "industrial-uv-system",
    name: "Industrial SS UV Disinfection System",
    category: "ro",
    categoryLabel: "UV Disinfection",
    badge: "99.99% Pathogen Inactivation",
    image: "/products/industrial/industrial-uv-system.png",
    capacity: "500 LPH – 10,000 LPH",
    recoveryRate: "100% Water Flow",
    automation: "Automatic Lamp Failure Alarm",
    applications: "Pharma Process Water, Food & Beverage, RO Permeate",
    shortDesc: "High-intensity SS 316 stainless steel industrial UV sterilizer chamber with high-transmittance quartz sleeves & microprocessor control unit for 99.99% pathogen inactivation.",
    fullDesc: "Aqua Shakti Industrial UV Systems destroy 99.99% of bacteria, viruses, and microorganisms in water without chemicals. Built with electro-polished SS 316 chamber and high-output quartz lamps.",
    features: ["Food Grade SS 316 Chamber", "99.99% Bacterial & Viral Kill", "High Transmittance Quartz Sleeve", "Digital Run-Hour Meter"],
    specs: [
      { label: "MOC Chamber", value: "Stainless Steel SS 316 / SS 304" },
      { label: "Disinfection Efficiency", value: "99.99% E. coli & Microorganisms" },
      { label: "Lamp Type", value: "High-Output Quartz UV-C Germicidal Lamp" },
      { label: "Max Working Pressure", value: "10 Bar" },
      { label: "Electrical Panel", value: "Digital Control Box with UV Intensity Sensor" }
    ]
  }
];

export const productsData: ProductDetail[] = industrialProductsData;

export const sparePartsData = [
  { name: "Pressure Gauge", image: "/spares/pressure-gauge.png", desc: "SS304 Glycerin filled high-accuracy pressure gauges." },
  { name: "Membrane Housing", image: "/spares/membrane-housing.png", desc: "FRP & SS 4040 / 8040 high-pressure membrane pressure vessels." },
  { name: "Cartridge Housing", image: "/spares/cartridge-housing.png", desc: "Micron sediment filter housings in 10\", 20\", 30\" & 40\"." },
  { name: "Multiport Valve", image: "/spares/multiport-valve.png", desc: "Top & side mounted automatic/manual multiport filter & softener valves." },
  { name: "Rota Meter", image: "/spares/rotameter.png", desc: "Online acrylic flow meters for permeate & reject flow monitoring." },
  { name: "Panel Board", image: "/spares/panel-board.png", desc: "Microprocessor & PLC control panels for automated RO & plant operation." },
  { name: "Water Level Sensor", image: "/spares/level-sensor.png", desc: "Magnetic & conductive liquid level switches for tanks." },
  { name: "Dosing Pump", image: "/spares/dosing-pump.png", desc: "Electronic diaphragm chemical metering dosing pumps." }
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (tabQuery) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  const filteredProducts = productsData.filter((prod) => {
    if (activeTab === "all") return true;
    return prod.category === activeTab;
  });

  return (
    <div className="page-content" style={{ paddingBottom: "40px" }}>
      {/* Premium Hero Header */}
      <div style={{ textAlign: "center", margin: "20px 0 36px 0" }}>
        <h1 className="page-title" style={{ fontSize: "36px", color: "#0c4a6e", margin: "0 0 10px 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Industrial &amp; Commercial Water Treatment Systems
        </h1>
        <p className="page-intro" style={{ margin: "0 auto", maxWidth: "760px", color: "#475569", fontSize: "16px", lineHeight: 1.6 }}>
          Explore Aqua Shakti Industries' complete range of custom-built Industrial RO Plants, Sewage &amp; Effluent Recycling Plants (STP/ETP), Hardness Softeners, DM Plants, and ASTreat Specialty Chemicals.
        </p>

        {/* Stats Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginTop: "20px", fontSize: "13.5px", fontWeight: 700, color: "#0c4a6e" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            500+ Industrial Commissionings
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            High Water Recovery (As per plant Design)
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            24/7 On-Site Support &amp; AMC
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "36px" }}>
        {[
          { id: "all", label: "All Products" },
          { id: "ro", label: "Industrial RO Plants" },
          { id: "wastewater", label: "STP & ETP Wastewater" },
          { id: "softener", label: "Softeners & DM Plants" },
          { id: "spares", label: "Components & Spare Parts" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "9px 20px",
              borderRadius: "30px",
              fontSize: "13.5px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s ease",
              border: activeTab === tab.id ? "1px solid #0284c7" : "1px solid #cbd5e1",
              background: activeTab === tab.id ? "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)" : "#ffffff",
              color: activeTab === tab.id ? "#ffffff" : "#334155",
              boxShadow: activeTab === tab.id ? "0 4px 14px rgba(2, 132, 199, 0.3)" : "0 2px 6px rgba(0,0,0,0.03)"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Products Grid (When Not Spares Tab) */}
      {activeTab !== "spares" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px", marginBottom: "50px" }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
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
              {/* Product Image Box */}
              <div style={{ position: "relative", height: "230px", width: "100%", background: "#f8fafc", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "8px"
                  }}
                />
                <span style={{ position: "absolute", bottom: "12px", left: "12px", background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(4px)", color: "#0284c7", fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "12px", textTransform: "uppercase" }}>
                  {product.categoryLabel}
                </span>
                {product.moq && (
                  <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(15, 23, 42, 0.82)", backdropFilter: "blur(4px)", color: "#f8fafc", fontSize: "10.5px", fontWeight: 700, padding: "3px 10px", borderRadius: "12px" }}>
                    MOQ: {product.moq}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#0c4a6e", margin: "0 0 8px 0", fontFamily: "'Inter', sans-serif" }}>
                  {product.name}
                </h2>
                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.55, margin: "0 0 16px 0" }}>
                  {product.shortDesc}
                </p>

                {/* Quick Specs Pill Box */}
                <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "12px 14px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "12.5px" }}>
                    <div>
                      <span style={{ color: "#94a3b8", display: "block", fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase" }}>Capacity</span>
                      <strong style={{ color: "#1e293b", fontWeight: 700 }}>{product.capacity}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#94a3b8", display: "block", fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase" }}>Water Recovery</span>
                      <strong style={{ color: "#059669", fontWeight: 700 }}>{product.recoveryRate}</strong>
                    </div>
                  </div>
                </div>

                {/* Feature Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px", marginTop: "auto" }}>
                  {product.features.map((feat, idx) => (
                    <span key={idx} style={{ background: "#e0f2fe", color: "#0369a1", fontSize: "11.5px", fontWeight: 700, padding: "3px 10px", borderRadius: "12px" }}>
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    style={{ flex: 1, background: "#f1f5f9", color: "#0c4a6e", border: "1px solid #cbd5e1", padding: "10px 14px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", cursor: "pointer", transition: "all 0.2s ease" }}
                  >
                    View Specs
                  </button>
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    style={{ flex: 1.2, background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", color: "#ffffff", textDecoration: "none", padding: "10px 14px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                  >
                    Get Quote &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Components & Spare Parts Section */}
      {(activeTab === "all" || activeTab === "spares") && (
        <div style={{ marginTop: "40px", marginBottom: "50px" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2 style={{ fontSize: "28px", color: "#0c4a6e", margin: "0 0 6px 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>
              Components &amp; Spare Parts
            </h2>
            <p style={{ color: "#64748b", fontSize: "14.5px", margin: "0 auto", maxWidth: "600px" }}>
              High-quality pumps, membranes, filter housings, dosing units, and control instruments in stock in Vapi, Gujarat.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {sparePartsData.map((spare, idx) => (
              <div key={idx} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                <div style={{ height: "130px", width: "100%", background: "#f8fafc", borderRadius: "10px", overflow: "hidden", marginBottom: "12px" }}>
                  <img src={spare.image} alt={spare.name} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "10px" }} />
                </div>
                <h3 style={{ fontSize: "15.5px", fontWeight: 700, color: "#0c4a6e", margin: "0 0 4px 0" }}>{spare.name}</h3>
                <p style={{ fontSize: "12.5px", color: "#64748b", margin: "0 0 14px 0", lineHeight: 1.45, flexGrow: 1 }}>{spare.desc}</p>
                <Link
                  href={`/contact?spare=${encodeURIComponent(spare.name)}`}
                  style={{ background: "#f1f5f9", color: "#0c4a6e", textAlign: "center", padding: "8px 12px", borderRadius: "6px", fontSize: "12.5px", fontWeight: 700, textDecoration: "none" }}
                >
                  Enquire Spares &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Specs Detail Modal */}
      {selectedProduct && (
        <div className="area-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="area-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "680px" }}>
            <button className="area-modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "12px", overflow: "hidden", flexShrink: 0, background: "#f1f5f9" }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0c4a6e", margin: 0 }}>
                  {selectedProduct.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "14.5px", color: "#334155", lineHeight: 1.6, marginBottom: "20px" }}>
              {selectedProduct.fullDesc}
            </p>

            {/* Specs Table */}
            <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "16px", marginBottom: "24px", border: "1px solid #e2e8f0" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 800, color: "#0c4a6e", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 12px 0" }}>
                Technical Specifications:
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {selectedProduct.specs.map((spec, idx) => (
                  <div key={idx} style={{ background: "#ffffff", padding: "8px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                    <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, display: "block", textTransform: "uppercase" }}>{spec.label}</span>
                    <strong style={{ fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{ background: "#f1f5f9", color: "#475569", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "13.5px", cursor: "pointer" }}
              >
                Close
              </button>
              <Link
                href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
                style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", color: "#ffffff", padding: "10px 24px", borderRadius: "8px", fontWeight: 800, fontSize: "13.5px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                Request Proposal &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "60px 0" }}>Loading Products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
