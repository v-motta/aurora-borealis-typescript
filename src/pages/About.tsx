import React from "react";
import Navbar from "../components/Navbar";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import gobbo from "../assets/gobbo.jpg";
import tanke from "../assets/tanke.jpg";
import takahashi from "../assets/takahashi.jpg";
import Footer from "../components/Footer";
import PinkDivider from "../components/PinkDivider";
import CarouselMeowchSection from "../components/CarouselMeowchSection";

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
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <PinkDivider />

      <div className="about-text gray-bg text-white text-center">
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

        <div className="directors d-flex justify-content-center mt-5">
          <div className="director d-flex flex-column align-items-center me-5">
            <div className="round mb-4">
              <img src={gobbo} alt="Caik José Gobbo" className="w-100" />
            </div>
            <h3 className="fw-bold">Caik Jose Gobbo</h3>
            <span className="fst-italic">CEO & Diretor Criativo</span>
          </div>
          <div className="director d-flex flex-column align-items-center mx-5">
            <div className="round mb-4">
              <img src={tanke} alt="Gabriel Tanke" className="w-100" />
            </div>
            <h3 className="fw-bold">Gabriel Tanke</h3>
            <span className="fst-italic">CTO & Diretor de programação</span>
          </div>
          <div className="director d-flex flex-column align-items-center ms-5">
            <div className="round mb-4">
              <img src={takahashi} alt="Leticia Takahashi" className="w-100" />
            </div>
            <h3 className="fw-bold">Leticia Takahashi</h3>
            <span className="fst-italic">Co-fundadora & Diretora de arte</span>
          </div>
        </div>
      </div>

      <PinkDivider />

      <CarouselMeowchSection />

      <PinkDivider />

      <Footer />
    </>
  );
};

export default About;
