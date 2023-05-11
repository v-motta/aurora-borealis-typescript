import React from "react";

interface PageLojaAurostarProps {
    aurostar: string;
    linkLojaAurostar: string;
}

const LojaAurostar = ({aurostar, linkLojaAurostar}: PageLojaAurostarProps) => {
  return (
    <div className="position-absolute bottom-0 end-0 mt-3">
        <a href={linkLojaAurostar} className="btn btn-dark p-3 px-4 mb-3 me-4" target="_blank" rel="noreferrer">Conheça os produtos {aurostar} <i className="bi bi-bag-fill ms-3"></i></a>
    </div>
  );
};

export default LojaAurostar;
