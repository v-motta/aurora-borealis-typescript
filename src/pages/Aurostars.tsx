import React from "react";
import Navbar from "../components/Navbar";
import aurostars from "../assets/aurostars.png";
import stars from "../assets/stars.png";
import PinkDivider from "../components/PinkDivider";
import Footer from "../components/Footer";

const Aurostars = () => {
  return (
    <>
      <Navbar />

      <div className="gray-bg text-white d-flex justify-content-center align-items-center p-5">
        <div className="w-50">
          <h1>O que é o Aurostars?</h1>
          <p>
            O <span className="fst-italic">Aurostars</span> é o projeto da <span className="fst-italic">Aurora Borealis</span> que consiste na produção de nossos Youtubers Virtuais, ou melhor,
            VTubers.
          </p>
        </div>
        <img src={aurostars} alt="" width="30%" />
      </div>

      <PinkDivider />

      <div className="gray-bg text-center text-white p-5">
        <h1 className="p-5">Parece que as nossas estrelas ainda não estão prontas para serem reveladas.</h1>
        <h1 className="p-5">Volte mais tarde.</h1>
        <img src={stars} alt="" className="p-5" />
      </div>

      <PinkDivider />

      <Footer />
    </>
  );
};

export default Aurostars;
