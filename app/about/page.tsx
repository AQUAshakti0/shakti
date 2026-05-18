import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "About Us — Company Profile, Team & Mission",
  description:
    "Learn about Aqua Shakti Industries, ISO 9001:2008 certified water treatment plant manufacturer in Vapi, Gujarat since 2007. 500+ customers trust us.",
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
            An ISO 9001:2008 certified company is known to be one of the leading manufacturer, 
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
        <div className="row-img">
          <img src="/ro-plant.png" alt="Industrial Water Treatment Plant by Aqua Shakti" width={420} height={300} loading="lazy" />
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
        <div className="row-img">
          <img src="/boiler-system.png" alt="Boiler System by Aqua Shakti" width={420} height={300} loading="lazy" />
        </div>
      </section>

      <section>
        <h2 className="section-heading">Our Mission</h2>
        <p className="text-block">
          We will work with clear and strategic market focus for providing customer centric solutions 
          and services. Keeping pace with latest technological developments, we will combine our own 
          innovative thinking to build solutions and services for strong competitive position. Through 
          intense process and methods orientation we will ensure continuous operational improvements 
          to provide value to the customers. High employee motivation and continued value creation 
          for stakeholders will help us continuously tread the progressive path.
        </p>
      </section>

      <div className="two-col">
        <div>
          <h2 className="section-heading">Why Us</h2>
          <ul className="plain-list">
            <li>Transparent business dealings</li>
            <li>Reasonable prices</li>
            <li>Latest technology products</li>
            <li>Timely delivery</li>
            <li>Best service After sales</li>
            <li>Customization facility</li>
            <li>State of art infrastructure</li>
            <li>Efficient workforce easy in operation, and maintenance</li>
          </ul>
        </div>
        <div>
          <h2 className="section-heading">Area of Usage</h2>
          <ul className="plain-list">
            <li>Home, Office, Shop, Showroom</li>
            <li>Hotel, Restaurant, Club, Entertainment Area</li>
            <li>Society, Village, Apartments &amp; Resident Area</li>
            <li>Hospital, Clinic &amp; Pharmaceuticals Industries</li>
            <li>Factory, Corporate and Industries</li>
            <li>Universities, Collages, Schools &amp; Hostels</li>
          </ul>
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
