import React, { Component } from "react";
import { Consumer } from "../../context";
//import axios from "axios";
import Loading from "../../utils/Loading";
import { Link } from "react-router-dom";

class GastronomiaDosep extends Component {
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
      <div className="PEventos">
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3">
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    Gastronómicos Adheridos - Turismo Dosep 2021
                  </h3>
                </div>
                <Link to={`/gastronomia/97`}>
                  <div className="row mb-5">
                    <div className="col">
                      <div className="atractivo-full-item">
                        <div className="imagen">
                          <span
                            style={{
                              backgroundColor: ``,
                            }}
                          >
                            Cortaderas{" "}
                          </span>
                          <img
                            className="img-fluid"
                            src={`http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_97_20190625152027.jpg`}
                            alt="Img"
                          />
                        </div>
                        <div className="titulo" style={{ width: "500px" }}>
                          <h3>Las Marías Restaurante{"      "}</h3>
                        </div>
                        <div className="body">
                          <p
                            className="text-dark mb-2"
                            style={{ height: "200px" }}
                          >
                            Salón rustico con la mejor vista de las sierras en
                            villa elena, cortaderas- Amplia carta con gran
                            variedad de platos elaborados con productos
                            regionales de inmejorable calidad, naturales y de
                            producción artesanal. Tenemos una excelente calidad
                            en parrilla, la mejor trucha serrana y unos cabritos
                            mas que sabrosos, que harán de su visita a Las
                            Marias, la conjunción perfecta entre al placer de la
                            buena mesa y el de disfrutar de la naturaleza a
                            simple vista.{" "}
                          </p>
                          <span
                            className="btn-novedades"
                            style={{
                              backgroundColor: ``,
                            }}
                          >
                            Leer <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

GastronomiaDosep.contextType = Consumer;

export default GastronomiaDosep;
