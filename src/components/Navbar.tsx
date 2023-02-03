import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-lg-none" style={{ fontFamily: "IBM Plex Sans", fontStyle: "italic", borderBottom: "1px solid #fff", backgroundColor: "#212121" }} data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-3" to="/">
            <img src={logo} alt="Aurora Borealis logo" width="80" />
          </NavLink>
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
      <nav
        className="navbar navbar-expand-lg d-none d-lg-block"
        style={{ fontFamily: "IBM Plex Sans", fontStyle: "italic", borderBottom: "1px solid #fff", backgroundColor: "#212121" }}
        data-bs-theme="dark"
      >
        <div className="navbar-nav justify-content-center align-items-center">
          <NavLink className="nav-link mx-4" to="/">
            Sobre
          </NavLink>
          <NavLink className="nav-link mx-4" to="/lovestruck">
            Lovestruck
          </NavLink>
          <NavLink className="navbar-brand mx-4" to="/">
            <img src={logo} alt="Aurora Borealis logo" width="80" />
          </NavLink>
          <NavLink className="nav-link mx-4" to="/aurostars">
            Aurostars
          </NavLink>
          <NavLink className="nav-link mx-4" to="/contact">
            FAQ & Contato
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
