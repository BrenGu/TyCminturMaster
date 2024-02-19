
import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/Loading";
import NotFound from "../components/NotFound"
import GoogleMap from "../components/subcomponentes/GoogleMap";

class Zona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      dataZona: {},
      localidadesDataZona: [],
      carousel: [],
      latitudes: [],
      longitudes: [],
      links: [],
      atractivos: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    //verificar que el id sea un número > a 0
    //Datos de la Zona
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState({
            dataZona: response.data.data.registros[0],
            loading: false,
            isNotFound: false
          });
        } else {
          this.setState({ loading: false, isNotFound: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //Localidades de la Zona
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/ciudades`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          let lat = []
          let lon = []

          response.data.data.registros.forEach(element => {
            lat.push(element.latitud)
            lon.push(element.longitud)
          });

          self.setState(
            {
              longitudes: lon,
              latitudes: lat,
              localidadesDataZona: response.data.data.registros
            },
            () => {
              //Para armar el Carousel y los Links
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/galeria`,
                responseType: "json",
              })
                .then((response) => {
                  if (response.data.imagenes.length > 0) {
                    //Carousel
                    var activo = false;
                    var fotos = response.data.imagenes.map((a, index) => {
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
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item active"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      }
                    });
                    self.setState({ carousel: fotos });
                    //Links
                    var links = response.data.imagenes.map((a, index) => {
                    
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                
                      //Debe pasar a Link!
                      return (
                        <Link
                          to={`/localidad/${a.idlocalidad}`}
                          key={`img-link-${a.idlocalidad}-${index}`}
                        >
                          <img
                            className="img-fluid"
                            style={{
                              borderColor: `#${self.state.dataZona.color}`,
                            }}
                            src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen}`}
                            title={a.nombre_localidad}
                            alt="Thubmail"
                          />
                        </Link>
                      );
                    });
                    self.setState({ links: links});
                  } else {

                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          );
        } else {
          //Error no se enocntró el id
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getData();
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    //console.log(atractivosData);
    const loading = this.state.loading;
    const isNotFound = this.state.isNotFound;
    const localidades = this.state.localidadesDataZona.map((localidad) => {
      return (
        <Link
          to={`/localidad/${localidad.idciudad}`}
          key={`localidad-${localidad.id}`}
        >
          {localidad.ciudad} /{" "}
        </Link>
      );
    });
    const links = this.state.links;
    const carousel = this.state.carousel;
    return (
      <div className="ZonaSlider">
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        )
        : isNotFound ? (
          <NotFound />
        )
        :(
          <React.Fragment>
            <div className="menu-y-slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">{carousel}</div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
                <div className="slider-home-leyenda">
                  <h1 className="mb-5">Zona Turística</h1>
                </div>
              </div>
            </div>
            <div
              className="ZonaDetalle-titulo"
              style={{ backgroundColor: `#${this.state.dataZona.color}` }}
            >
              <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                {this.state.dataZona.nombre}
              </h3>
            </div>
            <div className="container mb-5">
              <div className="row">
                <div className="col ZonaDetalle-Body">
                  <div id="mapasl">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${this.state.dataZona.mini}`}
                      alt="SL"
                    />
                  </div>
                  <div id="texto">
                    <p>{this.state.dataZona.descripcion}</p>
                    <div>
                      <h5 style={{ color: `#${this.state.dataZona.color}` }}>
                        Localidades de
                      </h5>
                      <h4 style={{ color: `#${this.state.dataZona.color}` }}>
                        {this.state.dataZona.nombre}
                      </h4>
                    </div>
                    <div>
                      <div className="text-links">{localidades}</div>
                      <div>
                        <a
                          className="btn btn-block mt-3 text-white"
                          href={`${process.env.REACT_APP_API_RECURSOS}/folletos/${this.state.dataZona.pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: `#${this.state.dataZona.color}`,
                          }}
                        >
                          <i className="fas fa-file-pdf"></i> Descargar
                          Folletería
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="mapa">
                     
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`}
                      alt="Mapa"
                    />
                     
                     
                    {/*<GoogleMap
                      data={this.state.localidadesDataZona} 
                      lat={this.state.latitudes}
                      lng={this.state.longitudes}
                      zoom="9"
                      gwidth="100%"
                      gheight="400px"
                    />*/}
                  </div>
                  <div id="imagenes">{links}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Zona.contextType = Consumer;

export default Zona;
