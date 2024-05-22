// StatsSection.js
import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="section-stats">
      <div className="stats">
        <div className="stat">
          <div className="number">08</div>
          <div className="label">Years Of Experience</div>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <div className="number">100+</div>
          <div className="label">Success Project</div>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <div className="number">08</div>
          <div className="label">Active Project</div>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <div className="number">100+</div>
          <div className="label">Happy Customer</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
