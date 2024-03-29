import React from "react";
import PageAurostar from "../../components/PageAurostar";

import meikoTransparent from "../../assets/imgs/meiko-transparent.webp";

const Meiko = () => {
  return (
    <PageAurostar
      aurostar="Meiko Tadashi"
      img={ meikoTransparent }
      bgName="meiko"
      loreStart="Meiko Tadashi, o Vigilante Espiritual."
      loreEnd="Ele é descendente e herdeiro da linhagem Qilin, e tem como função manter a paz entre o mundo humano e espiritual, especialmente sobre o ciclo de vida, morte e reencarnação das almas. Ele segue buscando por seu irmão biológico desertado, meiko. Meiko parece fechado, mas é amigável e está sempre interessado em conhecer coisas e pessoas novas."
      linkTwitter="https://twitter.com/TadashiMeiko"
      linkYoutube="https://www.youtube.com/@TadashiMeiko"
      gender="male"
      channelId="UCaPMcrMN_1aRkKGsxVuh0pA"
      followers="600+"
      linkLojaAurostar="https://loja.aurorabstudios.com/meiko/"
    />
  );
};

export default Meiko;
