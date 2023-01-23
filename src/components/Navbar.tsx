import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Sobre
            </NavLink>
            <NavLink className="nav-link" to="/lovestruck">
              Lovestruck
            </NavLink>
            <NavLink className="nav-link" to="/aurostars">
              Aurostars
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              FAQ & Contato
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
