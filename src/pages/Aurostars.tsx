import React from "react";
import Navbar from "../components/Navbar";
import logoAurostars from "../assets/logo-aurostars-4.png";
import auroraLogo from "../assets/logo.png";
import Footer from "../components/Footer";
import RevealCard from "../components/CardReveal";
import DefaultCard from "../components/DefaultCard";

const Aurostars = () => {
  return (
    <>
      <Navbar />

      <div className="aurostars gray-bg text-white d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        <div className="text-center mb-4 mb-lg-0 me-lg-5 col-10 col-lg-4">
          <h1 className="fw-bold mb-lg-5">O que é o Aurostars?</h1>
          <p>
            O <span className="fst-italic">Aurostars</span> é o projeto da <span className="fst-italic">Aurora Borealis</span> de agenciamento para Youtubers Virtuais, ou melhor, VTubers.
          </p>
          <p>Em nossa primeira geração, temos 9 VTubers, ou como chamamos, estrelas.</p>
          <p>Role a página para conhecer nossas estrelas!</p>
        </div>
        <img src={logoAurostars} alt="" width="100%" />
      </div>

      <div className="container-fluid bg-aurostars position-relative w-100 p-5 m-0">
        <div className="d-flex justify-content-center align-items-center w-100 p-5">
          <div className="d-flex flex-column flex-sm-row">
            <RevealCard aurostar="mikorin" />
            <RevealCard aurostar="yukime" />
            <RevealCard aurostar="venith" />
          </div>
          <div className="d-none d-xxl-flex">
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
          </div>
          <div className="d-none d-xxxl-flex">
            <DefaultCard />
            <DefaultCard />
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row position-relative">
          <img src={auroraLogo} alt="" width={120} id="credit-logo" />
          <h1
            id="credit-aurostar"
            style={{ fontSize: "14px" }}
            className="d-flex flex-column flex-sm-row justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-uppercase text-white fw-bold text-center w-100"
          >
            Aurora Borealis Studios
            <span className="mx-2" style={{ fontSize: "12px" }}>
              ●
            </span>
            Aurostars agência de VTuber
          </h1>
        </div>
      </div>

      {/* <img src={revealAurostars} alt="" className="w-100" /> */}

      <Footer />
    </>
  );
};

export default Aurostars;
