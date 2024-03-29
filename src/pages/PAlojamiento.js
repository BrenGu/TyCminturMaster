import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import GoogleMap from "../components/subcomponentes/GoogleMap";
import MaxImage from "../components/subcomponentes/MaxImageAlojamientos";
import NotFound from "../components/NotFound";
import Loading from "../utils/Loading";

const Pild = (props) => (
  <span
    className="rounded-lg"
    style={{
      height: "23px",
      minWidth: "100px",
      backgroundColor: "violet",
      margin: "5px",
      color: "white",
      paddingLeft: "2px",
      paddingRight: "2px",
    }}
  >
    <center>{props.text}</center>
  </span>
);

class PAlojamiento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      id: 0,
      dataAlojamiento: {},
      fotos: [],
      src: [],
      servicios: [],
      tarifas: [],
      img: {
        src: "",
        visible: false,
      },
    };
    this.getData = this.getData.bind(this);
    this.verImagen = this.verImagen.bind(this);
    this.closeImg = this.closeImg.bind(this);
  }

  verImagen(e) {
    this.setState({
      img: {
        src: e.target.src,
        visible: true,
      },
    });
  }

  closeImg() {
    this.setState({
      img: {
        src: "",
        visible: false,
      },
    });
  }

  getData() {
    var token = this.context.token;
    var self = this;
    //Datos del Alojamiento
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/guia/${self.state.id}`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState(
            {
              dataAlojamiento: response.data.data.registros[0],
            },
            () => {
              //Imagenes del Alojamiento
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/guia/${self.state.id}/imagenes`,
                responseType: "json",
              })
                .then((response) => {
                  if (response.data.data.count > 0) {
                    let fotos = response.data.data.registros.map((a, index) => {
                      return (
                        <img
                          key={`img-atr-${a.id}`}
                          className="img-fluid img"
                          src={`${process.env.REACT_APP_API_RECURSOS}/imagenes/${a.imagen}`}
                          alt="Img"
                          onClick={(e) => {
                            this.verImagen(e);
                          }}
                        />
                      );
                    });
                    let src = response.data.data.registros.map((a, index) => {
                      let sr = `${process.env.REACT_APP_API_RECURSOS}/imagenes/${a.imagen}`;
                      return sr;
                    });
                    console.log(src);

                    self.setState({
                      fotos: fotos,
                      src: src, // variable para pasar las iamgenes a MaxImage
                    });
                  } else {
                    //Error no se enocntró el id
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
              //Servicios del Alojamiento
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/guia/${self.state.id}/servicios`,
                responseType: "json",
              })
                .then((response) => {
                  if (response.data.data.count > 0) {
                    self.setState({
                      servicios: response.data.data.registros,
                    });
                  } else {
                    //Error no se enocntró el id
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
              //Tarifas de l Alojamiento
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/guia/${self.state.id}/tarifas`,
                responseType: "json",
              })
                .then((response) => {
                  if (response.data.data.count > 0) {
                    self.setState({
                      tarifas: response.data.data.registros,
                    });
                  } else {
                    //Error no se enocntró el id
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
              self.setState({ loading: false, isNotFound: false });
            }
          );
          console.log(this.state.dataAlojamiento);
        } else {
          //Error no se encontró el id
          self.setState({ isNotFound: true, loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        id: this.props.match.params.id,
      },
      () => {
        this.getData();
      }
    );
  }

  render() {
    const loading = this.state.loading;
    const isNotFound = this.state.isNotFound;
    const fotos = this.state.fotos;
    const pilds = this.state.servicios.map((servicio) => {
      return (
        <Pild key={`servicio-${servicio.id}`} text={servicio.descripcion} />
      );
    });

    /*
    const tarifas = this.state.tarifas.map((tarifa) => {
      return (
        <span
          key={`tarifa-${tarifa.id}`}
          className="bg-dark text-white p-1 rounded"
        >
          {tarifa.descripcion} - $ {tarifa.importe}
        </span>
      );
    });*/
    return (
      <div className="Alojamiento mb-5">
        {this.state.loading ? (
          <div>
            <Loading margins="150px" />
          </div>
        ) : isNotFound ? (
          <NotFound />
        ) : (
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col" style={{ marginTop: "50px" }}>
                  <h3 style={{ color: `#722789` }}>
                    {this.state.dataAlojamiento.nombre}
                  </h3>
                  <hr></hr>
                  <div
                    className="Alojamiento-data"
                    style={
                      this.state.dataAlojamiento.adhiereDosep === "1"
                        ? { marginTop: "0px" }
                        : {}
                    }
                  >
                    <div className="alojamiento-texto">
                      {this.state.dataAlojamiento.descripcion}
                    </div>

                    <div className="alojamiento-fotos">{fotos}</div>
                    <div className="alojamiento-ubicacion">
                      <span>
                        <i className="fas fa-map-marker"></i> Ubicación -{" "}
                        {this.state.dataAlojamiento.nombreciudad}
                        {this.state.dataAlojamiento.ciudad}
                      </span>
                      <div id="mapa-atr" style={{ width: "100%" }}>
                        <GoogleMap
                          lat={this.state.dataAlojamiento.latitud}
                          lng={this.state.dataAlojamiento.longitud}
                          zoom="16"
                          gwidth="100%"
                          gheight="400px"
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center p-2"
                        style={{ width: "100%" }}
                      >
                        <span>
                          {this.state.dataAlojamiento.latitud}{" "}
                          {this.state.dataAlojamiento.longitud}
                        </span>
                      </div>
                    </div>
                    <div className="alojamiento-info">
                      {this.state.dataAlojamiento.estado.length != 0 ? (
                        <span>
                          <i className="fas  fa-id-card"></i>Estado:{" "}
                          {this.state.dataAlojamiento.estado}
                        </span>
                      ) : (
                        " "
                      )}

                      {pilds.length != 0 ? (
                        <div>
                          <span>
                            <i className="fas fa-clock"></i> Servicios
                          </span>
                          <div className="d-flex flex-row flex-wrap">
                            {pilds}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/** {
                                                tarifas.length
                                                ?
                                                <React.Fragment>
                                                    <span><i className="fas fa-dollar-sign"></i> Tarifas</span>
                                                    {tarifas}
                                                </React.Fragment>
                                                :
                                                ""
                                            }*/}

                      <span>
                        <i className="fas fa-user"></i> Contacto
                      </span>
                      {this.state.dataAlojamiento.domicilio !== "" ? (
                        <span className="pr-4">
                          Domicilio: {this.state.dataAlojamiento.domicilio}
                        </span>
                      ) : (
                        ""
                      )}
                      {this.state.dataAlojamiento.telefono !== "" ? (
                        <span className="pr-4">
                          Tel./Cel.:{" "}
                          <a
                            href={`tel:+549${this.state.dataAlojamiento.telefono}`}
                          >
                            +54 9 {this.state.dataAlojamiento.telefono}
                          </a>
                        </span>
                      ) : (
                        ""
                      )}

                      {this.state.dataAlojamiento.mail !== "" ? (
                        <span className="pr-4">
                          EMail:
                          <a
                            href={`mailto:${this.state.dataAlojamiento.mail}?Subject=Consulta`}
                          >
                            {this.state.dataAlojamiento.mail}
                          </a>
                        </span>
                      ) : (
                        ""
                      )}
                      {this.state.dataAlojamiento.web !== null ? (
                        <span className="pr-4">
                          Web:
                          <a
                            href={`http://${this.state.dataAlojamiento.web}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {this.state.dataAlojamiento.web}
                          </a>
                        </span>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {this.state.img.visible ? (
                <MaxImage
                  id={this.state.img.src}
                  src={this.state.src}
                  visible={this.state.img.visible}
                  onClose={this.closeImg}
                />
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PAlojamiento.contextType = Consumer;

export default PAlojamiento;
