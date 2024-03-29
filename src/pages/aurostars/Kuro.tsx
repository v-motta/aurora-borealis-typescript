import React from "react";
import PageAurostar from "../../components/PageAurostar";

import kuroTransparent from "../../assets/imgs/kuro-transparent.webp";

const Kuro = () => {
  return (
    <PageAurostar
      aurostar="Kuro Tsugomori"
      img={ kuroTransparent }
      bgName="kuro"
      loreStart="Kuro Tsugomori, o Sacerdote do Luar."
      loreEnd="Ele é filho adotivo e herdeiro de uma família renomada de sacerdotes, com o poder de reencarnar almas! Porém, todos que ele reencarna se tornam pequenas ovelhas... Kuro é tímido, porém amigável e acolhedor. Uma curiosidade: Kuro também é o irmão biológico de Meiko!"
      linkTwitter="https://twitter.com/TsugomoriKuro"
      linkYoutube="https://www.youtube.com/@KuroTsugomori"
      gender="male"
      channelId="UCTttsxJjs1TCGNne921RoiA"
      followers="200+"
      linkLojaAurostar="https://loja.aurorabstudios.com/kuro/"
    />
  );
};

export default Kuro;
