import React from "react";
import "./Team.css";

import Person1 from "../../../assets/images/Team/Person1.png";
import Person2 from "../../../assets/images/Team/Person2.png";
import Person3 from "../../../assets/images/Team/Person3.png";
import Person4 from "../../../assets/images/Team/Person4.png";

const teamMembers = [
  {
    name: "John",
    role: "Founder",
    img: Person1,
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "David James",
    role: "Creative Head",
    img: Person2,
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Kamalesh",
    role: "Designer",
    img: Person3,
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    name: "Jason",
    role: "Business Head",
    img: Person4,
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
];

const TeamMember = ({ name, role, img, social }) => (
  <div className="team-member">
    <div className="team-img-container">
      <img src={img} alt={name} className="team-member-img" />
    </div>
    <div className="team-description">
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className="social-icons">
        <a href={social.facebook}>
          <i className="fab fa-facebook"></i>
        </a>
        <a href={social.instagram}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href={social.twitter}>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
);

const Team = () => (
  <section className="section-team">
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
