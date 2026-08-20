import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";
import MissionAndUsage from "../components/MissionAndUsage";

export const metadata: Metadata = {
  title: "About Us — Company Profile, Team & Mission",
  description:
    "Learn about Aqua Shakti Industries, ISO 9001:2015 certified water treatment plant manufacturer in Vapi, Gujarat since 2007. 500+ customers trust us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Aqua Shakti Industries — Trusted Since 2007",
    description: "ISO certified manufacturer of water treatment plants in Vapi, Gujarat.",
    url: "https://www.aquashakti.in/about",
  },
};

export default function About() {
  return (
    <div className="page-content">
      <h1 className="page-title">About Us</h1>

      <section className="row">
        <div className="row-text">
          <h2 className="section-heading">Company Profile</h2>
          <p className="text-block">
            Established in the year 2007, in Vapi, Valsad (Gujarat, India) Aqua Shakti Industries 
            An ISO 9001:2015 certified company is known to be one of the leading manufacturer, 
            supplier and service provider of all kinds of Water Treatment Plants. By focusing our 
            attention on the fulfillment of the exact needs of the customers, we have been able to 
            carve a niche for ourselves in the industry.
          </p>
          <p className="text-block">
            Our products are widely acknowledged for their easy installation, minimal maintenance 
            requirements and high efficiency. Our services are rendered by industry experts as per 
            the requirements of the customers and are concluded within the given time frame. Our 
            qualified engineers are involved in developing innovative and economical product by 
            using advance technology.
          </p>
          <p className="text-block">
            We are committed to achieve excellence in all department of our business. Our focus 
            to make customer satisfaction with our product and services. Our objective is to make 
            continuous improvement in the quality of our product through updating our technology 
            and procedures. We have more than 500 customers in Gujarat - India.
          </p>
        </div>
        <div className="row-img" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "36px" }}>
          <img src="/logo.png?v=10" alt="Aqua Shakti Industries Logo" width={320} height={320} style={{ objectFit: "contain", maxHeight: "280px", maxWidth: "100%", width: "auto", filter: "drop-shadow(0 10px 25px rgba(11, 60, 38, 0.15))" }} loading="lazy" />
        </div>
      </section>

      <section className="row row-reverse">
        <div className="row-text">
          <h2 className="section-heading">Our Team</h2>
          <p className="text-block">
            We have an experienced team of professionals, who put their dedicated efforts to meet 
            the requirements of our clients. Their expertise and knowledge had led us to mark a 
            good name in this competitive market. Moreover, our team is involved in extensive 
            study of the industries and their requirements for water purification.
          </p>
          <h3 className="sub-heading">Our team comprises following professionals :</h3>
          <ul className="plain-list">
            <li>Technicians</li>
            <li>Skilled labor</li>
            <li>Mechanical engineers</li>
            <li>Quality inspectors</li>
            <li>Research and development executives</li>
          </ul>
        </div>
        <div className="row-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/our_team.png?v=2" alt="Our Team at Aqua Shakti" width={420} height={300} style={{ objectFit: "contain", maxHeight: "270px", width: "auto" }} loading="lazy" />
        </div>
      </section>

      {/* Modern Our Mission & Area of Usage Section */}
      <MissionAndUsage showReadMore={false} />

      {/* Why Us Section */}
      <section style={{ margin: "40px 0 50px 0" }}>
        <h2 className="section-heading">Why Us</h2>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "28px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              "Transparent business dealings",
              "Reasonable prices",
              "Latest technology products",
              "Timely delivery",
              "Best service After sales",
              "Customization facility",
              "State of art infrastructure",
              "Efficient workforce easy in operation, and maintenance"
            ].map((item, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a5fb4" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
