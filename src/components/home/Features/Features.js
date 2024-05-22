import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="section-features">
      <div className="features">
        <div className="heading">
          <h2 className="heading-features-primary">Meet the People</h2>
          <h2 className="heading-features-secondary">We are Working With</h2>
        </div>
        <div className="company-logos">
          <div className="company-logo"></div>
          <div className="company-logo"></div>
          <div className="company-logo"></div>
          <div className="company-logo"></div>
          <div className="company-logo"></div>
        </div>
      </div>
    </section>
  );
}

export default Features;
