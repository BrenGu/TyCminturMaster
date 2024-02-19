import React, { Component } from "react";
//import { Grid, Dev } from "gymnast";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import axios from "axios";

export default class Mapas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataZona: {},
    };

    this.descargar = this.descargar.bind(this);
  }

  descargar(id) {
    var token = this.context.token;
    //verificar que el id sea un número > a 0
    //Datos de la Zona
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/zona/${id}`,
      /*
          auth: {
              username: 'janedoe',
              password: 's00pers3cret'
          },
          */
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState({
            dataZona: response.data.data.registros[0],
          });
          window.open(
            `${process.env.REACT_APP_API_RECURSOS}/folletos/${this.state.dataZona.pdf}`,
            "_blank"
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

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
  }

  render() {
    return (
      <ReactWOW animation="fadeIn" data-wow-delay="10s">
        <div>
          <div className="Recorridos">
            <center>
              <div className="reco-titulo">
                <br />
                <br />
                <br />
                <h2 className=" TituloMapas">Descargar</h2>
                <h4 className=" TituloMapas">Mapas Turístico</h4>
              </div>
            </center>
            <div className="reco-container" style={{ paddingBottom: "45px" }}>
              {/*  <a
                onClick={() => this.descargar("4")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="sierras">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_4_20181020005103.jpg`}
                    className="thumbnail"
                    alt=""
                  />

                  {/*   <div>
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
                 

                  <div className="cuadro-titulo">
                    <p>Sierras</p>
                    <p>Centrales</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("5")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="norte">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/norte.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Norte</p>
                    <p>Puntano</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("8")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="costa">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/costa.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Costa de los</p>
                    <p>Comechingones</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("1")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="valle">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_1_20181020005650.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Valle del Conlara</p>
                    <p>y San Martín</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("9")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="villa">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_9_20181020005804.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Villa Mercedes</p>
                    <p>y El Morro</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("10")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="huellas">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/huellas.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Huellas</p>
                    <p>Del Pasado</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("11")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="llanura">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/llanura.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Llanura</p>
                    <p>Sureña</p>
                  </div>
                </div>
              </a>
              <a
                onClick={() => this.descargar("12")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="termas">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_12_20181020005540.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Termas y</p>
                    <p>Salinas</p>
                  </div>
                </div>
              </a> */}
              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa ciudad sl + rutas 2024.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="sierras">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_160_20181024100258.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Ciudad de</p>
                    <p>San Luis</p>
                  </div>
                </div>
              </a>
              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa mercedes + rutas 2020.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="villa">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_43_20190104092708.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Villa</p>
                    <p>Mercedes</p>
                  </div>
                </div>
              </a>
              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa el trapiche + rutas 2020.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="sierras">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_1_20190104103706.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>El</p>
                    <p>Trapiche</p>
                  </div>
                </div>
              </a>
              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa merlo + rutas 2024.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="costa">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_100_20181023110853.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Villa de</p>
                    <p> Merlo</p>
                  </div>
                </div>
              </a>

              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa potrero + rutas 2024.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="sierras">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_242_20190208093202.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>Potrero de</p>
                    <p>los Funes</p>
                  </div>
                </div>
              </a>
              <a
                href={`${process.env.REACT_APP_API_RECURSOS}/mapas-folletos/final mapa san fransiscol + rutas 2024.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="norte">
                  <div className="cuadro-color" />
                  <img
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/0_143_20181024091656.jpg`}
                    className="thumbnail"
                    alt=""
                  />
                  <div className="cuadro-titulo">
                    <p>San</p>
                    <p>Francisco</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </ReactWOW>
    );
  }
}
