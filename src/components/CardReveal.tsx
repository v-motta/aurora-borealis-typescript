import React from "react";
import $ from "jquery";
import starMikorin from "../assets/images/star-mikorin.webp";
import starYukime from "../assets/images/star-yukime.webp";
import starVenith from "../assets/images/star-venith.webp";
import starCarolita from "../assets/images/star-carolita.webp";
import starKuro from "../assets/images/star-kuro.webp";
import starMeiko from "../assets/images/star-meiko.webp";
import { Link } from "react-router-dom";

interface RevealCardProps {
  aurostar: string;
}

const RevealCard = ({ aurostar }: RevealCardProps) => {
  React.useEffect(() => {
    $(`#card-${aurostar}`).on("mouseenter", function () {
      $(`#title-hover-${aurostar}`).removeClass("title-hover");
      $(`.aurostars-${aurostar}`).addClass("opacity-4");
      $(`.aurostars-${aurostar}`).removeClass("hoverOut");
    });

    $(`#card-${aurostar}`).on("mouseleave", function () {
      $(`#title-hover-${aurostar}`).addClass("title-hover");
      $(`.aurostars-${aurostar}`).removeClass("opacity-4");
      $(`.aurostars-${aurostar}`).addClass("hoverOut");
    });
  });

  const whichStar = () => {
    if (aurostar === "mikorin") return starMikorin;
    if (aurostar === "yukime") return starYukime;
    if (aurostar === "venith") return starVenith;
    if (aurostar === "carolita") return starCarolita;
    if (aurostar === "kuro") return starKuro;
    if (aurostar === "meiko") return starMeiko;
  };

  return (
    <div className="d-flex align-items-center inv-border position-relative mx-2">
      <Link to={`/${aurostar}`} className={`link-aurostars-${aurostar} position-relative`} target="_blank">
        <img src={whichStar()} alt={aurostar} className="position-absolute top-0 start-50 translate-middle z-3" />
        <div id={`card-${aurostar}`} className="card-reveal position-relative">
          <div className={`aurostars-${aurostar} position-absolute`}></div>
          <div className={`bg-card-aurostars position-absolute z-n1`}></div>
          <h1 id={`title-hover-${aurostar}`} className="title-hover position-absolute top-50 start-50 translate-middle text-center text-white fw-bold">
            <span className="text-hover text-white">Saiba mais</span>
          </h1>
          <div className={`flag-aurostar-1 position-absolute z-3`}>
            <div className={`flag-aurostar-2 position-absolute`}>
              <h1 className="text-white text-capitalize fs-5 z-3 position-absolute translate-middle-x fw-bold mb-0">{aurostar}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RevealCard;
