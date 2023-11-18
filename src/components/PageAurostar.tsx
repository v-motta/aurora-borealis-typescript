import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubscriberCount from "./SubscriberCount";
import { Link, useLocation } from "react-router-dom";
import LojaAurostar from "./LojaAurostar";

interface PageAurostarProps {
  img: string;
  bgName: string;
  aurostar: string;
  loreStart: string;
  loreEnd: string;
  linkTwitter: string;
  linkYoutube: string;
  gender: string;
  channelId: string;
  followers: string;
  linkLojaAurostar: string;
}

const PageAurostar = ({ img, bgName, aurostar, loreStart, loreEnd, linkTwitter, linkYoutube, gender, channelId, followers, linkLojaAurostar }: PageAurostarProps) => {
  const [yukimeColor, setYukimeColor] = useState("gray");
  const [carolitaColor, setCarolitaColor] = useState("gray");
  const [kuroColor, setKuroColor] = useState("gray");
  const [meikoColor, setMeikoColor] = useState("gray");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/yukime") {
      setYukimeColor("color");
    } else if (location.pathname === "/carolita") {
      setCarolitaColor("color");
    } else if (location.pathname === "/kuro") {
      setKuroColor("color");
    } else if (location.pathname === "/meiko") {
      setMeikoColor("color");
    }
  }, [location]);
  
  return (
    <>
      <Navbar />
      <div className={`bg-screen-${bgName} container-fluid w-100 p-5 position-relative`}>
          <div className="aurostars-portrait d-flex flex-column justify-content-end align-items-center position-absolute top-0 end-0 mt-3">
            <div>
            <Link to="/yukime">
              <img src={`https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/portrait/yukime-${yukimeColor}.webp`} width={60} alt="yukime" loading="lazy" style={{borderRadius: "50px"}} />
            </Link>
            <Link to="/carolita">
              <img src={`https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/portrait/carolita-${carolitaColor}.webp`} width={60} alt="carolita" loading="lazy" style={{borderRadius: "50px"}} />
            </Link>
            <Link to="/kuro">
              <img src={`https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/portrait/kuro-${kuroColor}.webp`} width={60} alt="kuro" loading="lazy" style={{borderRadius: "50px"}} />
            </Link>
            <Link to="/meiko">
              <img src={`https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/portrait/meiko-${meikoColor}.webp`} width={60} alt="meiko" loading="lazy" style={{borderRadius: "50px"}} />
            </Link>
            </div>
            <div>
              <p className="text-white mt-2">Navegue entre as estrelas</p>
            </div>
          </div>
            <LojaAurostar aurostar={aurostar} linkLojaAurostar={linkLojaAurostar} />
        <div className="row flex-column flex-lg-row justify-content-center align-items-center w-100 m-0">
          <div className="col-12 col-lg-5">
            <img src={img} alt={aurostar} className="w-100" loading="lazy" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center fw-bold text-white mt-3 mt-lg-0 mb-2 mb-lg-5">{aurostar}</h1>
            <p className="text-center text-white mb-2 mb-lg-5">
              {loreStart}
              <br />
              {loreEnd}
            </p>
            <h2 className="text-center fw-bold text-white fs-5 mt-3 mb-4">Acompanhe {gender === "male" ? "o" : "a"} {aurostar} nas redes sociais!</h2>
            <div className="d-flex justify-content-center w-100">
              <div className="d-flex flex-column align-items-center">
                <a href={`${linkTwitter}`} className="mx-4" target="_blank" rel="noreferrer">
                  <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/icons/twitter.svg" alt="twitter logo" width={80} loading="lazy" />
                </a>
                <div className="d-flex flex-column align-items-center">
                    <p className="text-white fw-bold fs-5 m-0">{followers}</p>
                    <p className="text-white fw-bold fs-5 m-0">seguidores</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href={linkYoutube} className="mx-4" target="_blank" rel="noreferrer">
                  <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/aurostars/icons/youtube.svg" alt="youtube logo" width={80} loading="lazy" />
                </a>
                <SubscriberCount channelId={channelId} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageAurostar;
