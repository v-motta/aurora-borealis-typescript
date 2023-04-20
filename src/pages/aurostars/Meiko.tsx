import React from "react";
import meikoImg from "https://aurora-imagens.s3.sa-east-1.amazonaws.com/meiko-transparent.webp";
import PageAurostar from "../../components/PageAurostar";

const Meiko = () => {
  return (
    <PageAurostar
      aurostar="Meiko Tadashi"
      img={meikoImg}
      bgName="meiko"
      loreStart="Meiko Tadashi, o Vigilante Espiritual."
      loreEnd="Ele foi revelado na segunda leva de estrelas da AuroStars. Meiko é descendente e herdeiro da linhagem Qilin, e tem como função manter a paz entre o mundo humano e espiritual, especialmente sobre o ciclo de vida, morte e reencarnação das almas. Ele segue buscando por seu irmão biológico desertado, Kuro.
        Meiko parece fechado, mas é amigável e está sempre interessado em conhecer coisas e pessoas novas."
      linkTwitter="https://twitter.com/TadashiMeiko"
      linkYoutube="https://www.youtube.com/@TadashiMeiko"
      gender="male"
      channelId="UCaPMcrMN_1aRkKGsxVuh0pA"
    />
  );
};

export default Meiko;
