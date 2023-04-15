import React from "react";
import kuroImg from "../../assets/kuro-transparent.png";
import PageAurostar from "../../components/PageAurostar";

const Kuro = () => {
  return (
    <PageAurostar
      aurostar="Kuro Tsugomori"
      img={kuroImg}
      bgName="kuro"
      loreStart="Kuro Tsugomori, o Sacerdote do Luar, ou apenas Kuro."
      loreEnd="Ele foi revelado na segunda leva de estrelas da AuroStars. Kuro é filho adotivo e herdeiro de uma família renomada de sacerdotes, com o poder de reencarnar almas! Porém, todos que ele reencarna se tornam pequenas ovelhas...
      Kuro é tímido, porém amigável e acolhedor. Uma curiosidade: Kuro também é o irmão biológico de Meiko!"
      linkTwitter="https://twitter.com/TsugomoriKuro"
      linkYoutube="https://www.youtube.com/@KuroTsugomori"
      gender="male"
    />
  );
};

export default Kuro;