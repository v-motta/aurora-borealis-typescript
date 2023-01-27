import React from "react";
import lovestruckLogo from "../assets/lovestruckLogo.png";
import lovestruck1 from "../assets/lovestruck1.png";
import lovestruck2 from "../assets/slide1.png";
import lovestruck3 from "../assets/lovestruck3.jpg";
import Navbar from "../components/Navbar";
import PinkDivider from "../components/PinkDivider";
import Footer from "../components/Footer";

const Lovestruck = () => {
  return (
    <>
      <Navbar />

      <div className="lovestruck gray-bg text-white d-flex flex-column flex-lg-row align-items-center justify-content-center py-3">
        <div className="text-center me-lg-5 col-10 col-lg-3">
          <h1 className="fw-bold">Lovestruck - Just For Me</h1>
          <p>
            Lovestruck é um jogo de investigação e Simulação com elementos de RPG e Visual Novel
            <br />
            Investigue crimes na pele de Nagisa Shio, uma estudante gênio que tenta desvendar acontecimentos estranhos que ocorrem na escola.
          </p>
        </div>
        <img src={lovestruckLogo} alt="" width="50%" className="ms-lg-5" />
      </div>

      <PinkDivider />

      <img src={lovestruck1} alt="" className="w-100" />

      <PinkDivider />

      <img src={lovestruck2} alt="" className="w-100" />

      <PinkDivider />

      <img src={lovestruck3} alt="" className="w-100" />

      <PinkDivider />

      <Footer />
    </>
  );
};

export default Lovestruck;
