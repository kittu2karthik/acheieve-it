import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../assets/images/Logo/Icon.svg";
import "./Header.css";

function Header() {
  return (
    <section className="section-header">
      <header className="header">
        <Logo />
        <NavLinks />
      </header>
    </section>
  );
}

export default Header;

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={Icon} alt="Acheiva It Logo" />
        <p>ACHIEVA IT</p>
      </Link>
    </div>
  );
}

function NavLinks() {
  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/">Jobs</Link>
    </nav>
  );
}
