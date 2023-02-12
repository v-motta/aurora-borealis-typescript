import React from "react";
import Navbar from "../components/Navbar";
import logoAurostars from "../assets/logo-aurostars.png";
import revealAurostars from "../assets/reveal-aurostars.png";
import Footer from "../components/Footer";

const Aurostars = () => {
  return (
    <>
      <Navbar />

      <div className="aurostars gray-bg text-white d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        <div className="text-center mb-4 mb-lg-0 me-lg-5 col-6 col-lg-4">
          <h1 className="fw-bold mb-lg-5">O que é o Aurostars?</h1>
          <p>
            O <span className="fst-italic">Aurostars</span> é o projeto da <span className="fst-italic">Aurora Borealis</span> de agenciamento para Youtubers Virtuais, ou melhor, VTubers.
          </p>
          <p>Em nossa primeira geração, temos 9 VTubers, ou como chamamos, estrelas.</p>
          <p>Role a página para conhecer nossas estrelas!</p>
        </div>
        <img src={logoAurostars} alt="" width="30%" />
      </div>

      <img src={revealAurostars} alt="" className="w-100" />

      <Footer />
    </>
  );
};

export default Aurostars;
