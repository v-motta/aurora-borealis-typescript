import React from "react";
import PageAurostar from "../../components/PageAurostar";

import floraTransparent from "../../assets/imgs/flora-transparent.webp";

const Flora = () => {
  return (
    <PageAurostar
      aurostar="Flora Sol'Éclair"
      img={ floraTransparent }
      bgName="flora"
      loreStart="Flora Sol'Éclair é a encarnação viva da Mãe Natureza, viveu entendendo sua essência e como a sua alma e corpo beneficia toda a existência."
      loreEnd="Agora ela vive em busca de conhecer as crianças que vivem entre suas criações, e busca entender seus sentimentos, suas vidas curtas e o que significa ser humano."
      linkTwitter="https://twitter.com/FloraSolEclair"
      linkYoutube="https://www.youtube.com/@FloraSolEclair"
      gender="female"
      channelId="UC_Zn1zfsztt6Vp5NdKJ10uw"
      followers="300+"
      linkLojaAurostar="https://loja.aurorabstudios.com/flora/"
    />
  );
};

export default Flora;
