import React from "react";
import PageAurostar from "../../components/PageAurostar";

import torajoTransparent from "../../assets/imgs/torajo-transparent.webp";

const Torajo = () => {
  return (
    <PageAurostar
      aurostar="Torajo"
      img={ torajoTransparent }
      bgName="torajo"
      loreStart="Torajo é um personagem que quando era criança sonhava em criar conteúdo para milhares pessoas."
      loreEnd="Ele deseja alegrar o dia do seu público e se dedica em animar o dia delas contando histórias da sua vida. Torajo gosta de contar sobre sua história e também sobre sua luta contra seu antagonista, Morajo."
      linkTwitter="https://twitter.com/Torajo_yt"
      linkYoutube="https://www.youtube.com/@Torajo"
      gender="male"
      channelId="UCEUsbKNdilM6Z-HMJDpo-yQ"
      followers="5k+"
      linkLojaAurostar="https://loja.aurorabstudios.com/torajo/"
    />
  );
};

export default Torajo;
