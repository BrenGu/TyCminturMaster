import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer class="footer-section">
          <div class="container">
            <div class="footer-content pt-5 pb-5">
              <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">
                    <div class="footer-logo">
                      <Link to="/">
                        <img
                          src={`${process.env.REACT_APP_API}/recursos/logoSanLuis.png`}
                          class="img-fluid"
                          alt="profile card"
                        />
                      </Link>
                    </div>
                    <div class="footer-text">
                      <p>
                        
                      Ministerio de Turismo y Cultura | Provincia de San Luis.
                     
                        <br />
                        Illia 35, San Luis, Argentina.
                      </p>
                    </div>
                    <div class="footer-social-icon">
                      <span>Seguinos</span>
                      <a href="https://walink.co/a8a41d">
                        <i class="fab fa-whatsapp fa-2x"></i>
                      </a>
                      <a href="https://www.facebook.com/turismodesanluis">
                        <i class="fab fa-facebook fa-2x"></i>
                      </a>
                      <a href="https://twitter.com/TurismoSanLuis_">
                        <i class="fab fa-twitter fa-2x"></i>
                      </a>
                      <a href="https://www.instagram.com/turismo_san_luis/">
                        <i class="fab fa-instagram fa-2x"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Explorá</h3>
                    </div>
                    <ul>
                      <li>
                        <Link to="/">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/filtroalojamiento">Hospedaje</Link>
                      </li>
                      <li>
                        <Link to="/listado-guias-agencias-covid/agencias">
                          Agencias de Viaje
                        </Link>
                      </li>
                      <li>
                        <Link to="/listado-guias-agencias-covid/guiasturismo">
                          Guías de Turismo
                        </Link>
                      </li>
                      <li>
                        <Link to="/parques-provinciales">
                          Parques Provinciales
                        </Link>
                      </li>
                      <li>
                        <Link to="/caminos-pintorescos">
                          Caminos Pintorescos
                        </Link>
                      </li>
                      <li>
                        <Link to="/tirolesas">Tirolesas</Link>
                      </li>
                      <li>
                        <Link to="/Pcontacto">Contactanos</Link>
                      </li>
                      <li>
                        <Link to="/novedades">Prensa Turistica</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Subcribite</h3>
                    </div>
                    <div class="footer-text mb-25">
                      <p>
                        Dejanos tu mail y te contaremos todas las novedades de
                        nuestra provincia.
                      </p>
                    </div>
                    <div class="subscribe-form">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="correo@electronico.com"
                        />
                        <button>
                          <i class="fab fa-telegram-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="imgFooter">
                    <a target="blank" href="https://www.sanluis.gov.ar/">
                      <img
                        src={`${process.env.REACT_APP_API}/recursos/logo4.png`}
                        class=""
                        alt="profile card"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div class="copyright-text">
                    <p>
                    Sitio oficial delMinisterio de Turismo y Cultura.
                    </p>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div class="footer-menu">
                    <ul>
                      <li>
                        <Link to="/">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/filtroalojamiento">Hospedaje</Link>
                      </li>
                      <li>
                        <Link to="/novedades">Novedades</Link>
                      </li>
                      <li>
                        <Link to="/Pcontacto">Contactanos</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
