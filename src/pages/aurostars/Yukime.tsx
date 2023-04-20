import React from "react";
import yukimeImg from "https://aurora-imagens.s3.sa-east-1.amazonaws.com/yukime-transparent.webp";
import PageAurostar from "../../components/PageAurostar";

const Yukime = () => {
  return (
    <PageAurostar
      aurostar="Yukime Stella"
      img={yukimeImg}
      bgName="yukime"
      loreStart="A Husky Siberiano mais fofa das galáxias, Yukime Stella, mais conhecida como Yukime!"
      loreEnd="Ela foi revelada na primeira leva de estrelas da AuroStars.. Yukime é uma Office Lady e mora no andar de cima de um fliperama. Embora seu nome remeta ao frio, ela tem uma personalidade muito calorosa! Além do trabalho como OL, ela também trabalha depois do expediente fazendo lives, jogando e conversando com os espectadores."
      linkTwitter="https://twitter.com/yukimestella"
      linkYoutube="https://www.youtube.com/@YukimeStella"
      gender="female"
      channelId="UCAsGSw_t9wMu8JWRwMG7lFQ"
    />
  );
};

export default Yukime;
