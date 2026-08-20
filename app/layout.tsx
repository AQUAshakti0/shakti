import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aqua Shakti Industries — Industrial RO Plant, ETP, STP & Water Treatment Manufacturer",
    template: "%s | Aqua Shakti Industries",
  },
  description: "Aqua Shakti Industries is a leading manufacturer of Industrial RO Plants, Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Water Softeners & Specialty Water Chemicals in Vapi, Gujarat, India.",
  keywords: [
    "Aqua Shakti Industries",
    "Industrial RO Plant Manufacturer",
    "ETP Plant Manufacturer Vapi",
    "STP Plant Manufacturer Gujarat",
    "Water Treatment Chemicals",
    "DM Plant Manufacturer",
    "Water Softener Plant",
    "Boiler Chemical Supplier",
    "Cooling Tower Chemical",
    "Water Treatment Company Vapi",
  ],
  authors: [{ name: "Aqua Shakti Industries", url: "https://www.aquashakti.in" }],
  creator: "Aqua Shakti Industries",
  publisher: "Aqua Shakti Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.aquashakti.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqua Shakti Industries — Water & Wastewater Treatment Solutions",
    description: "ISO 9001:2015 Certified Manufacturer of Industrial RO, ETP, STP Plants & Specialty Chemicals in Gujarat, India.",
    url: "https://www.aquashakti.in",
    siteName: "Aqua Shakti Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/ro-plant.png",
        width: 1200,
        height: 630,
        alt: "Aqua Shakti Industries - Water Treatment Plants",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aqua Shakti Industries",
  "image": "https://www.aquashakti.in/ro-plant.png",
  "@id": "https://www.aquashakti.in",
  "url": "https://www.aquashakti.in",
  "telephone": "+916356008844",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 123, GIDC Industrial Estate",
    "addressLocality": "Vapi",
    "addressRegion": "Gujarat",
    "postalCode": "396195",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.3721,
    "longitude": 72.9106
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/aquashakti",
    "https://www.linkedin.com/company/aquashakti"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/logo.png?v=25" sizes="any" />
        <meta name="theme-color" content="#1a5fb4" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Vapi, Gujarat" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <div className="site-wrap">
          <main>{children}</main>

          {/* Call to Action Strip (Flat Page-Stuck Buttons, Zero Border, Color Hover) */}
          <section className="cta-strip" aria-label="Contact call to action">
            <div className="cta-strip-inner">
              <div>
                <h2 className="cta-title">Need a Water Treatment Solution?</h2>
                <p className="cta-subtitle">Get in touch for a free consultation and customized quote.</p>
              </div>
              <div className="cta-actions">
                <Link href="/contact" className="cta-flat-btn cta-btn-primary">
                  Get a Quote
                </Link>
                <a href="tel:+916356008844" className="cta-flat-btn cta-btn-call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call: +91-6356008844
                </a>
              </div>
            </div>
          </section>

          <footer className="site-footer" role="contentinfo">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src="/logo.png?v=25"
                alt="Aqua Shakti Industries Pvt. Ltd."
                width={28}
                height={28}
                style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "50%" }}
                loading="lazy"
              />
              <span style={{ fontWeight: 700, color: "#0b3c26", letterSpacing: "0.5px" }}>
                Aqua Shakti Industries Pvt. Ltd.
              </span>
            </div>
            <span>
              &copy; 2007–{new Date().getFullYear()} Aqua Shakti Industries. All rights reserved.
              <span style={{ margin: "0 8px" }}>|</span>
              <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</Link>
            </span>
            <span>ISO 9001:2015 Certified &middot; WAPTAG Member</span>
            <span>Designed &amp; Developed by <a href="https://www.davlabs.in" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', fontWeight: 700 }}>DAVLabs</a></span>
          </footer>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/916356008844"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2.667A13.233 13.233 0 002.667 15.87a13.12 13.12 0 001.97 6.93L2.667 29.333l6.74-1.92a13.3 13.3 0 006.596 1.747h.006A13.24 13.24 0 0029.333 15.87 13.24 13.24 0 0016.003 2.667zm0 24.24a11.03 11.03 0 01-5.59-1.523l-.4-.237-4.15 1.183 1.107-4.047-.26-.413A10.87 10.87 0 014.89 15.87a11.01 11.01 0 0111.113-10.913 11.01 11.01 0 0111.107 10.913 11.02 11.02 0 01-11.107 11.037zm6.04-8.247c-.33-.167-1.96-.967-2.263-1.077-.307-.113-.527-.167-.75.167-.22.333-.857 1.077-1.05 1.297-.193.22-.387.247-.717.083-.33-.167-1.393-.513-2.653-1.637-.98-.873-1.643-1.953-1.837-2.283-.193-.333-.02-.513.147-.68.15-.147.33-.387.497-.58.167-.193.22-.333.333-.553.113-.22.057-.413-.03-.58-.083-.167-.75-1.807-1.027-2.473-.27-.653-.547-.563-.75-.573-.193-.01-.417-.013-.64-.013a1.23 1.23 0 00-.89.417c-.307.333-1.17 1.143-1.17 2.787 0 1.643 1.197 3.23 1.363 3.453.167.22 2.357 3.6 5.71 5.05.797.347 1.42.553 1.903.707.8.253 1.527.217 2.103.133.64-.097 1.96-.803 2.237-1.577.277-.773.277-1.437.193-1.577-.083-.137-.303-.22-.637-.387z" fill="#ffffff"/>
          </svg>
        </a>

        {/* Back to Top Floating Button */}
        <BackToTop />

        {/* Global Scroll Reveal Animation Observer */}
        <ScrollReveal />
      </body>
    </html>
  );
}
