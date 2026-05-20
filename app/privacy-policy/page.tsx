import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Aqua Shakti Industries, outlining how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="page-content">
      <h1 className="page-title">Privacy Policy</h1>
      
      <div className="text-block" style={{ maxWidth: '100%' }}>
        <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>
        <br />
        <p>
          At Aqua Shakti Industries, accessible from https://www.aquashakti.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Aqua Shakti Industries and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
        
        <h2 className="section-heading" style={{ marginTop: '30px' }}>Information We Collect</h2>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </p>

        <h2 className="section-heading" style={{ marginTop: '30px' }}>How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="plain-list">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2 className="section-heading" style={{ marginTop: '30px' }}>Log Files</h2>
        <p>
          Aqua Shakti Industries follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
        </p>

        <h2 className="section-heading" style={{ marginTop: '30px' }}>Cookies and Web Beacons</h2>
        <p>
          Like any other website, Aqua Shakti Industries uses &ldquo;cookies&rdquo;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
        </p>

        <h2 className="section-heading" style={{ marginTop: '30px' }}>Third Party Privacy Policies</h2>
        <p>
          Aqua Shakti Industries&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>

        <h2 className="section-heading" style={{ marginTop: '30px' }}>Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
        </p>
        <ul className="plain-list">
          <li><strong>Email:</strong> info@aquashaktiipl.com</li>
          <li><strong>Phone:</strong> +91-6356008844</li>
          <li><strong>Address:</strong> Vapi Timber Compound, Opp. Chandralok Tower, Nr. D Mart, Chanod, G.I.D.C., Vapi, Gujarat 396195, IN</li>
        </ul>
      </div>
    </div>
  );
}
