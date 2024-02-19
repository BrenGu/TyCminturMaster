import React, { Component } from "react";
//import { Grid, Dev } from "gymnast";
import { Link } from "react-router-dom";

export default class TurismoDosep extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="container">
          <div className="row mb-3" style={{ paddingTop: "150px" }}>
            <div className="pantallaGrandeGrid">
              <center>
                <img
                  className="imgActividades"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/EneroRecurso.png"
                  alt="Img"
                />
              </center>
              <div className="ZonaDetalle-titulo">
                <h3 style={{ color: `#722789` }}>
                  Disfruta de este finde semana extra largo:
                </h3>
              </div>
              <h5>
                Hacé click en la actividad que prefieras y consulta las fechas y
                los cupos.
              </h5>
              <h4 style={{ paddingTop: `30px`, color: `#722789` }}>
                Viernes 25 de Febrero:
              </h4>
              <center></center>
              <div className="row">
                {/*
                  <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
                  </div>*/}{" "}
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/ebHSxThFp7hmz3o47"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/astroSalinas.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/RisMfn9ke5iuCk147"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/yoga.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/jPf7F2adSwbVF8Eo7"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero17.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/STEmDQyLLz84K6tJ8"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero18.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <h4
                  style={{
                    paddingTop: `30px`,
                    width: `100%`,
                    float: `left`,
                    color: `#722789`,
                  }}
                >
                  Sábado 26 de Febrero:
                </h4>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/WCW7FwyRbEbLUKhEA"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/uvas.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/TreBGCCQ2g7nXWDR9"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/cueva.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/yoSR4NXpshRM5vwX9"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero17.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/K61cCmV3G9eXy5Xj6"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero18.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <h4
                  style={{
                    paddingTop: `30px`,
                    width: `100%`,
                    float: `left`,
                    color: `#722789`,
                  }}
                >
                  Domingo 27 de Febrero:
                </h4>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/UfGBJGdwHwCJuMWn8"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/tomolasta.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/Q2dRzDW6dVYch9pn9"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/arqueologico.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/edHZw8mJ88Ap4wn36"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero17.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/bmUnTFBAZK2oQQva7"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero18.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <h4
                  style={{
                    paddingTop: `30px`,
                    width: `100%`,
                    float: `left`,
                    color: `#722789`,
                  }}
                >
                  Lunes 28 de Febrero:
                </h4>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/a46EZo19fmAtCXWs8"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/cuarzo.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/x8CJY6nh5ZEuKAvF9 "
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/astrosSanFra.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/VczpVTJxNV6TdZ5MA"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero17.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/NrXp2eq8MVyM3iPp7"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 215 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/velero18.png"
                      alt="Img"
                    />
                  </a>
                </div>
                <h4
                  style={{
                    paddingTop: `30px`,
                    width: `100%`,
                    float: `left`,
                    color: `#722789`,
                  }}
                >
                  Martes 1 de Marzo:
                </h4>
                <div className="one-two  column">
                  <a
                    href="https://forms.gle/GQnXevScdoh1kUUz8"
                    className="link-menu"
                  >
                    <img
                      style={{ height: 200, width: 250 }}
                      className="img-fluid"
                      src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/actividades/moneda.png"
                      alt="Img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3" style={{ paddingTop: "0px" }}>
          {/* <div className="pantallaGrande"></div>
          <div className="pantallaChica">
            <div className="ZonaDetalle-titulo ">
              <h3 style={{ color: `#722789` }}>
                INFORMACIÓN PARA PRESTADORES DE SERVICIOS:
              </h3>
            </div>

            <center>
              <div className="row">
                 <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
    </div>
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
          </div>*/}
        </div>
      </div>
    );
  }
}

{
  /** 
import React, { useEffect, useRef } from "react";
import { Consumer } from "../context";

const GridImages = () => {
  const gallery = useRef(null);

  useEffect(() => {
    var links = [
      {
        link: "https://forms.gle/NyAVNHqRsRrZDBs7A",
        nombre: "AstroTurismo",
        foto:
          "http://turismo.sanluis.gov.ar/api-turismo/public/recursos/AstroTurismo2021.jpeg",
      },
      {
        link: "https://forms.gle/kQui56yJXDwFuDD29",
        nombre: "Visitas a ANTU RUCA 🦙",
        foto:
          "http://turismo.sanluis.gov.ar/api-turismo/public/recursos/AstroTurismo2021.jpeg",
      },
      {
        link: "https://forms.gle/z2scZi2AwK5aj9vp8",
        nombre: "Visitas a la Mina de Oro ⛏️",
        foto:
          "http://turismo.sanluis.gov.ar/api-turismo/public/recursos/MinasDeOro2021.jpeg",
      },
      {
        link: "https://forms.gle/srFroWMXvZgHgxNt6",
        nombre: "Trekking Cascada Esmeralda 🌊",
        foto: `https://source.unsplash.com/collection/167880/500x500/?sig=${randomNumber(
          12
        )}`,
      },
      {
        link: "https://forms.gle/Jb8Zyg6kTReP1zKg8",
        nombre: "Trekking Nido del Águila🌊",
        foto: `https://source.unsplash.com/collection/167880/500x500/?sig=${randomNumber(
          12
        )}`,
      },
      {
        link: "https://forms.gle/K6gdKDXjoPx7FAaQ8",
        nombre: "Trekking Salto de la Moneda🌊",
        foto: `https://source.unsplash.com/collection/167880/500x500/?sig=${randomNumber(
          12
        )}`,
      },
      {
        link: "https://forms.gle/LquZiaxMnF56A6hr9",
        nombre: "Caminata de interpretación - MIRADOR DEL PEÑON",
        foto: `https://source.unsplash.com/collection/167880/500x500/?sig=${randomNumber(
          12
        )}`,
      },
    ];

    var cuerpo = links.map((x) => {
      return `
      <a class="item col4 row4" href="${x.link}" target="_blank">
           <img src="${x.foto}" />
           <div class="item__overlay">
            <button>${x.nombre} →</button>
           </div>
         </a>`;
    });

    gallery.current.innerHTML = cuerpo + "";
  }, []);

  const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - 3 + 1) + 3);
  };

  return (
    <React.Fragment>
      {
        <div className="GridImageMain">
          <div className="GridImageTitle">
            <h2>Turismo en vacaciones de invierno</h2>
            <h3>Inscribite en las actividades que prefieras</h3>
          </div>
          <div className="GridImageBody">
            <section class="gallery" ref={gallery}></section>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

GridImages.contextType = Consumer;

export default GridImages;
*/
}
