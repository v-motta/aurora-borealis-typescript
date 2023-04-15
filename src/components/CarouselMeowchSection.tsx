import React from "react";
import meowch from "../assets/images/meowch.webp";
import directors1 from "../assets/images/directors1.webp";
import directors2 from "../assets/images/directors2.webp";
import team1 from "../assets/images/team1.webp";
import team2 from "../assets/images/team2.webp";
import team3 from "../assets/images/team3.webp";

const CarouselMeowchSection = () => {
  return (
    <div className="award gray-bg-2 text-white d-flex flex-column flex-lg-row justify-content-center p-5 d-lg-flex flex-lg-row align-items-lg-center">
      <div className="pe-lg-5 me-lg-5">
        <h1 className="pb-4 fw-semibold">Magalu Gamejam - 2° lugar &#x1F3C6;</h1>
        <h2 className="pb-2 fs-3">Big Festival - Agosto de 2022</h2>
        <p className="pb-2 pb-lg-4">
          A <span className="fst-italic">Aurora Borealis Studio</span> recebeu o prêmio de 2° lugar na categoria Melhor Estúdio Brasileiro, com o projeto Meowch.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="https://aurora-borealis-gs.itch.io/meowsh" target="_blank" rel="noopener noreferrer">
            <button className="button-meowch bg-transparent py-3 px-4 fst-italic mb-5 mb-lg-0">Conheça o Meowch</button>
          </a>
        </div>
      </div>
      <div id="carouselExampleIndicators2" className="carousel slide col-lg-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={meowch} className="d-block w-100" alt="meowch" />
          </div>
          <div className="carousel-item">
            <img src={team1} className="d-block w-100" alt="time foto 1" />
          </div>
          <div className="carousel-item">
            <img src={directors1} className="d-block w-100" alt="diretores foto 1" />
          </div>
          <div className="carousel-item">
            <img src={directors2} className="d-block w-100" alt="diretores foto 2" />
          </div>
          <div className="carousel-item">
            <img src={team2} className="d-block w-100" alt="time foto 2" />
          </div>
          <div className="carousel-item">
            <img src={team3} className="d-block w-100" alt="time foto 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselMeowchSection;
