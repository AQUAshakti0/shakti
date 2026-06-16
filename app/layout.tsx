import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "Aqua Shakti Industries — Water Treatment Plant Manufacturer in Vapi, Gujarat",
    template: "%s | Aqua Shakti Industries",
  },
  description:
    "Aqua Shakti Industries is a leading ISO 9001:2015 certified manufacturer, supplier & service provider of Industrial RO Plants, STP, ETP, Boiler Plants & Water Treatment Chemicals in Vapi, Gujarat, India. 500+ customers since 2007.",
  keywords: [
    "water treatment plant manufacturer",
    "RO plant manufacturer Vapi",
    "industrial RO plant Gujarat",
    "STP plant manufacturer India",
    "ETP plant manufacturer",
    "boiler plant manufacturer",
    "water treatment chemicals",
    "ASTreat chemicals",
    "water softener plant",
    "DM plant manufacturer",
    "domestic RO system",
    "Aqua Shakti Industries",
    "water treatment Vapi Gujarat",
    "ISO certified water treatment",
    "industrial water purification",
  ],
  authors: [{ name: "Aqua Shakti Industries" }],
  creator: "DAVLabs",
  publisher: "Aqua Shakti Industries",
  metadataBase: new URL("https://www.aquashakti.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aquashakti.in",
    siteName: "Aqua Shakti Industries",
    title: "Aqua Shakti Industries — Water Treatment Plant Manufacturer in Vapi, Gujarat",
    description:
      "Leading manufacturer of Industrial RO, STP, ETP, Boiler Plants & Water Treatment Chemicals. ISO 9001:2015 certified. 500+ customers in Gujarat since 2007.",
    images: [
      {
        url: "/ro-plant.png",
        width: 1200,
        height: 630,
        alt: "Aqua Shakti Industries - Industrial Water Treatment Plant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Shakti Industries — Water Treatment Plant Manufacturer",
    description:
      "Leading manufacturer of Industrial RO, STP, ETP, Boiler Plants & Water Treatment Chemicals in Vapi, Gujarat.",
    images: ["/ro-plant.png"],
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
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  category: "Industrial Manufacturing",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aqua Shakti Industries",
  url: "https://www.aquashakti.in",
  logo: "https://www.aquashakti.in/logo.png",
  description:
    "Leading manufacturer, supplier & service provider of Industrial RO Plants, STP, ETP, Boiler Plants & Water Treatment Chemicals.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vapi Timber Compound, Opp. Chandralok Tower, Nr. D Mart, Chanod, G.I.D.C.",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396195",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6356008844",
    contactType: "sales",
    email: "info@aquashaktiipl.com",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Water Treatment Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Industrial RO Plant",
          description: "Custom-designed reverse osmosis systems for industrial water purification",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "STP Plant",
          description: "Sewage treatment plants compliant with international standards",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "ETP Plant",
          description: "Effluent treatment plant for design, operation and analysis of waste water",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Boiler Plant",
          description: "Energy-efficient boiler systems with advanced controls",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Water Treatment Chemicals",
          description: "ASTreat range of chemicals for boiler, RO, and effluent treatment",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <meta name="theme-color" content="#1a5fb4" />

        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Vapi, Gujarat" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Top Info Strip */}
        <div className="info-strip" role="banner">
          <div className="info-strip-inner">
            <span>
              <a href="tel:+916356008844" style={{ color: 'inherit', textDecoration: 'none' }}>
                Phone: +91-6356008844
              </a>
            </span>
            <span>
              <a href="mailto:info@aquashaktiipl.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                Email: info@aquashaktiipl.com
              </a>
            </span>
          </div>
        </div>

        <div className="site-wrap">
          <header>
            <nav className="topbar" aria-label="Main navigation">
              <Link href="/" className="topbar-left" aria-label="Aqua Shakti Industries - Home">
                <img
                  src="/logo.png?v=2"
                  alt="Aqua Shakti Industries Logo"
                  className="topbar-logo"
                  width={44}
                  height={44}
                  loading="eager"
                />
                <div className="topbar-brand">
                  AQUASHAKTI
                  <span>INDUSTRIES PRIVATE LIMITED</span>
                </div>
              </Link>
              <ul className="topbar-nav" role="menubar">
                <li role="none"><Link href="/" role="menuitem">Home</Link></li>
                <li role="none"><Link href="/about" role="menuitem">About</Link></li>
                <li role="none"><Link href="/products" role="menuitem">Products</Link></li>
                <li role="none"><Link href="/chemicals" role="menuitem">Chemicals</Link></li>
                <li role="none"><Link href="/contact" role="menuitem">Contact</Link></li>
              </ul>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer" role="contentinfo">
            <span>
              &copy; 2007–{new Date().getFullYear()} Aqua Shakti Industries. All rights reserved.
              <span style={{ margin: "0 8px" }}>|</span>
              <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</Link>
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
      </body>
    </html>
  );
}
