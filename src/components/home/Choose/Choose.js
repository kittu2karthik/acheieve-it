import React from "react";
import ChooseIcon from "../../../assets/images/Choose/ChooseIcon.svg";

import CreativeDesignIcon from "../../../assets/images/Choose/CreativeDesignIcon.svg";
import AwesomeDesignIcon from "../../../assets/images/Choose/AwesomeDesignIcon.svg";
import BestFeaturesIcon from "../../../assets/images/Choose/BestFeautesIcon.png";
import EasySolutionsIcon from "../../../assets/images/Choose/EasySolutionsIcon.svg";

import CustomerImages from "../../../assets/images/Choose/CustomerImages.png";

import "./Choose.css";

function Choose() {
  return (
    <section className="section-choose">
      <div className="choose">
        <ChooseTextBox />
        <ChooseImgBox />
      </div>
    </section>
  );
}

export default Choose;

function ChooseTextBox() {
  return (
    <div className="choose-text-box">
      <div className="choose-icon">
        <img src={ChooseIcon} alt="choose icon" />
        <span className="choose-text">Why We Are Best</span>
      </div>

      <h2 className="heading-secondary">Why Will You Choose Achieva IT</h2>
      <p className="choose-description">
        With proven experience in web development, the developers can meet your
        requirements precisely, and you get quality service.
      </p>

      <div className="user-images-stats">
        <div className="user-images">
          <img src={CustomerImages} alt="customer-images" />
        </div>
        <div className="user-stats">
          <span>5M+</span>
          <p>Active Members</p>
        </div>
      </div>
    </div>
  );
}
function ChooseImgBox() {
  return (
    <div className="choose-card-box">
      <div className="choose-card">
        <div className="col-flex">
          <CreativeCard />
          <BestFeatures />
        </div>
        <div className="col-flex cards-down">
          <AwesomeDesign />
          <EasySolutions />
        </div>
      </div>
    </div>
  );
}

function CreativeCard() {
  return (
    <div className="cards">
      <div className="card creative-card-border">
        <img src={CreativeDesignIcon} alt="creative-design icon" />
        <span>Creative Ideas</span>
        <p>Idea generation is a creative process to</p>
      </div>
    </div>
  );
}
function BestFeatures() {
  return (
    <div className="cards">
      <div className="card bestfeature-card-border">
        <img src={BestFeaturesIcon} alt="best-features icon" />

        <span>Best Features</span>
        <p>Things most notable or outstanding the </p>
      </div>
    </div>
  );
}
function AwesomeDesign() {
  return (
    <div className="cards">
      <div className="card awesome-card-border">
        <img src={AwesomeDesignIcon} alt="awesome-design icon" />

        <span>Awesome Design</span>
        <p>A career in design allows creative individuals </p>
      </div>
    </div>
  );
}
function EasySolutions() {
  return (
    <div className="cards">
      <div className="card easysolutions-card-border">
        <img src={EasySolutionsIcon} alt="easy-solutions icon" />
        <span>Easy Solutions</span>
        <p>With less than a week to go for the </p>
      </div>
    </div>
  );
}
