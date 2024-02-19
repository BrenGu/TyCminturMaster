import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/Loading";

class PZonaCreer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataZona: {},
      localidadesDataZona: [],
      carousel: [],
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
      /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
      responseType: "json",
    })
      .then((response) => {
        console.log("zonaas");
        console.log(response.data.data.registros[0].nombre);
        if (response.data.data.count > 0) {
          self.setState({
            dataZona: response.data.data.registros[0],
          });
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
    //Localidades de la Zona
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url:
        `${process.env.REACT_APP_API}/atractivo/'Creer "Camino de la Fe de ` +
        this.props.match.params.zona +
        `"'`,
      responseType: "json",
    })
      .then((response) => {
        console.log(this.props.match.params.zona);
        console.log(response.data.data.count);
        if (response.data.data.count > 0) {
          self.setState(
            {
              localidadesDataZona: response.data.data.registros,
            },
            () => {
              //Para armar el Carousel y los Links
              axios({
                method: "get",
                headers: {
                  Authorization: token,
                },
                url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/creer/'Creer "Camino de La Fe Circuito del Morro"'`,
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
                      /*
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                */
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
                            title={a.nombre_atractivo}
                            alt="Thubmail"
                          />
                        </Link>
                      );
                    });
                    self.setState({ links: links });
                  } else {
                    console.log("Nada de nada!");
                  }
                  this.setState({ loading: false });
                })
                .catch((error) => {
                  console.log(error);
                  this.setState({ loading: false });
                });
            }
          );
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
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
    const localidades = this.state.localidadesDataZona.map((atrac) => {
      let descripcion = "";
      if (atrac.descripcion.length > 395) {
        descripcion = atrac.descripcion.substr(0, 295) + "...";
      } else {
        descripcion = atrac.descripcion;
      }
      let indice = Math.floor(Math.random() * atrac.imagenes.length);

      return (
        <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
          <div class="blog-item">
            <a href="#">
              <div class="icon">
                <img
                  className=""
                  src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[0].imagen}`}
                  alt="Img"
                />
              </div>
              <div class="content">
                <div class="title" style={{ color: "#722789" }}>
                  {atrac.nombre} <br></br>
                  <span class="blog-date">{atrac.localidad}</span>
                </div>
                <div class="rounded"></div>

                <p> {descripcion}</p>
              </div>

              <div class="item-arrow">
                <i
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                  style={{ color: "#e36838" }}
                ></i>
              </div>
            </a>
          </div>{" "}
          <hr></hr>
        </Link>
      );
    });
    return (
      <div className="Zona">
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="container mb-5" style={{ marginTop: "50px" }}>
              <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                Postas religiosas de <br></br> {this.state.dataZona.nombre}
              </h3>
              <div className="row">
                <div className="col ZonaDetalle-Body">
                  <div></div>
                  <div id="mapasl">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${this.state.dataZona.mini}`}
                      alt="SL"
                    />
                  </div>
                  <div id="texto">
                    <p style={{ fontSize: "20px" }}>
                      {this.state.dataZona.descripcionCreer}
                    </p>
                  </div>
                  <div id="mapa">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`}
                      alt="Mapa"
                    />
                  </div>
                </div>
              </div>
              <div className="container" style={{ marginTop: "" }}>
                {localidades}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PZonaCreer.contextType = Consumer;
export default PZonaCreer;
