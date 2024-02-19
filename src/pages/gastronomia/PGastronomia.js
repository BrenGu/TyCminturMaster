import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import GoogleMap from "../../components/subcomponentes/GoogleMap";
import MaxImage from "../../components/subcomponentes/MaxImage";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound";

class PGastronomia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      id: 0,
      dataAtractivo: {
        color: "722789",
      },
      carousel: [],
      fotos: [],
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
    //Datos del Atractivo
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/gastronomia/${self.state.id}`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState(
            {
              dataAtractivo: response.data.data.registros[0],
            },
            () => {
              //Imagenes del Atractivo
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/gastronomia/${self.state.id}/imagenes`,
                responseType: "json",
              })
                .then((response) => {
                  if (response.data.data.count > 0) {
                    let activo = false;
                    let carousel = response.data.data.registros.map(
                      (a, index) => {
                        if (a.imagen === "default.jpg") {
                          return null;
                        }
                        let estilo = {
                          backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        };
                        if (!activo) {
                          activo = true;
                          return (
                            <div
                              key={`caro-${index}`}
                              className="carousel-item active"
                              style={estilo}
                            >
                              <h5 className="pd-top">
                                {self.state.dataAtractivo.nombre}
                              </h5>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={`caro-${index}`}
                              className="carousel-item"
                              style={estilo}
                            >
                              <h5 className="pd-top">
                                {self.state.dataAtractivo.nombre}
                              </h5>
                            </div>
                          );
                        }
                      }
                    );
                    let fotos = response.data.data.registros.map((a, index) => {
                      return (
                        <img
                          key={`img-atr-${a.id}`}
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen}`}
                          alt="Img"
                          onClick={(e) => {
                            this.verImagen(e);
                          }}
                        />
                      );
                    });
                    self.setState({
                      carousel: carousel,
                      fotos: fotos,
                      loading: false,
                      isNotFound: false,
                    });
                  } else {
                    //Error no se enocntró el id
                    self.setState({
                      loading: false,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          );
        } else {
          //Error no se encontró el id
          self.setState({
            loading: false,
            isNotFound: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //self.setState({ loading: false });
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
    return (
      <div className="Atractivo" style={{ paddingTop: "110px" }}>
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : isNotFound ? (
          <NotFound />
        ) : (
          <React.Fragment>
            <div
              className="ZonaLocalidad-titulo"
              style={{ backgroundColor: `#722789` }}
            >
              <h3 style={{ color: `#722789` }}>
                {this.state.dataAtractivo.nombre}
              </h3>
            </div>

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="Atractivo-data">
                    <div className="atractivo-texto">
                      {this.state.dataAtractivo.descripcionHTML != null ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: this.state.dataAtractivo.descripcionHTML,
                          }}
                        ></p>
                      ) : (
                        <p>{this.state.dataAtractivo.descripcion}</p>
                      )}
                      {/*this.state.dataAtractivo.descripcion*/}
                    </div>
                    <div className="atractivo-fotos">{fotos}</div>
                    <div className="atractivo-ubicacion">
                      <span>
                        <i className="fas fa-map-marker" /> Ubicación
                      </span>
                      <div id="mapa-atr" style={{ width: "100%" }}>
                        <GoogleMap
                          lat={this.state.dataAtractivo.latitud}
                          lng={this.state.dataAtractivo.longitud}
                          zoom="10"
                          gwidth="100%"
                          gheight="400px"
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center p-2"
                        style={{ width: "100%" }}
                      >
                        <span>
                          {this.state.dataAtractivo.latitud}{" "}
                          {this.state.dataAtractivo.longitud}
                        </span>
                      </div>
                    </div>

                    <div className="atractivo-info">
                      {this.state.dataAtractivo.lunes !== "" ||
                      this.state.dataAtractivo.martes !== "" ||
                      this.state.dataAtractivo.miercoles !== "" ||
                      this.state.dataAtractivo.jueves !== "" ||
                      this.state.dataAtractivo.viernes !== "" ||
                      this.state.dataAtractivo.sabado !== "" ||
                      this.state.dataAtractivo.domingo !== "" ? (
                        <span>
                          <i className="fas fa-clock"></i>
                          <strong>Horarios </strong>
                        </span>
                      ) : (
                        ""
                      )}

                      <ul>
                        {this.state.dataAtractivo.lunes !== "" ? (
                          <li>
                            {" "}
                            <strong>Lunes:</strong>{" "}
                            {this.state.dataAtractivo.lunes}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.martes !== "" ? (
                          <li>
                            <strong>Martes:</strong>{" "}
                            {this.state.dataAtractivo.martes}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.miercoles !== "" ? (
                          <li>
                            <strong>Miércoles:</strong>{" "}
                            {this.state.dataAtractivo.miercoles}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.jueves !== "" ? (
                          <li>
                            <strong>Jueves: </strong>
                            {this.state.dataAtractivo.jueves}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.viernes !== "" ? (
                          <li>
                            <strong>Viernes: </strong>
                            {this.state.dataAtractivo.viernes}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.sabado !== "" ? (
                          <li>
                            <strong>Sábado:</strong>{" "}
                            {this.state.dataAtractivo.sabado}
                          </li>
                        ) : (
                          ""
                        )}

                        {this.state.dataAtractivo.domingo !== "" ? (
                          <li>
                            <strong>Domingo:</strong>{" "}
                            {this.state.dataAtractivo.domingo}
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>

                      {this.state.dataAtractivo.domicilio !== "" ||
                      this.state.dataAtractivo.telefono !== "" ||
                      this.state.dataAtractivo.mail !== "" ||
                      this.state.dataAtractivo.web ? (
                        <span>
                          <i className="fas fa-user" />{" "}
                          <strong>Contacto</strong>
                        </span>
                      ) : (
                        ""
                      )}

                      {this.state.dataAtractivo.domicilio !== "" ? (
                        <span className="pr-4">
                          <strong>Domicilio:</strong>{" "}
                          {this.state.dataAtractivo.domicilio}
                        </span>
                      ) : (
                        ""
                      )}

                      {this.state.dataAtractivo.telefono !== "" ? (
                        <span className="pr-4">
                          <strong> Tel./Cel.: </strong> +54 9{" "}
                          {this.state.dataAtractivo.telefono}
                        </span>
                      ) : (
                        ""
                      )}   


                      {this.state.dataAtractivo.mail !== "" ? (
                        <span className="pr-4">
                          <strong>Email:</strong>{" "}
                          {this.state.dataAtractivo.mail}
                        </span>
                      ) : (
                        ""
                      )}

                      {this.state.dataAtractivo.web !== "" ? (
                        <span className="pr-4">
                          <strong> Web:</strong> {this.state.dataAtractivo.web}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MaxImage
              src={this.state.img.src}
              visible={this.state.img.visible}
              onClose={this.closeImg}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

PGastronomia.contextType = Consumer;

export default PGastronomia;
