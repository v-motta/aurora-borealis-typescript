import React from "react";
import Navbar from "../components/Navbar";
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
        <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/lovestruck/logo-lovestruck.webp" alt="lovestruck logo" width="50%" className="ms-lg-5" loading="lazy" />
      </div>

      <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/lovestruck/lovestruck1.webp" alt="lovestruck imagem 1" className="w-100" loading="lazy" />

      <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/lovestruck/lovestruck2.webp" alt="lovestruck imagem 2" className="w-100" loading="lazy" />

      <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/lovestruck/lovestruck3.webp" alt="lovestruck imagem 3" className="w-100" loading="lazy" />

      <Footer />
    </>
  );
};

export default Lovestruck;
