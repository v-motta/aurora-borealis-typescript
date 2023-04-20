import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubscriberCount from "./SubscriberCount";

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
}

const PageAurostar = ({ img, bgName, aurostar, loreStart, loreEnd, linkTwitter, linkYoutube, gender, channelId }: PageAurostarProps) => {
  return (
    <>
      <Navbar />
      <div className={`bg-screen-${bgName} container-fluid w-100 p-5`}>
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
                  <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/twitter.svg" alt="twitter logo" width={80} loading="lazy" />
                </a>
                <p className="text-white fw-bold fs-5 m-0">WIP</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href={linkYoutube} className="mx-4" target="_blank" rel="noreferrer">
                  <img src="https://aurora-imagens.s3.sa-east-1.amazonaws.com/youtube.svg" alt="youtube logo" width={80} loading="lazy" />
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
