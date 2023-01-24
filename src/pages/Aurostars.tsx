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

      <div className="aurostars gray-bg text-white d-flex justify-content-center align-items-center" style={{ padding: "10rem 8rem" }}>
        <div className="text-center me-5" style={{ width: "35%" }}>
          <h1 className="fw-bold mb-5">O que é o Aurostars?</h1>
          <p>
            O <span className="fst-italic">Aurostars</span> é o projeto da <span className="fst-italic">Aurora Borealis</span> que consiste na produção de nossos Youtubers Virtuais, ou melhor,
            VTubers.
          </p>
        </div>
        <img src={aurostars} alt="" width="30%" />
      </div>

      <PinkDivider />

      <div className="aurostars gray-bg d-flex flex-column align-items-center text-center text-white py-5">
        <div style={{ width: "40%" }}>
          <h1 className="p-5 fs-2">Parece que as nossas estrelas ainda não estão prontas para serem reveladas.</h1>
          <h1 className="p-5 fs-2">Volte mais tarde.</h1>
        </div>
        <img src={stars} alt="" className="p-5 w-75" />
      </div>

      <PinkDivider />

      <Footer />
    </>
  );
};

export default Aurostars;
