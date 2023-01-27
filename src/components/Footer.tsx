import React from "react";

const Footer = () => {
  return (
    <div className="gray-bg d-flex flex-column flex-lg-row align-items-center justify-content-lg-between text-white py-5 px-4 position-relative">
      <div className="d-flex align-items-center mb-2 mb-lg-0">
        <span className="fs-5 fst-italic" style={{ color: "#757575" }}>
          &#x00A9; Aurora Borealis 2019 - 2023
        </span>
      </div>
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <span className="me-lg-4 mb-3 mb-lg-0 fs-6">contato@aurorabgs.com</span>
        <div className="social-medias d-flex align-items-center fs-5">
          <a className="text-white" href="https://www.facebook.com/aurorabgs" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook m-2"></i>
          </a>
          <a className="text-white" href="https://twitter.com/aurorabgs" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter m-2"></i>
          </a>
          <a className="text-white" href="https://www.instagram.com/auroraborealisgs/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram m-2"></i>
          </a>
          <a className="text-white" href="https://www.linkedin.com/company/aurora-borealis-studios/mycompany/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin m-2"></i>
          </a>
          <a className="text-white" href="https://www.youtube.com/channel/UCUqhAW-wLJCVx202jFz3T5Q" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube m-2"></i>
          </a>
        </div>
      </div>
      <span className="position-absolute bottom-0 fst-italic" style={{ right: "0.7%", color: "#808080" }}>
        developed by @mottinhadev
      </span>
    </div>
  );
};

export default Footer;
