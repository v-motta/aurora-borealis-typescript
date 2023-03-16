import React from "react";
import venithImg from "../../assets/venith-transparent.png";
import PageAurostar from "../../components/PageAurostar";

const Venith = () => {
  return (
    <PageAurostar
      aurostar="Screaming Venith"
      img={venithImg}
      bgName="venith"
      loreStart="Screaming Venith, ou como é mais conhecida: Veni!"
      loreEnd="Ela foi a terceira a ser revelada da nossa Aurora. Apesar dos chifres e da cauda venenosa, ela é muito dócil e querida. Porém, Veni gosta de comer algo muito específico: pernas! Então tome cuidado com as suas!
        Também é a criadora da Manticore Express, o seu próprio serviço de entregas!"
      linkTwitter="https://twitter.com/ScreamingVenith"
      linkYoutube="https://www.youtube.com/@ScreamingVenith"
    />
  );
};

export default Venith;
