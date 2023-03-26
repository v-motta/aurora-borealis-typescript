import React from "react";
import mikorinImg from "../../assets/mikorin-transparent.png";
import PageAurostar from "../../components/PageAurostar";

const Mikorin = () => {
  return (
    <PageAurostar
      aurostar="Mikorin"
      img={mikorinImg}
      bgName="mikorin"
      loreStart="Nossa querida mico-leão-dourada, conhecida como Mikorin!"
      loreEnd="Ela foi revelada na primeira leva de estrelas da AuroStars. Apesar da sua aparência infantil, Mikorin é a primeira ministra da Chimpangéia. Ela viaja pelo espaço e pelas dimensões, conhecendo os planetas que existem em nosso cosmo, juntamente com sua trupe de micos!"
      linkTwitter="https://twitter.com/MikorinAS"
      linkYoutube="https://www.youtube.com/@MikorinAS"
      gender="female"
    />
  );
};

export default Mikorin;
