import React from "react";

import Image1 from "../../../assets/images/AboutUs/AboutUsImage1.png";
import Image2 from "../../../assets/images/AboutUs/AboutUsImage2.png";
import Image3 from "../../../assets/images/AboutUs/AboutUsImage3.png";

import AboutUsIcon from "../../../assets/images/AboutUs/AboutUs.svg";

import "./AboutUs.css";

function AbouUs() {
  return (
    <section className="section-aboutus">
      <div className="aboutus">
        <AboutUsImgBox />
        <AboutUsTextBox />
      </div>
    </section>
  );
}

export default AbouUs;

function AboutUsImgBox() {
  return (
    <div className="aboutus-img-box">
      <div className="image-container">
        <div className="image-container-left">
          <img src={Image1} alt="working people" />
        </div>
        <div className="image-container-right">
          <img
            src={Image2}
            alt="working people"
            className="image-container-right-1"
          />
          <img
            src={Image3}
            alt="working people"
            className="image-container-right-2"
          />
        </div>
      </div>
    </div>
  );
}
function AboutUsTextBox() {
  return (
    <div className="aboutus-text-box">
      <div className="aboutus-icon">
        <img src={AboutUsIcon} alt="About us icon" />
        <span className="aboutus-text">About Us</span>
      </div>
      <h2 className="heading-secondary">Our Company Overview</h2>
      <p className="aboutus-description">
        Achieva IT is an information technology services firm with over 10
        years' industry experience in providing high quality, cost-effective
        Software solutions and Consulting services. We work with organizations
        of all types and sizes across all industries, from established companies
        to the most agile start-ups, to offer you tremendous opportunities and
        talents. We have a reputation for quality, superior technical skills,
        and proven customer service oriented results.
      </p>

      <div className="aboutus-btns">
        <button className="btn btn-projects">Projects</button>
        <button className="btn btn-our-team">Our Team</button>
      </div>
    </div>
  );
}
