import React from "react";

import AnkerLogo from "../../../assets/images/Features/AnkerLogo.svg";
import BitgoLogo from "../../../assets/images/Features/BitgoLogo.svg";
import ExodusLogo from "../../../assets/images/Features/ExodusLogo.svg";
import MetaMaskLogo from "../../../assets/images/Features/MetaMaskLogo.svg";
import WooxLogo from "../../../assets/images/Features/WooxLogo.svg";

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
          <div className="company-logo">
            <img src={AnkerLogo} alt="Anker Logo" />
          </div>
          <div className="company-logo">
            <img src={BitgoLogo} alt="Anker Logo" />
          </div>
          <div className="company-logo">
            <img src={ExodusLogo} alt="Anker Logo" />
          </div>
          <div className="company-logo">
            <img src={MetaMaskLogo} alt="Anker Logo" />
          </div>
          <div className="company-logo">
            <img src={WooxLogo} alt="Anker Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
