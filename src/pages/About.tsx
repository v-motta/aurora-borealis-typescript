import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselMeowchSection from "../components/CarouselMeowchSection";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="carouselExampleIndicators1" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/loja" target="_blank" rel="noopener noreferrer">
              <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/about-page/slide/slide1.webp" className="d-block w-100" alt="slide 1" loading="lazy" />
            </Link>
          </div>
          <div className="carousel-item">
            <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/about-page/slide/slide2.webp" className="d-block w-100" alt="slide 2" loading="lazy" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="about-text gray-bg text-white text-center px-4 py-5 d-lg-flex flex-lg-column justify-content-lg-center">
        <h1 className="fw-semibold">Sobre nós</h1>
        <p>
          A <span className="fst-italic">Aurora Borealis Studio</span> é uma <span className="fst-italic">startup</span> criativa de produtos, especializando-se no estilo visual em <span>anime</span>.
          Baseada no Brasil, nosso foco é a criação de jogos digitais e conteúdo para a internet. Estamos sempre aprendendo e estudando o mercado, visando evoluir e achar um lugar onde possamos
          brilhar.
        </p>
        <p>
          A ideia da <span className="fst-italic">Aurora Borealis</span> surgiu em 2019, vindo de um grupo de amigos que queriam expor sua paixão: fazer jogos. Participamos de diversas{" "}
          <span>Game Jams</span>, sempre tentando adquirir experiência onde houveram oportunidades, a fim de trabalhar como um time para produzirmos nossos próprios produtos.
        </p>
        <h1 className="fw-semibold mt-5">Direção da empresa</h1>
        <p>
          A direção da Aurora é composta por 3 mentes com anos de experiência com desenvolvimento de jogos e com estudo de mercado no país.
          <br />
          Juntos, decidimos o tipo de empresa que queremos ser, os nosso objetivos e como coordenamos nossa extensa equipe.
          <br />
          Todos os três também auxiliam nos projetos com tarefas e atribuições como arte, música e programação.
        </p>

        <div className="directors d-flex flex-column flex-lg-row justify-content-center mt-5">
          <div className="director d-flex flex-column align-items-center mb-4 mb-lg-0 me-lg-5">
            <div className="round mb-4">
              <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/about-page/directors/gobbo.webp" alt="Caik José Gobbo" className="w-100" />
            </div>
            <h1 className="fw-bold fs-3">Caik Jose Gobbo</h1>
            <span className="fst-italic">Cofundador & Presidente</span>
          </div>
          <div className="director d-flex flex-column align-items-center mb-4 mb-lg-0 mx-lg-5">
            <div className="round mb-4">
              <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/about-page/directors/takahashi.webp" alt="Gabriel Tanke" className="w-100" />
            </div>
            <h1 className="fw-bold fs-3">Gabriel Tanke</h1>
            <span className="fst-italic">Cofundador & Diretor de Tecnologia</span>
          </div>
          <div className="director d-flex flex-column align-items-center ms-lg-5">
            <div className="round mb-4">
              <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/about-page/directors/tanke.webp" alt="Leticia Takahashi" className="w-100" />
            </div>
            <h1 className="fw-bold fs-3">Leticia Takahashi</h1>
            <span className="fst-italic">Cofundadora & Diretora de Arte</span>
          </div>
        </div>
      </div>

      <CarouselMeowchSection />

      <Footer />
    </>
  );
};

export default About;
