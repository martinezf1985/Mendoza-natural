// NewBanner.tsx
import React from 'react';

const NewBanner: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-cabecalho px-5 py-3">
        <div className="container">
          <a href="/" title="Inicio">
            <img
              src=""
              width="80"
              height="80"
              className="d-block d-sm-none"
              alt="Brasão"
            />
            <img
              src="assets/img/BRASÃO-PG-colorido-HORIZONTAL-1-01.png"
              height="80"
              className="d-sm-block d-none"
              alt="Brasão"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="historia.html" className="nav-link text-center">
                  História
                </a>
              </li>
              <li className="nav-item">
                <a href="turismo.html" className="nav-link text-center">
                  Turismo
                </a>
              </li>
              <li className="nav-item">
                <a href="events.html" className="nav-link text-center">
                  Eventos
                </a>
              </li>
              <li className="nav-item">
                <a href="datas.html" className="nav-link text-center">
                  Dados e Características
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="justify-content-center position-relative overflow-hidden text-center bg-light main-banner d-flex flex-column align-items-center mb-5">
        <div className="p-lg-5 mx-auto my-5 d-flex flex-column align-items-center">
          <h1 className="main-title">PRAIA GRANDE</h1>
          <p className="font-weight-normal text-light">
            Conheça Praia Grande a cidade que mais cresce no litoral
          </p>
        </div>
      </div>
    </header>
  );
};

export default NewBanner;
