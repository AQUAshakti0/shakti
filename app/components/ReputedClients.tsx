"use client";

import React from "react";

export interface ClientItem {
  name: string;
  logo: string;
}

export const reputedClients: ClientItem[] = [
  { name: "Nilkamal", logo: "/clients/nilkamal.svg?v=50" },
  { name: "Viral Corporation", logo: "/clients/viral-corporation.svg?v=50" },
  { name: "Vijay Technologies", logo: "/clients/vijay-technologies.svg?v=50" },
  { name: "Pluz Resort", logo: "/clients/pluz-resort.svg?v=50" },
  { name: "Olive Healthcare", logo: "/clients/olive-healthcare.svg?v=50" },
  { name: "Chhaparia Group", logo: "/clients/chhaparia-group.svg?v=50" },
  { name: "Blue Star", logo: "/clients/blue-star.svg?v=50" },
  { name: "K Krish", logo: "/clients/k-krish.svg?v=50" },
  { name: "Lords Hotels & Resorts", logo: "/clients/lords-hotels.svg?v=50" },
  { name: "Parekh Aluminex Limited", logo: "/clients/parekh-aluminex.svg?v=50" },
  { name: "SP Group", logo: "/clients/sp-group.svg?v=50" },
  { name: "Softech Pharma", logo: "/clients/softech-pharma.svg?v=50" },
  { name: "Shapoorji Pallonji", logo: "/clients/shapoorji-pallonji.png?v=50" },
  { name: "STI Industries", logo: "/clients/sti-industries.svg?v=50" },
  { name: "Powerica", logo: "/clients/powerica.png?v=50" },
  { name: "Tema India Ltd.", logo: "/clients/tema-india.svg?v=50" },
  { name: "Sterling Generators", logo: "/clients/sterling-generators.svg?v=50" },
  { name: "Transrail Lighting", logo: "/clients/transrail-lighting.svg?v=50" },
  { name: "Macleods Pharmaceuticals", logo: "/clients/macleods-pharma.svg?v=50" },
  { name: "Jay Jagdamba Profile Engineering", logo: "/clients/jay-jagdamba.svg?v=50" }
];

const row1Clients = reputedClients.slice(0, 10);
const row2Clients = reputedClients.slice(10, 20);

export default function ReputedClients() {
  return (
    <section className="clients-section" aria-label="Our reputed clients" style={{ margin: "60px 0 40px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="section-heading" style={{ color: "#0b3c26", fontSize: "32px", margin: "0 0 8px 0", fontFamily: "'DM Serif Display', Georgia, serif" }}>
          Our Reputed Clients
        </h2>
        <p className="text-block" style={{ margin: "0 auto", maxWidth: "680px", color: "#526058", fontSize: "15px", lineHeight: 1.6 }}>
          We are proud to serve leading names across industries — from pharmaceuticals, healthcare, and hospitality to corporate, power, and manufacturing sectors.
        </p>
      </div>

      {/* Infinite Continuous Marquee Slider Wrapper */}
      <div className="clients-marquee-wrapper">
        {/* Row 1: Sliding Left */}
        <div className="clients-marquee-container">
          <div className="clients-marquee-track track-left">
            {[...row1Clients, ...row1Clients, ...row1Clients].map((client, idx) => (
              <div key={`${client.name}-r1-${idx}`} className="client-logo-card" title={client.name}>
                <img
                  src={client.logo}
                  alt={`${client.name} - Trusted Client of Aqua Shakti Industries`}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="clients-marquee-container" style={{ marginTop: "16px" }}>
          <div className="clients-marquee-track track-right">
            {[...row2Clients, ...row2Clients, ...row2Clients].map((client, idx) => (
              <div key={`${client.name}-r2-${idx}`} className="client-logo-card" title={client.name}>
                <img
                  src={client.logo}
                  alt={`${client.name} - Trusted Client of Aqua Shakti Industries`}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
