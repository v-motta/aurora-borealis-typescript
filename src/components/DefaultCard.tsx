import React from "react";
import darkStar from "https://aurora-imagens.s3.sa-east-1.amazonaws.com/dark-star.webp";
import starMiddle from "https://aurora-imagens.s3.sa-east-1.amazonaws.com/star-middle.webp";
import lockImg from "https://aurora-imagens.s3.sa-east-1.amazonaws.com/lock.webp";
import { Link } from "react-router-dom";

const DefaultCard = () => {
  return (
    <div className="d-flex align-items-center inv-border position-relative mx-2">
      <Link to="" className="pe-none position-relative">
        <img src={darkStar} alt="estrela negra" className="position-absolute top-0 start-50 translate-middle z-3" loading="lazy" />
        <img src={starMiddle} alt="estrela do meio" className="position-absolute top-50 start-50 translate-middle z-3" loading="lazy" />
        <img src={lockImg} alt="cadeado" className="position-absolute lock start-50 translate-middle z-3" loading="lazy" />
        <div id="card-default" className="card-reveal position-relative">
          <div className="aurostars-default position-absolute bg-white"></div>
        </div>
      </Link>
    </div>
  );
};

export default DefaultCard;
