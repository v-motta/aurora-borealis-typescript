import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between text-white p-4">
      <div className="d-flex align-items-center">
        <span className="fs-5 fst-italic" style={{ color: "#757575" }}>
          &#x00A9; Aurora Borealis 2019 - 2023
        </span>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-4 fs-6">contato@aurorabgs.com</span>
        <div className="social-medias d-flex align-items-center fs-5">
          <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook m-2"></i>
          </a>
          <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter m-2"></i>
          </a>
          <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram m-2"></i>
          </a>
          <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin m-2"></i>
          </a>
          <a className="text-white" href="http://" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube m-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
