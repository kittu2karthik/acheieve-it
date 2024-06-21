import React, { useState } from "react";

import Facebook from "../../../assets/images/Footer/FaceBook.svg";
import Instagram from "../../../assets/images/Footer/Instagram.svg";
import Telegram from "../../../assets/images/Footer/Telegram.svg";
import WhatsApp from "../../../assets/images/Footer/WhatsApp.svg";
import X from "../../../assets/images/Footer/X.svg";

import Icon from "../../../assets/images/Footer/Icon.svg";
import RightArrow from "../../../assets/images/Footer/arrow-right.svg";

import "./Footer.css";

function Footer() {
  return (
    <section className="section-footer">
      <footer className="footer">
        <FooterTextBox />
        <FooterLinksBox />
      </footer>
      <FooterLine />
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
          <img src={Facebook} alt="Facebook Logo" />
        </div>
        <div>
          <img src={Instagram} alt="Instagram Logo" />
        </div>
        <div>
          <img src={WhatsApp} alt="WhatsApp Logo" />
        </div>
        <div>
          <img src={Telegram} alt="Telegram Logo" />
        </div>
        <div>
          <img src={X} alt="X Logo" />
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
        <img src={Icon} alt="Icon" />
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
      </div>
      <FooterLinks />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="footer-links">
      <FooterCategoryLinks />
      <FooterUsefulLinks />
      <FooterContactUs />
    </div>
  );
}

function FooterCategoryLinks() {
  return (
    <ul className="footer-links-lists">
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" /> Home
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" /> About
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" /> Team
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" /> FAQs
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" />{" "}
        More...
      </li>
    </ul>
  );
}
function FooterUsefulLinks() {
  return (
    <ul className="footer-links-lists">
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" />{" "}
        Software Development
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" /> AI
        Programer
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" />{" "}
        System Application
      </li>
      <li>
        <img src={RightArrow} alt="Right Arrow" className="right-arrow" />{" "}
        Network Solution
      </li>
    </ul>
  );
}
function FooterContactUs() {
  return (
    <div className="footer-links-contact">
      <span> USA Address</span>

      <p>5490 McGjinnis Village Place, Suite #120, Alphanetta, GA 30005, USA</p>
    </div>
  );
}

function FooterLine() {
  return (
    <div className="footer-line-container">
      <div className="footer-line"></div>
      <p className="footer-text">
        © 2024 | All Rights Reserved | Powered by Achieva IT
      </p>
      <div className="footer-line"></div>
    </div>
  );
}
