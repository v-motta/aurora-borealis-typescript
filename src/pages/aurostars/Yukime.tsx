import React from "react";
import yukimeImg from "../../assets/yukime-transparent.png";
import PageAurostar from "../../components/PageAurostar";

const Yukime = () => {
  return (
    <PageAurostar
      aurostar="Yukime Stella"
      img={yukimeImg}
      bgName="yukime"
      loreStart="A Husky Siberiano mais fofa das galáxias, Yukime Stella, mais conhecida como Yukime!"
      loreEnd="Ela foi a segunda estrela revelada da nossa Aurora. Yukime é uma Office Lady e mora no andar de cima de um fliperama.
        Embora seu nome remeta ao frio, ela tem uma personalidade muito calorosa! Além do trabalho como OL, ela também trabalha depois do expediente fazendo lives, jogando e conversando com os espectadores."
      linkTwitter="https://twitter.com/yukimestella"
      linkYoutube="https://www.youtube.com/@YukimeStella"
    />
  );
};

export default Yukime;
