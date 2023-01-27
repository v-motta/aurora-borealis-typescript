import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ fontFamily: "IBM Plex Sans", fontStyle: "italic", borderBottom: "1px solid #fff", backgroundColor: "#212121" }} data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to="/">
          <img src={logo} alt="Aurora Borealis logo" width="80" />
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
