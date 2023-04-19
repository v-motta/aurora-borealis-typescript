import React from "react";
import darkStar from "../assets/images/dark-star.webp";
import starMiddle from "../assets/images/star-middle.webp";
import lockImg from "../assets/images/lock.webp";
import { Link } from "react-router-dom";

const DefaultCard = () => {
  return (
    <div className="d-flex align-items-center inv-border position-relative mx-2">
      <Link to="" className="pe-none position-relative">
        <img src={darkStar} alt="estrela negra" className="position-absolute top-0 start-50 translate-middle z-3" />
        <img src={starMiddle} alt="estrela do meio" className="position-absolute top-50 start-50 translate-middle z-3" />
        <img src={lockImg} alt="cadeado" className="position-absolute lock start-50 translate-middle z-3" />
        <div id="card-default" className="card-reveal position-relative">
          <div className="aurostars-default position-absolute bg-white"></div>
        </div>
      </Link>
    </div>
  );
};

export default DefaultCard;
