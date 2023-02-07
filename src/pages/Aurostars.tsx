import React from "react";
import Navbar from "../components/Navbar";
import aurostars from "../assets/aurostars.png";
import aurostars2 from "../assets/aurostars2.jpg";
import stars from "../assets/stars.png";
import Footer from "../components/Footer";

const Aurostars = () => {
  return (
    <>
      <Navbar />

      <div className="aurostars gray-bg text-white d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        <div className="text-center mb-4 mb-lg-0 me-lg-5 col-6 col-lg-4">
          <h1 className="fw-bold mb-lg-5">O que é o Aurostars?</h1>
          <p>
            O <span className="fst-italic">Aurostars</span> é o projeto da <span className="fst-italic">Aurora Borealis</span> que consiste na produção de nossos Youtubers Virtuais, ou melhor,
            VTubers.
          </p>
        </div>
        <img src={aurostars} alt="" width="30%" />
      </div>

      <div className="aurostars gray-bg-2 d-flex flex-column align-items-center text-center text-white py-5">
        <div className="col-10 col-lg-12">
          <h1 className="p-3 p-lg-5 fs-2">Parece que as nossas estrelas ainda não estão prontas para serem reveladas.</h1>
          <h1 className="p-3 p-lg-5 fs-2">Volte mais tarde.</h1>
        </div>
        <img src={stars} alt="" className="p-3 p-lg-5 w-100" />
      </div>

      <img src={aurostars2} alt="" className="w-100" />

      <Footer />
    </>
  );
};

export default Aurostars;
