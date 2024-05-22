import React, { useState } from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="section-footer">
      <footer className="footer">
        <FooterTextBox />
        <FooterLinksBox />
      </footer>
    </section>
  );
}

export default Footer;

function FooterTextBox() {
  return (
    <div className="footer-text-box">
      <h1 className="footer-heading-primary">Achieva IT</h1>
      <p className="footer-description">
        Our mission is to understand our clients' business needs and their
        industry, use Information Technology in meeting and resolving their
        complex business and technical challenges. The goal of Achieva IT is to
        be our client's preferred vendor for all recruiting and staffing needs
        and to effectively match the right candidates with the right job
        opportunities. At Achieva IT, we believe in a culture of inventiveness,
        integrity, teamwork and trust. We believe that productive relationships
        are the result of mutual respect and honest commitment. LEARN MORE ABOUT
        ACHIEVA IT
      </p>
      <div className="footer-logos">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

function FooterLinksBox() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Email submitted:", email);
  };

  return (
    <div className="footer-links-box">
      <div className="footer-email-container">
        <img src="" alt="" />
        <div className="footer-email">
          <h3>Enter Your Email</h3>
          <p>Our colleagues will contact you soon</p>
        </div>

        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter Email *"
            value={email}
            onChange={handleChange}
            required
            className="email-input"
          />
          <button type="submit" className="email-button">
            <span className="email-arrow">&rarr;</span>
          </button>
        </form>

        {/* <EmailInput /> */}
      </div>
      <div className="footer-links"></div>
    </div>
  );
}
