import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound"
import ItemCardCiudades from "../../components/ItemCardCiudades"

class ListadoAgenciasDosep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
      sanluis: [],
      juanakoslay: [],
      carpinteria: [],
      volcan: [],
      potrero: [],
      laCarolina: [],
      villamercedes: [],
      merlo: [],
      punta: [],
      tipo: "agencias",
    };
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/agencias/adhiereDosep`,
      responseType: "json",
    })
      .then((response) => {
        var sanluis = [],
          juanakoslay = [],
          carpinteria = [],
          volcan = [],
          potrero = [],
          laCarolina = [],
          villamercedes = [],
          merlo = [],
          punta = [];
        var i = 0;
        for (i = 0; i < response.data.data.registros.length; i++) {
          if (response.data.data.registros[i].ciudad === "Ciudad de San Luis") {
            sanluis.push(response.data.data.registros[i]);
          } else if (response.data.data.registros[i].ciudad === "Juana Koslay")
            juanakoslay.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "La Carolina")
            laCarolina.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "Carpintería")
            carpinteria.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "El Volcán")
            volcan.push(response.data.data.registros[i]);
          else if (
            response.data.data.registros[i].ciudad === "Potrero de Los Funes"
          )
            potrero.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "Villa de Merlo")
            merlo.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "La Punta")
            punta.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "Villa Mercedes")
            villamercedes.push(response.data.data.registros[i]);
        }
        self.setState({
          loading: false,
          isNotFound: false,
          sanluis: sanluis,
          juanakoslay: juanakoslay,
          carpinteria: carpinteria,
          volcan: volcan,
          potrero: potrero,
          laCarolina: laCarolina,
          villamercedes: villamercedes,
          merlo: merlo,
          punta: punta,
        });
      })
      .catch((error) => {
        self.setState({
          loading: false,
          isNotFound: true,
        });
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    const isNotFound = this.state.isNotFound;
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : isNotFound ? (
          <NotFound />
        ) : (
          <React.Fragment>
            <div className="container mb-5" />
            <div className="container">
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    Agencias de Viajes Adheridas - Turismo Dosep 2021
                  </h3>
                </div>
                {this.state.sanluis.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="terrazas"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="http://agenciasanluis.com/wp-content/uploads/2017/09/terrazas.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#nueva_zona"
                        aria-expanded="false"
                        aria-controls="nueva_zona"
                        style={{
                          backgroundColor: "#cb6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        San Luis
                      </button>
                      <div className="collapse" id="nueva_zona">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#cb6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <ItemCardCiudades data={this.state.sanluis} tipo={this.state.tipo}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                {this.state.merlo.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="merlo"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/merlo.jpeg`}
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Merlo"
                        aria-expanded="false"
                        aria-controls="Merlo"
                        style={{
                          backgroundColor: "#336535",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Merlo
                      </button>
                      <div className="collapse" id="Merlo">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#336535" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info" />
                                <ItemCardCiudades data={this.state.merlo} tipo={this.state.tipo}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                {this.state.punta.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="merlo"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="https://cypnoticias.com.ar/wp-content/uploads/2018/01/parque-astron%C3%B3mico-la-punta-san-luis.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Punta"
                        aria-expanded="false"
                        aria-controls="Punta"
                        style={{
                          backgroundColor: "#A3BD31",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        La Punta
                      </button>
                      <div className="collapse" id="Punta">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#A3BD31" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info" />
                                <ItemCardCiudades data={this.state.punta} tipo={this.state.tipo}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                {this.state.laCarolina.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="laCarolina"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/LaCarolina.jpeg`}
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#laCarolina"
                        aria-expanded="false"
                        aria-controls="laCarolina"
                        style={{
                          backgroundColor: "#cb6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        La Carolina
                      </button>
                      <div className="collapse" id="laCarolina">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#cb6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info" />
                                <ItemCardCiudades data={this.state.laCarolina} tipo={this.state.tipo}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                {this.state.carpinteria.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="carpinteria"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/carpinteria.jpeg`}
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Carpintería"
                        aria-expanded="false"
                        aria-controls="Carpintería"
                        style={{
                          backgroundColor: "#336535",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Carpintería
                      </button>
                      <div className="collapse" id="Carpintería">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#336535" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                <ItemCardCiudades data={this.state.carpinteria} tipo={this.state.tipo}/>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                {this.state.juanakoslay.length !== 0 ? (
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="terrazas"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/JuanaKoslay.jpg`}
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#juanakoslay"
                        aria-expanded="false"
                        aria-controls="juanakoslay"
                        style={{
                          backgroundColor: "#cb6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Juana Koslay
                      </button>
                      <div className="collapse" id="juanakoslay">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#cb6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                <ItemCardCiudades data={this.state.juanakoslay} tipo={this.state.tipo}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </div>
                ) : (
                  ""
                )}
                 {
                    this.state.villamercedes.length !== 0 ? (
                      <div className="row mb-3">
                        <div className="col">
                          <img
                            alt="villamercedes"
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                            src="https://www.welcomeargentina.com/paseos/citytour-villa-mercedes/villa-mercedes-4.jpg"

                          />
                          <button
                            className="btn btn-dark btn-block"
                            type="button"
                            data-toggle="collapse"
                            data-target="#villa_mercedes"
                            aria-expanded="false"
                            aria-controls="villa_mercedes"
                            style={{ 
                              backgroundColor: "#e5b449",
                              height: "50px",
                              fontSize: "1.2rem",
                              lineHeight: "1.8rem",
                              fontWeight: "700"}}
                          >
                            Villa Mercedes
                          </button>
                          <div className="collapse" id="villa_mercedes">
                            <div className="card card-body">
                              <div className="row">
                                <div
                                  className="col-md-10"
                                  style={{color: "#e5b449"}}
                                >
                                  <div className="form-group">
                                    <div className="atractivo-info">
                                      <ItemCardCiudades data={this.state.villamercedes} tipo={this.state.tipo}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                ) : (
                  ""
                ) 
                }
              </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

ListadoAgenciasDosep.contextType = Consumer;

export default ListadoAgenciasDosep;
