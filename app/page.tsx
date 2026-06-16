import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Water Treatment Plants, RO, STP, ETP & Chemicals",
  description:
    "Explore Aqua Shakti Industries' complete range: Industrial RO Plants, STP, ETP, Boiler Plants, Water Softeners, DM Plants, Domestic RO Systems & Water Treatment Chemicals. 500+ customers in Gujarat since 2007.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqua Shakti Industries — Industrial Water Treatment Solutions",
    description:
      "ISO 9001:2015 certified manufacturer of RO Plants, STP, ETP, Boiler Plants & Water Treatment Chemicals in Vapi, Gujarat. Get a free consultation today.",
    url: "https://www.aquashakti.in",
    images: [{ url: "/ro-plant.png", width: 1200, height: 630, alt: "Industrial RO Plant by Aqua Shakti" }],
  },
};

// JSON-LD for homepage (LocalBusiness)
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aqua Shakti Industries",
  image: "https://www.aquashakti.in/logo.png",
  url: "https://www.aquashakti.in",
  telephone: "+91-6356008844",
  email: "info@aquashaktiipl.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vapi Timber Compound, Opp. Chandralok Tower, Nr. D Mart, Chanod, G.I.D.C.",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396195",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.3893,
    longitude: 72.9106,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

export default function Home() {
  const clients = [
    { name: "Blue Star", logo: "/clients/blue-star.png" },
    { name: "Olive Healthcare", logo: "/clients/olive-healthcare.jpg" },
    { name: "Softech Pharma", logo: "/clients/softech-pharma.jpg" },
    { name: "Powerica", logo: "/clients/powerica.jpg" },
    { name: "Nilkamal", logo: "/clients/nilkamal.webp" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="page-content">
        <section className="slider" aria-label="Featured water treatment solutions">
          <div className="slider-track">
            <div className="slide">
              <img src="/ro-plant.png" alt="Industrial RO Plant manufactured by Aqua Shakti Industries, Vapi Gujarat" width={1100} height={340} loading="eager" />
              <div className="slide-overlay">
                <h1>Industrial Water Treatment Plant</h1>
                <p>Manufacturer Supplier &amp; Service Provider of water treatment Plant &amp; Chemicals</p>
              </div>
            </div>
            <div className="slide">
              <img src="/water-plant.png" alt="STP and ETP Water Treatment Facility by Aqua Shakti" width={1100} height={340} loading="lazy" />
              <div className="slide-overlay">
                <h2>STP &amp; ETP Plants</h2>
                <p>Ideal solution for all types of water - Design, Operation and Analysis</p>
              </div>
            </div>
            <div className="slide">
              <img src="/boiler-system.png" alt="Boiler Water Treatment System and Chemicals" width={1100} height={340} loading="lazy" />
              <div className="slide-overlay">
                <h2>Water Treatment Chemicals</h2>
                <p>All types of chemicals for boiler, RO, and waste water treatment</p>
              </div>
            </div>
          </div>
          <div className="slider-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section className="stat-row" aria-label="Company statistics">
          <div className="stat-item">
            <strong>500+</strong>
            <span>Customers in Gujarat</span>
          </div>
          <div className="stat-item">
            <strong>Since 2007</strong>
            <span>Established Excellence</span>
          </div>
          <div className="stat-item">
            <strong>ISO 9001:2015</strong>
            <span>Certified Company</span>
          </div>
          <div className="stat-item">
            <strong>20+</strong>
            <span>Reputed Clients</span>
          </div>
        </section>

        <section className="row" aria-label="Company expertise">
          <div className="row-text">
            <h2 className="section-heading">Our Expertise</h2>
            <p className="text-block">
              <strong>Aqua Shakti Industries</strong> is a leading manufacturer, supplier and service provider 
              of all kinds of Water Treatment Plants. Established in 2007 in Vapi, Gujarat, we have carved 
              a niche for ourselves by focusing on the exact needs of our customers.
            </p>
            <p className="text-block">
              Our products are widely acknowledged for their easy installation, minimal maintenance 
              requirements and high efficiency. We are committed to achieving excellence in all 
              departments of our business, ensuring maximum customer satisfaction.
            </p>
          </div>
          <div className="row-img">
            <img src="/chemical-dosing.png" alt="Chemical Dosing System for Water Treatment" width={420} height={300} loading="lazy" />
          </div>
        </section>

        {/* ---- Products Overview ---- */}
        <section aria-label="Products and services">
          <h2 className="section-heading">Our Products &amp; Services</h2>
          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="#1a5fb4" strokeWidth="2"/>
                  <line x1="8" y1="20" x2="40" y2="20" stroke="#1a5fb4" strokeWidth="1.5"/>
                  <circle cx="24" cy="28" r="4" stroke="#1a5fb4" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Industrial RO Plants</h3>
              <p>Custom-designed reverse osmosis systems for industrial water purification</p>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 36 L24 8 L36 36" stroke="#1a5fb4" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="28" x2="32" y2="28" stroke="#1a5fb4" strokeWidth="1.5"/>
                  <circle cx="24" cy="32" r="2" fill="#1a5fb4"/>
                </svg>
              </div>
              <h3>STP &amp; ETP Plants</h3>
              <p>Sewage and effluent treatment plants compliant with international standards</p>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="16" y="6" width="16" height="36" rx="2" stroke="#1a5fb4" strokeWidth="2"/>
                  <circle cx="24" cy="18" r="4" stroke="#1a5fb4" strokeWidth="1.5"/>
                  <rect x="20" y="30" width="8" height="4" rx="1" stroke="#1a5fb4" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Boiler Plants</h3>
              <p>Energy-efficient boiler systems with advanced controls and multi-fuel options</p>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 8 C20 8 12 20 12 28 C12 34.627 17.373 40 24 40 C30.627 40 36 34.627 36 28 C36 20 28 8 28 8" stroke="#1a5fb4" strokeWidth="2"/>
                  <circle cx="24" cy="28" r="4" stroke="#1a5fb4" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Water Treatment Chemicals</h3>
              <p>ASTreat range of chemicals for boiler, RO, and effluent treatment</p>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="12" y="10" width="24" height="28" rx="3" stroke="#1a5fb4" strokeWidth="2"/>
                  <circle cx="24" cy="22" r="5" stroke="#1a5fb4" strokeWidth="1.5"/>
                  <circle cx="20" cy="34" r="1.5" fill="#1a5fb4"/>
                  <circle cx="24" cy="34" r="1.5" fill="#1a5fb4"/>
                  <circle cx="28" cy="34" r="1.5" fill="#1a5fb4"/>
                </svg>
              </div>
              <h3>Domestic RO Systems</h3>
              <p>RO + UV + Alkaline and RO + UV + Mineral purifiers for home use</p>
            </article>
            <article className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="24" cy="24" r="14" stroke="#1a5fb4" strokeWidth="2"/>
                  <path d="M24 14 L24 24 L32 28" stroke="#1a5fb4" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>AMC &amp; Services</h3>
              <p>Comprehensive annual maintenance contracts and on-site support</p>
            </article>
          </div>
        </section>

        <section className="two-col" aria-label="Usage areas and mission">
          <div>
            <h2 className="section-heading">Area of Usage</h2>
            <ul className="plain-list">
              <li>Factory, Corporate and Industries</li>
              <li>Hospital, Clinic &amp; Pharmaceuticals Industries</li>
              <li>Hotel, Restaurant, Club, Entertainment Area</li>
              <li>Society, Village, Apartments &amp; Resident Area</li>
              <li>Universities, Collages, Schools &amp; Hostels</li>
              <li>Home, Office, Shop, Showroom</li>
            </ul>
          </div>
          <div>
            <h2 className="section-heading">Our Mission</h2>
            <p className="text-block" style={{ fontSize: '14px' }}>
              We work with clear and strategic market focus for providing customer centric solutions 
              and services. Keeping pace with latest technological developments, we combine our own 
              innovative thinking to build solutions and services for a strong competitive position.
            </p>
            <Link href="/about" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>
              Read More
            </Link>
          </div>
        </section>

        {/* ---- Reputed Clients ---- */}
        <section className="clients-section" aria-label="Our reputed clients">
          <h2 className="section-heading">Our Reputed Clients</h2>
          <p className="text-block">
            We are proud to serve some of the most respected names across industries — 
            from pharmaceuticals and hospitality to power generation and manufacturing.
          </p>
          <div className="clients-grid-contact">
            {clients.map((client) => (
              <div key={client.name} className="client-card-contact">
                <div className="client-logo-wrap">
                  <img
                    src={client.logo}
                    alt={`${client.name} - Trusted Client of Aqua Shakti Industries`}
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="cta-strip" aria-label="Contact call to action">
          <div>
            <h2>Need a Water Treatment Solution?</h2>
            <p>Get in touch for a free consultation and customized quote.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="submit-btn" style={{ textDecoration: 'none' }}>
              Get a Quote
            </Link>
            <a href="tel:+916356008844" className="submit-btn cta-outline" style={{ textDecoration: 'none' }}>
              Call: +91-6356008844
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
