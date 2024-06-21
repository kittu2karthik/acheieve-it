import React from "react";

import Comma from "../../../assets/images/ClientFeedback/Comma.svg";

import Customer1 from "../../../assets/images/Footer/Cutomer1.png";
import Customer2 from "../../../assets/images/Footer/Cutomer2.png";
import Customer3 from "../../../assets/images/Footer/Cutomer3.png";
import Customer4 from "../../../assets/images/Footer/Cutomer4.png";
import Customer5 from "../../../assets/images/Footer/Cutomer5.png";

import "./ClientFeedback.css";

const testimonials = [
  {
    name: "Romeena De Silva",
    company: "Janet Cosmetics",
    image: Customer1,
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    company: "Janet Cosmetics",
    image: Customer2,
    rating: 5,
  },
  {
    name: "Imran Khan",
    company: "Software Engineer",
    image: Customer3,
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    company: "Janet Cosmetics",
    image: Customer4,
    rating: 5,
  },
  {
    name: "Romeena De Silva",
    company: "Janet Cosmetics",
    image: Customer5,
    rating: 5,
  },
];

function ClientFeedback() {
  return (
    <section className="section-client-feedback">
      <div className="client-feedback">
        <img src={Comma} alt="comma" className="client-feedback-img img-left" />

        <h3>Why Customer Love</h3>
        <h4>Working With Us</h4>
        <p>
          Without any doubt I recommend Alcaline Solutions as one of the best
          web design and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
        <img
          src={Comma}
          alt="comma"
          className="client-feedback-img img-right"
        />
      </div>
      <Testimonials />
    </section>
  );
}

export default ClientFeedback;

const Testimonials = () => {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-img"
          />
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-company">{testimonial.company}</p>
          <div className="testimonial-rating">
            {Array(testimonial.rating)
              .fill()
              .map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
