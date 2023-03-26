import React from "react";
import darkStar from "../assets/dark-star.png";
import starMiddle from "../assets/star-middle.png";
import lockImg from "../assets/lock.png";
import { Link } from "react-router-dom";

const DefaultCard = () => {
  return (
    <div className="d-flex align-items-center inv-border position-relative mx-2">
      <Link to="" className="pe-none position-relative">
        <img src={darkStar} alt="" className="position-absolute top-0 start-50 translate-middle z-3" />
        <img src={starMiddle} alt="" className="position-absolute top-50 start-50 translate-middle z-3" />
        <img src={lockImg} alt="" className="position-absolute lock start-50 translate-middle z-3" />
        <div id="card-default" className="card-reveal position-relative">
          <div className="aurostars-default position-absolute bg-white"></div>
        </div>
      </Link>
    </div>
  );
};

export default DefaultCard;
