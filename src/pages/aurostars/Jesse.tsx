import React from "react";
import PageAurostar from "../../components/PageAurostar";

import jesseTransparent from "../../assets/imgs/jesse-transparent.webp";

const Jesse = () => {
  return (
    <PageAurostar
      aurostar="Jesse Llum"
      img={ jesseTransparent }
      bgName="jesse"
      loreStart='Jesse Llum é uma estrela que nasceu de um pedido e ganhou consciência após um astronauta à deriva no espaço não desejar morrer sozinho, e isso fez com que ela ganhasse "vida".'
      loreEnd="Ele acabou morrendo, mas ela tinha um propósito a cumprir: Ir para a Terra com o objetivo de fazer companhia para que as pessoas não se sintam solitárias."
      linkTwitter="https://twitter.com/JesseLlum"
      linkYoutube="https://www.youtube.com/@JesseLlum"
      gender="female"
      channelId="UCR3O-Ps1Q6CXrDRdSFvEHtA"
      followers="24k+"
      linkLojaAurostar="https://loja.aurorabstudios.com/jesse/"
    />
  );
};

export default Jesse;
