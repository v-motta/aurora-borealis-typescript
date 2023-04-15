import React from "react";
import venithImg from "../../assets/images/venith-transparent.webp";
import PageAurostar from "../../components/PageAurostar";

const Venith = () => {
  return (
    <PageAurostar
      aurostar="Screaming Venith"
      img={venithImg}
      bgName="venith"
      loreStart="Screaming Venith, ou como é mais conhecida: Veni!"
      loreEnd="Ela foi revelada na primeira leva de estrelas da AuroStars. Apesar dos chifres e da cauda venenosa, Veni é muito dócil e querida. Porém, ela gosta de comer algo muito específico: Pernas! Então tome cuidado com as suas! Também é a criadora da Manticore Express, o seu próprio serviço de entregas!"
      linkTwitter="https://twitter.com/ScreamingVenith"
      linkYoutube="https://www.youtube.com/@ScreamingVenith"
      gender="female"
      channelId="UCqqYCfixhEcGzlV3uezcc4w"
    />
  );
};

export default Venith;
