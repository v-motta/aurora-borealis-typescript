import React from "react";
import PageAurostar from "../../components/PageAurostar";

import purpleTransparent from "../../assets/imgs/purple-transparent.webp";

const Purple = () => {
  return (
    <PageAurostar
      aurostar="Purple Moon"
      img={ purpleTransparent }
      bgName="purple"
      loreStart="Purple é uma elfa da lua, que veio à Terra com o objetivo de tornar o mundo um lugar melhor."
      loreEnd="Ela vem para as lives para alegrar as pessoas com sua personalidade divertida e extrovertida! Ela também encanta a todos com sua melodia e seu talento com a voz."
      linkTwitter="https://twitter.com/PurpleMoon_VT"
      linkYoutube="https://www.youtube.com/@PurpleMoon_VT"
      gender="female"
      channelId="UC5UJPQrS8kvpL29c1QqLmDg"
      followers="1.7k+"
      linkLojaAurostar="https://loja.aurorabstudios.com/purple/"
    />
  );
};

export default Purple;
