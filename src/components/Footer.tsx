import React from "react";

const Footer = () => {
  return (
    <div className="gray-bg d-flex flex-column flex-lg-row align-items-center justify-content-lg-between text-white py-5 px-4 position-relative">
      <div className="d-flex align-items-center mb-2 mb-lg-0">
        <span className="fs-5 fst-italic">&#x00A9; Aurora Borealis 2019 - 2023</span>
      </div>
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <span className="me-lg-4 mb-3 mb-lg-0 fs-6">contato@aurorabgs.com</span>
        <div className="social-medias d-flex align-items-center fs-5">
          <a className="text-white" href="https://twitter.com/aurorabgs" aria-label="Twitter da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter m-2"></i>
          </a>
          <a className="text-white" href="https://discord.gg/thuEGx2y2Q" aria-label="Discord da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-discord m-2"></i>
          </a>
          <a className="text-white" href="https://www.instagram.com/auroraborealisgs/" aria-label="Instagram da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram m-2"></i>
          </a>
          <a className="text-white" href="https://www.youtube.com/channel/UCUqhAW-wLJCVx202jFz3T5Q" aria-label="Youtube da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube m-2"></i>
          </a>
          <a className="text-white" href="https://www.linkedin.com/company/aurora-borealis-studios/mycompany/" aria-label="Linkedin da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin m-2"></i>
          </a>
          <a className="text-white" href="https://www.facebook.com/aurorabgs" aria-label="Facebook da Aurora Borealis" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook m-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
