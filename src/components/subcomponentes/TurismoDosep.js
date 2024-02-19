import React, { Component } from "react";
//import { Grid, Dev } from "gymnast";
import { Link } from "react-router-dom";

export default class TurismoDosep extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="container">
          <div className="row mb-3" style={{ paddingTop: "150px" }}>
            <div className="pantallaGrande">
              <center>
                <img
                  style={{ height: 250, width: 350 }}
                  className="img-fluid"
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/LogoDosep.png`}
                  alt="Img"
                />
                <div className="ZonaDetalle-titulo">
                  <h3 style={{ color: `#722789` }}>
                    INFORMACIÓN PARA AFILIADOS:
                  </h3>
                </div>
              </center>

              <center>
                <div className="row">
                  {/*  <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
    </div>*/}
                  <div className="one-three column">
                    <Link to="/agencias-turismo-dosep" className="link-menu">
                      <img
                        style={{ height: 300, width: 550 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/AGENCIASDOSEP.png`}
                        alt="Img"
                      />
                    </Link>
                  </div>

                  <center>
                    <div className="one-three  column">
                      <Link
                        to={{
                          pathname: "adheridos-turismo-Dosep", // en lugar de 1 sería tu variable
                          categoria: "alojamientos",
                        }}
                        className="link-menu"
                      >
                        <img
                          style={{ height: 300, width: 550 }}
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/ALOJAMIENTODOSEP.png`}
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="one-two  column">
                      <Link
                        to={{
                          pathname: "adheridos-turismo-Dosep", // en lugar de 1 sería tu variable
                          categoria: "gastronomia",
                        }}
                        className="link-menu"
                      >
                        <img
                          style={{ height: 300, width: 550 }}
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/GASTRONOMIADOSEP.png`}
                          alt="Img"
                        />
                      </Link>
                    </div>
                  </center>
                  <div className="row">
                    <div className="one column">
                      <Link to="/coronavirus" className="link-menu">
                        <img
                          style={{ height: 270, width: "97%" }}
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_WEB.jpg`}
                          alt="Img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="row mb-3" style={{ paddingTop: "0px" }}>
          <div className="pantallaChica">
            <center>
              <img
                style={{ height: 100, width: 150 }}
                className="img-fluid"
                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/LogoDosep.png`}
                alt="Img"
              />
              <div className="ZonaDetalle-titulo">
                <h3 style={{ color: `#722789` }}>
                  INFORMACIÓN PARA AFILIADOS:
                </h3>
              </div>
            </center>
            <center>
              <div className="one-three column">
                <Link to="/agencias-turismo-dosep" className="link-menu">
                  <img
                    style={{ height: 200, width: 400 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/AGENCIASDOSEP.png`}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="one-three column">
                <Link
                  to={{
                    pathname: "adheridos-turismo-Dosep", // en lugar de 1 sería tu variable
                    categoria: "gastronomia",
                  }}
                  className="link-menu"
                >
                  <img
                    style={{ height: 200, width: 400 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/GASTRONOMIADOSEP.png`}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="one-three column">
                <Link
                  to={{
                    pathname: "adheridos-turismo-Dosep", // en lugar de 1 sería tu variable
                    categoria: "alojamientos",
                  }}
                  className="link-menu"
                >
                  <img
                    style={{ height: 200, width: 400 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/ALOJAMIENTODOSEP.png`}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="row">
                <div className="one-third column">
                  <Link to="/coronavirus" className="link-menu">
                    <img
                      style={{ height: 100, width: "90%" }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_WEB.jpg`}
                      alt="Img"
                    />
                  </Link>
                </div>
              </div>
            </center>
          </div>
          <div className="pantallaGrande">
            <div className="ZonaDetalle-titulo ">
              <h3 style={{ color: `#722789` }}>
                INFORMACIÓN PARA PRESTADORES DE SERVICIOS:
              </h3>
            </div>

            <center>
              <div className="row">
                {/*  <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
    </div>*/}
                <div className="one-three column">
                  <a
                    href="http://turismo.sanluis.gov.ar/dosep-turismo/Bases_Condiciones.pdf"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 300, width: 550 }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/BASESYCONDICIONESDOSEP.png`}
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-three  column">
                  <a
                    href="https://forms.gle/wK9pGbWuNNTc2Z848"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 300, width: 550 }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/ADHERITEDOSEP.png`}
                      alt="Img"
                    />
                  </a>
                </div>
              </div>
            </center>
          </div>
          <div className="pantallaChica">
            <div className="ZonaDetalle-titulo ">
              <h3 style={{ color: `#722789` }}>
                INFORMACIÓN PARA PRESTADORES DE SERVICIOS:
              </h3>
            </div>

            <center>
              <div className="row">
                {/*  <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
    </div>*/}
                <div className="one-two column">
                  <a
                    href="http://turismo.sanluis.gov.ar/dosep-turismo/Bases_Condiciones.pdf"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 400 }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/BASESYCONDICIONESDOSEP.png`}
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/wK9pGbWuNNTc2Z848"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 400 }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/ADHERITEDOSEP.png`}
                      alt="Img"
                    />
                  </a>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
