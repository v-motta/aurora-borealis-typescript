import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageAurostarProps {
  img: string;
  bgName: string;
  aurostar: string;
  loreStart: string;
  loreEnd: string;
  linkTwitter: string;
  linkYoutube: string;
}

const PageAurostar = ({ img, bgName, aurostar, loreStart, loreEnd, linkTwitter, linkYoutube }: PageAurostarProps) => {
  return (
    <>
      <Navbar />
      <div className={`bg-screen-${bgName} container-fluid w-100 p-5`}>
        <div className="row flex-column flex-lg-row justify-content-center align-items-center w-100 m-0">
          <div className="col-12 col-lg-5">
            <img src={img} alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center fw-bold text-white mt-3 mt-lg-0 mb-2 mb-lg-5">{aurostar}</h1>
            <p className="text-center text-white mb-2 mb-lg-5">
              {loreStart}
              <br />
              {loreEnd}
            </p>
            <h2 className="text-center fw-bold text-white fs-5 mt-3">Acompanhe a {aurostar} nas redes sociais!</h2>
            <div className="d-flex justify-content-center w-100">
              <a href={`${linkTwitter}`} className="mx-4" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter text-white" style={{ fontSize: "5rem" }}></i>
              </a>
              <a href={linkYoutube} className="mx-4" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube text-white" style={{ fontSize: "5rem" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageAurostar;
