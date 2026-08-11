import type { Metadata } from "next";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import StatCounter from "./components/StatCounter";
import Testimonials from "./components/Testimonials";
import MissionAndUsage from "./components/MissionAndUsage";
import ReputedClients from "./components/ReputedClients";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="page-content">
        <HeroSlider />

        <section className="row" aria-label="Company expertise">
          <div className="row-text">
            <h2 className="section-heading">Who We Are</h2>
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
            <Link href="/about" className="submit-btn" style={{ textDecoration: "none", display: "inline-block", marginTop: "12px", fontWeight: 400 }}>
              View More
            </Link>
          </div>
          <div className="row-img" style={{ flex: "0 0 350px" }}>
            <video
              src="/video/company profile.mp4"
              width={350}
              height={350}
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{
                width: "350px",
                height: "350px",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid #d6e4ed",
                display: "block",
              }}
            />
          </div>
        </section>

        <StatCounter />

        {/* ---- Products Overview ---- */}
        <section aria-label="Products and services">
          <h2 className="section-heading">Our Products &amp; Services</h2>
          <div className="services-grid">
            <article className="service-card">
              <div className="service-card-body">
                <div className="service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="#1a1a1a" strokeWidth="2"/>
                    <line x1="8" y1="20" x2="40" y2="20" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <circle cx="24" cy="28" r="4" stroke="#1a1a1a" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3>Industrial RO Plants</h3>
                <p>Custom-designed reverse osmosis systems for industrial water purification</p>
              </div>
              <Link href="/products?tab=ro" className="service-card-btn">
                Explore More
              </Link>
            </article>

            <article className="service-card">
              <div className="service-card-body">
                <div className="service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 36 L24 8 L36 36" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                    <line x1="16" y1="28" x2="32" y2="28" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <circle cx="24" cy="32" r="2" fill="#1a1a1a"/>
                  </svg>
                </div>
                <h3>STP &amp; ETP Plants</h3>
                <p>Sewage and effluent treatment plants compliant with international standards</p>
              </div>
              <Link href="/products?tab=wastewater" className="service-card-btn">
                Explore More
              </Link>
            </article>



            <article className="service-card">
              <div className="service-card-body">
                <div className="service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20 8 C20 8 12 20 12 28 C12 34.627 17.373 40 24 40 C30.627 40 36 34.627 36 28 C36 20 28 8 28 8" stroke="#1a1a1a" strokeWidth="2"/>
                    <circle cx="24" cy="28" r="4" stroke="#1a1a1a" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3>Water Treatment Chemicals</h3>
                <p>ASTreat range of chemicals for boiler, RO, and effluent treatment</p>
              </div>
              <Link href="/chemicals" className="service-card-btn">
                Explore More
              </Link>
            </article>

            <article className="service-card">
              <div className="service-card-body">
                <div className="service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="12" y="10" width="24" height="28" rx="3" stroke="#1a1a1a" strokeWidth="2"/>
                    <circle cx="24" cy="22" r="5" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <circle cx="20" cy="34" r="1.5" fill="#1a1a1a"/>
                    <circle cx="24" cy="34" r="1.5" fill="#1a1a1a"/>
                    <circle cx="28" cy="34" r="1.5" fill="#1a1a1a"/>
                  </svg>
                </div>
                <h3>Domestic RO Systems</h3>
                <p>RO + UV + Alkaline and RO + UV + Mineral purifiers for home use</p>
              </div>
              <Link href="/products?tab=domestic" className="service-card-btn">
                Explore More
              </Link>
            </article>

            <article className="service-card">
              <div className="service-card-body">
                <div className="service-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="24" cy="24" r="14" stroke="#1a1a1a" strokeWidth="2"/>
                    <path d="M24 14 L24 24 L32 28" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>AMC &amp; Spare Parts</h3>
                <p>Comprehensive annual maintenance contracts, spare parts, and on-site support</p>
              </div>
              <Link href="/products?tab=spares" className="service-card-btn">
                Explore More
              </Link>
            </article>
          </div>
        </section>

        <MissionAndUsage showReadMore={true} />

        {/* ---- Customer Reviews ---- */}
        <Testimonials />

        {/* ---- Reputed Clients ---- */}
        <ReputedClients />

      </div>
    </>
  );
}
