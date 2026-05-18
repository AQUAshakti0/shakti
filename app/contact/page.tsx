import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote for Water Treatment Solutions",
  description:
    "Contact Aqua Shakti Industries in Vapi, Gujarat for water treatment plant inquiries. Call +91-6356008844 or email info@aquashaktiipl.com. ISO 9001:2008 certified.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Aqua Shakti Industries — Water Treatment Experts",
    description: "Get a free consultation for RO, STP, ETP & Boiler plants. Located in Vapi, Gujarat.",
    url: "https://www.aquashakti.in/contact",
  },
};

export default function Contact() {
  return (
    <div className="page-content">
      <h1 className="page-title">Contact</h1>

      <div className="two-col">
        <div>
          <h2 className="section-heading">Head Office</h2>
          <p className="text-block">
            <strong>Aqua Shakti Industries</strong><br />
            Vapi Timber Compound, Opp. Chandralok Tower,<br />
            Nr. D Mart, Chanod, G.I.D.C.,<br />
            VAPI - 396 195, Gujarat, India
          </p>

          <h2 className="section-heading">Phone &amp; Email</h2>
          <table>
            <tbody>
              <tr><td><strong>Phone</strong></td><td>+91-6356008844</td></tr>
              <tr><td><strong>Email</strong></td><td>info@aquashaktiipl.com</td></tr>
              <tr><td><strong>Website</strong></td><td>www.aquashakti.in</td></tr>
            </tbody>
          </table>

          <h2 className="section-heading">Certifications</h2>
          <ul className="plain-list">
            <li>ISO 9001:2008 Certified Company</li>
            <li>WAPTAG Member</li>
            <li>Make in India</li>
          </ul>
        </div>
        <div>
          <h2 className="section-heading">Send an Inquiry</h2>
          <form className="contact-form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5}></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Google Maps Location */}
      <section className="map-section">
        <h2 className="section-heading">Our Location</h2>
        <p className="text-block">
          Visit us at our head office in Vapi, Gujarat — conveniently located near D Mart, Chanod G.I.D.C.
        </p>
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?cid=6226288911405953734&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aqua Shakti Industries Location — Vapi, Gujarat"
          />
        </div>
      </section>
    </div>
  );
}
