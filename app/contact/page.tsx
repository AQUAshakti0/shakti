import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote for Water Treatment Solutions",
  description:
    "Contact Aqua Shakti Industries in Vapi, Gujarat for water treatment plant inquiries. Call +91-6356008844 or email info@aquashaktiipl.com / info@aquashaktiindustries.com. ISO 9001:2015 certified.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Aqua Shakti Industries — Water Treatment Experts",
    description: "Get a free consultation for RO, STP, ETP & Boiler plants. Located in Vapi, Gujarat.",
    url: "https://www.aquashaktiipl.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="page-content" style={{ background: "#fbf9f4", padding: "20px 0 60px 0" }}>
      <div className="container">
        
        {/* Clean Page Title */}
        <h1 className="page-title" style={{ color: "#0b3c26", margin: "0 0 24px 0" }}>
          Contact Us
        </h1>

        {/* Perfectly Aligned 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
            alignItems: "stretch"
          }}
        >
          {/* Left Column: Head Office & Contact Details Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "36px",
              border: "1px solid #e5dec9",
              boxShadow: "0 10px 30px rgba(11, 60, 38, 0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#0b3c26",
                  margin: "0 0 16px 0",
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Head Office
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#334155",
                  margin: "0 0 28px 0"
                }}
              >
                <strong style={{ color: "#0b3c26" }}>Aqua Shakti Industries</strong><br />
                Vapi Timber Compound, Opp. Chandralok Tower,<br />
                Nr. D Mart, Chanod, G.I.D.C.,<br />
                VAPI - 396 195, Gujarat, India
              </p>

              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#0b3c26",
                  margin: "0 0 16px 0",
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Phone &amp; Email
              </h2>

              <table style={{ width: "100%", marginBottom: "28px", borderCollapse: "collapse" }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px 0", fontWeight: 700, color: "#0b3c26", width: "90px" }}>Phone</td>
                    <td style={{ padding: "10px 0" }}>
                      <a href="tel:+916356008844" style={{ color: "#0b3c26", textDecoration: "none", fontWeight: 700 }}>
                        +91-6356008844
                      </a>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "10px 0", fontWeight: 700, color: "#0b3c26", verticalAlign: "top" }}>Email</td>
                    <td style={{ padding: "10px 0" }}>
                      <div style={{ marginBottom: "4px" }}>
                        <a href="mailto:info@aquashaktiipl.com" style={{ color: "#1a5fb4", textDecoration: "none", fontWeight: 600 }}>
                          info@aquashaktiipl.com
                        </a>
                      </div>
                      <div>
                        <a href="mailto:info@aquashaktiindustries.com" style={{ color: "#1a5fb4", textDecoration: "none", fontWeight: 600 }}>
                          info@aquashaktiindustries.com
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 0", fontWeight: 700, color: "#0b3c26" }}>Website</td>
                    <td style={{ padding: "10px 0" }}>
                      <a href="https://www.aquashaktiipl.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1a5fb4", textDecoration: "none", fontWeight: 600 }}>
                        www.aquashaktiipl.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: "#f4f0e6", padding: "18px 20px", borderRadius: "12px", border: "1px solid #e5dec9" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#0b3c26", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Certifications &amp; Accreditations
              </h3>
              <ul style={{ margin: 0, paddingLeft: "18px", color: "#475569", fontSize: "13.5px", lineHeight: "1.6" }}>
                <li>ISO 9001:2015 Certified Company</li>
                <li>WAPTAG Official Member</li>
                <li>Make in India Enterprise</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Send an Inquiry Form Card (Top Aligned) */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "36px",
              border: "1px solid #e5dec9",
              boxShadow: "0 10px 30px rgba(11, 60, 38, 0.06)"
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#0b3c26",
                margin: "0 0 20px 0",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Send an Inquiry
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Google Maps Location Section */}
        <section className="map-section" style={{ marginTop: "50px" }}>
          <h2 className="section-heading" style={{ color: "#0b3c26", fontSize: "24px" }}>
            Our Location
          </h2>
          <p className="text-block" style={{ color: "#526058", fontSize: "15px" }}>
            Visit us at our head office in Vapi, Gujarat — conveniently located near D Mart, Chanod G.I.D.C.
          </p>
          <div className="map-container" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #e5dec9", boxShadow: "0 10px 24px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://maps.google.com/maps?cid=6226288911405953734&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aqua Shakti Industries Location — Vapi, Gujarat"
            />
          </div>
        </section>

      </div>
    </div>
  );
}
