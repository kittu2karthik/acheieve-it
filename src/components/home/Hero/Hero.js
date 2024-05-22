import React from "react";
import { Link } from "react-router-dom";
import hero from "./hero.png";

import "./Hero.css";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <HeroTextBox />
        <HeroImgBox />
      </div>
    </section>
  );
}

export default Hero;

function HeroTextBox() {
  return (
    <div className="hero-text-box">
      <div className="heading-primary-border">
        <h1 className="heading-primary">The Power of Technology </h1>
      </div>
      <p className="hero-description">
        We help build and manage a team of world-class developers to bring your
        vision to life
      </p>
      <Link to="/jobs" className="btn-main">
        Let’s get started!
      </Link>
    </div>
  );
}
function HeroImgBox() {
  return (
    <div className="hero-img-box">
      <img src={hero} alt="Hero-img" height={"100px"} width={"100px"} />
      {/* <image src="../../images/Hero-img.png" alt="Hello" width="100px" /> */}
    </div>
  );
}
