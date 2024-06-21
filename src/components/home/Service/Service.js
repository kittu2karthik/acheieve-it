import React from "react";

import SolutionsIcon from "../../../assets/images/Services/SolutionsIcon.svg";
import ApplicationIcon from "../../../assets/images/Services/ApplicationIcon.svg";
import DevelopmentIcon from "../../../assets/images/Services/DevelopmentIcon.png";

import "./Service.css";

function Service() {
  return (
    <section className="section-service">
      <div className="service">
        <h2 className="heading-service">Services We Offer</h2>
        <div className="service-cards">
          <SolutionsCard />
          <ApplicationSupportCard />
          <DevelopmentCard />
        </div>
      </div>
    </section>
  );
}

export default Service;

function SolutionsCard() {
  return (
    <div className="solutions-card">
      <div className="solutions-card-inner">
        <div className="solutions-card-inner-container">
          <img src={SolutionsIcon} alt="solutions icon" />
        </div>
        <h4>Solutions</h4>
        <p>
          We are expertise at software solutions & IT consulting services
          company that focuses on differentiated customer experience,
          accelerating cycle time & improving business outcomes through
          innovative technology solutions
        </p>
      </div>
    </div>
  );
}
function ApplicationSupportCard() {
  return (
    <div className="solutions-card border-red-down">
      <div className="solutions-card-inner">
        <div className="solutions-card-inner-container">
          <img src={ApplicationIcon} alt="application icon" />
        </div>

        <h4 className="text-red">Application Support</h4>
        <p>
          Application Support Analysts support IT services delivered to users
          within an organisation, enabling the required business processes
          needed for the business to be successful.
        </p>
      </div>
    </div>
  );
}

function DevelopmentCard() {
  return (
    <div className="solutions-card">
      <div className="solutions-card-inner">
        <div className="solutions-card-inner-container">
          <img src={DevelopmentIcon} alt="development icon" />
        </div>
        <h4>Development</h4>
        <p>
          We are a leading software development company that offers top-rated
          Software Development Services due to our vast experience, team of
          skilled professionals, key business insights, and a dedicated working
          process.
        </p>
      </div>
    </div>
  );
}
