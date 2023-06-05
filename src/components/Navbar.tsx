import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ fontFamily: "IBM Plex Sans", fontStyle: "italic", borderBottom: "1px solid #fff", backgroundColor: "#212121" }} data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-4 ms-lg-5" to="/">
          <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/logo.webp" alt="Aurora Borealis logo" height="40" loading="lazy" />
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
        <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link mx-4" to="/">
              Sobre
            </NavLink>
            <NavLink className="nav-link mx-4" to="/aurostars">
              Aurostars
            </NavLink>
            <a href="https://loja.aurorabgs.com/" className="nav-link mx-4" target="_blank" rel="noreferrer">
              Loja
            </a>
            <NavLink className="nav-link mx-4" to="/lovestruck">
              Lovestruck
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
