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
          <div className="row-img company-video-wrapper">
            <video
              src="/video/company profile.mp4"
              width={350}
              height={350}
              autoPlay
              loop
              muted
              playsInline
              controls
              controlsList="nofullscreen nodownload noremoteplayback"
              disablePictureInPicture
              className="company-profile-video"
            />
          </div>
        </section>

        <StatCounter />

        {/* ---- Products Overview (Exact Match to User Mockup) ---- */}
        <section className="products-overview-section" aria-label="Products and services">
          <h2 className="section-heading">Our Products &amp; Services</h2>
          <div className="services-cards-grid">
            
            {/* Card 1: Industrial RO Plants */}
            <article className="custom-service-card card-industrial-ro">
              <div className="card-top-icon icon-badge-blue">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#0284c7">
                  <path d="M4 20h16v-2h-2V10l-4 3V10l-4 3V4H4v16zm2-14h2v12H6V6zm8 7.5l2-1.5V18h-2v-4.5zM10 16l2-1.5V18h-2v-2z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">Industrial RO Plants</h3>
                <p className="service-desc">
                  Custom-designed reverse osmosis systems for reliable water purification.
                </p>
                <div className="card-blue-dash" />
              </div>
              <div className="card-action-row">
                <Link href="/products?tab=ro" className="card-link-text">
                  Explore More
                  <span className="link-arrow">→</span>
                </Link>
              </div>
              <div className="card-art-splash" />
            </article>

            {/* Card 2: STP & ETP Plants */}
            <article className="custom-service-card card-stp-etp">
              <div className="card-top-icon icon-badge-circle-blue">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#0284c7">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">STP &amp; ETP Plants</h3>
                <p className="service-desc">
                  Sewage and effluent treatment plants engineered for compliance and environmental safety.
                </p>
              </div>
              <div className="card-action-row">
                <Link href="/products?tab=wastewater" className="pill-btn pill-btn-blue">
                  Explore More
                  <span className="pill-arrow">→</span>
                </Link>
              </div>
              <div className="card-art-wave-right" />
            </article>

            {/* Card 3: Water Treatment Chemicals */}
            <article className="custom-service-card card-chemicals">
              <div className="card-top-icon icon-badge-green">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#16a34a">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">Water Treatment Chemicals</h3>
                <p className="service-desc">
                  Advanced range of chemicals for boilers, RO, cooling towers and water treatment.
                </p>
              </div>
              <div className="card-action-row">
                <Link href="/chemicals" className="pill-btn pill-btn-green">
                  Explore More
                  <span className="pill-arrow">→</span>
                </Link>
              </div>
              <div className="card-art-ripple" />
            </article>

            {/* Card 4: Domestic RO Systems */}
            <article className="custom-service-card card-domestic-ro">
              <div className="card-top-icon icon-badge-blue">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#0284c7">
                  <path d="M4 6h16v2H4V6zm2 4h12v2H6v-2zm-3 4h18v2H3v-2zm5 4h8v2H8v-2z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">Domestic RO Systems</h3>
                <p className="service-desc">
                  RO + UV + Alkaline solutions for safe &amp; healthy drinking water at home.
                </p>
              </div>
              <div className="card-art-wave-bottom">
                <Link href="/products?tab=domestic" className="wave-bottom-btn">
                  <span>Explore More</span>
                  <span className="wave-btn-circle">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0047ab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            {/* Card 5: AMC & Spare Parts */}
            <article className="custom-service-card card-amc-spares">
              <div className="card-top-icon icon-badge-purple-gear">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.63 8.48c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.25 0 .46-.18.49-.42l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">AMC &amp; Spare Parts</h3>
                <p className="service-desc">
                  Comprehensive maintenance contracts and genuine spare parts for uninterrupted performance.
                </p>
              </div>
              <div className="card-action-row">
                <Link href="/products?tab=spares" className="pill-btn pill-btn-white-amc">
                  <span>Explore More</span>
                  <span className="pill-btn-blue-dot">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="card-art-gears" />
            </article>

            {/* Card 6: Water Testing Services */}
            <article className="custom-service-card card-testing-services">
              <div className="card-top-icon icon-badge-orange-flask">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#ea580c">
                  <path d="M9 2v2h1v7.17L4.41 20.02A1.996 1.996 0 0 0 6.13 23h11.74a1.996 1.996 0 0 0 1.72-2.98L14 11.17V4h1V2H9zm-2.4 18L11 12.33V4h2v8.33L17.4 20H6.6z" />
                </svg>
              </div>
              <div className="card-main-body">
                <h3 className="service-title">Water Testing Services</h3>
                <p className="service-desc">
                  Accurate water analysis and reporting to ensure quality and safety standards.
                </p>
              </div>
              <div className="card-action-row">
                <Link href="/contact" className="pill-btn pill-btn-orange">
                  Explore More
                  <span className="pill-arrow">→</span>
                </Link>
              </div>
              <div className="card-art-test-tube" />
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
