import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" style={{ fontFamily: "IBM Plex Sans", fontStyle: "italic" }} data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{ marginLeft: "6rem" }} to="/">
          <img src={logo} alt="Aurora Borealis logo" width="90" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link mx-4" to="/">
              Sobre
            </NavLink>
            <NavLink className="nav-link mx-4" to="/lovestruck">
              Lovestruck
            </NavLink>
            <NavLink className="nav-link mx-4" to="/aurostars">
              Aurostars
            </NavLink>
            <NavLink className="nav-link mx-4" to="/contact">
              FAQ & Contato
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
