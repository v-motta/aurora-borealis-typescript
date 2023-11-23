import React from "react";
import PageAurostar from "../../components/PageAurostar";

import yukimeTransparent from "../../assets/imgs/yukime-transparent.webp";

const Yukime = () => {
  return (
    <PageAurostar
      aurostar="Yukime Stella"
      img={ yukimeTransparent }
      bgName="yukime"
      loreStart="A Husky Siberiano mais fofa das galáxias, Yukime Stella, mais conhecida como Yukime!"
      loreEnd="Ela é uma Office Lady e mora no andar de cima de um fliperama. Embora seu nome remeta ao frio, ela tem uma personalidade muito calorosa, quando não está no trabalho, passa o seu tempo jogando."
      linkTwitter="https://twitter.com/yukimestella"
      linkYoutube="https://www.youtube.com/@YukimeStella"
      gender="female"
      channelId="UCAsGSw_t9wMu8JWRwMG7lFQ"
      followers="600+"
      linkLojaAurostar="https://loja.aurorabstudios.com/yukime/"
    />
  );
};

export default Yukime;
