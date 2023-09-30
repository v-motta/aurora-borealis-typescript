import React from "react";
import Navbar from "../components/Navbar";
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
        <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/logo-aurostars.webp" alt="aurostars" width="100%" loading="lazy" />
      </div>

      <div className="container-fluid bg-aurostars position-relative w-100 p-5 m-0">
        <div className="d-flex justify-content-center align-items-center w-100 p-5">
          <div className="d-flex flex-column flex-sm-row">
            <div className="d-flex flex-column flex-xl-row">
              <RevealCard aurostar="yukime" />
              <RevealCard aurostar="venith" />
              <RevealCard aurostar="carolita" />
            </div>
            <div className="d-flex flex-column flex-xl-row">
              <RevealCard aurostar="kuro" />
              <RevealCard aurostar="meiko" />
              <DefaultCard />
            </div>
          </div>
          <div className="d-none d-xxxl-flex">
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row position-relative">
          <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/logo.webp" alt="" width={120} id="credit-logo" loading="lazy" />
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
      
      <Footer />
    </>
  );
};

export default Aurostars;
