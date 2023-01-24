import React from "react";
import meowch from "../assets/meowch.png";
import teamPic from "../assets/teamPic.jpg";
import directorsPic from "../assets/directorsPic.jpg";
import gobboPic from "../assets/gobboPic.jpg";
import tankePic from "../assets/tankePic.jpg";
import takahashiPic from "../assets/takahashiPic.jpg";
import teamPic2 from "../assets/teamPic2.jpg";
import teamPic3 from "../assets/teamPic3.jpg";

const CarouselMeowchSection = () => {
  return (
    <div className="award text-white d-flex justify-content-center p-5">
      <div className="pe-5 me-5">
        <h1 className="pb-4">Magalu Gamejam - 2° lugar &#x1F3C6;</h1>
        <h3 className="pb-2">Big Festival - Agosto de 2022</h3>
        <p className="pb-4">
          A <span className="fst-italic">Aurora Borealis Studio</span> recebeu o prêmio de 2° lugar na categoria Melhor Estúdio Brasileiro, com o projeto Meowch.
        </p>
        <a href="https://aurora-borealis-gs.itch.io/meowsh" target="_blank" rel="noopener noreferrer">
          <button className="button-meowch py-3 px-4 fst-italic">Conheça o Meowch</button>
        </a>
      </div>
      <div id="carouselExampleIndicators2" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={meowch} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={teamPic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={directorsPic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={gobboPic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={tankePic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={takahashiPic} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={teamPic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={teamPic3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMeowchSection;
