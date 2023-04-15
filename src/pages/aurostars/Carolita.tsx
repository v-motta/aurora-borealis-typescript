import React from "react";
import carolitaImg from "../../assets/images/carolita-transparent.webp";
import PageAurostar from "../../components/PageAurostar";

const Carolita = () => {
  return (
    <PageAurostar
      aurostar="Carolita Yuuna"
      img={carolitaImg}
      bgName="carolita"
      loreStart="Carolita Yuuna, a mais charmosa gata que você vai conhecer."
      loreEnd="Revelada na segunda leva de estrelas do AuroStars. Carolita é o resultado da fusão de uma garota e um Youkai, um espírito que ficou preso em nosso mundo e foi resgatado pela garotinha, e depois de um tempo, para salvar a vida dessa garota, o espírito decidiu se unir a ela, se tornando uma nova existência.
        Carolita ainda está aprendendo muito sobre o mundo dos humanos, então sua inocência e personalidade cativam todos que a conhecem. Sua aparência felina também é extremamente apelativa, e contribui mais ainda para a sua fofura sem fim."
      linkTwitter="https://twitter.com/CarolitaYuuna"
      linkYoutube="https://www.youtube.com/@CarolitaYuuna"
      gender="female"
      channelId="UCTOlA909tAlU3hKBVOqnuew"
    />
  );
};

export default Carolita;
