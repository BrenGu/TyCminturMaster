import React, { Component } from "react";
import { Consumer } from "../../context";
//import axios from "axios";
import Loading from "../../utils/Loading";
import { Helmet } from "react-helmet";

class PContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <div className="PEventos" style={{ paddingTop: "50px" }}>
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <section className="container" style={{ marginTop: "90px" }}>
              <h3 style={{ color: `#722789` }}>Contactanos</h3>
              <p class="section-lead">
                Estamos para ayudarte, a continuación dejamos todos los medios
                disponibles por donde nos podemos comunicar.
              </p>
              <div class="services-grid">
                <div class="service service1">
                  <i class="fas fa-phone"></i>
                  <h6>¡Esperamos tu llamada!</h6>
                  <a href="tel:+5492664423479">
                    <h6>+54 (266) 4423479</h6>
                  </a>
                  <br />
                  <a href="tel:+5492664423957">
                    {" "}
                    <h6>+54 (266) 4423957</h6>{" "}
                  </a>
                </div>

                <div class="service service2">
                  <i class="fas fa-users"></i> <h6>¡Seguinos!</h6>
                  <div className="contacRedes ">
                    <a
                      href="https://www.facebook.com/turismodesanluis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-square" />
                      &nbsp; @TurismodeSanLuis
                    </a>
                    <a
                      href="https://twitter.com/TurismoSanLuis_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter-square" /> &nbsp;
                      @TurismoSanLuis_
                    </a>
                    <a
                      href="https://www.instagram.com/turismo_san_luis/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                      &nbsp; @Turismo_san_luis
                    </a>
                  </div>
                </div>

                <div class="service service3">
                  <i class="fas fa-map-marked-alt"></i>
                  <h6> ¡Te esperamos!</h6>
                  <h5>
                    <a href="https://goo.gl/maps/nMd9gkUAuZJ2">
                      Av. Arturo Illia 35
                    </a>
                  </h5>
                </div>

                <div class="service service4">
                  <i class="fas fa-mail-bulk"></i>
                  <h6> ¡Escribinos!</h6>

                  <a href="mailto:info@turismo.sanluis.gov.ar">
                    info@turismo.sanluis.gov.ar
                  </a>
                  <br />
                  <a href="mailto:contacto@turismo.sanluis.gov.ar">
                    contacto@turismo.sanluis.gov.ar
                  </a>
                </div>
              </div>
            </section>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PContacto.contextType = Consumer;

export default PContacto;
