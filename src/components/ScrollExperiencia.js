import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Consumer } from "../context";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class ScrollExperiencia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="tituloScrollActividades">
            <center>
              <img
                className=""
                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/experimenta.png`}
                alt="Img"
                style={{ width: "17%" }}
              />{" "}
            </center>
          </div>
          <div class="grid-containerExperiencia ">
            <main class="grid-itemExperiencia mainExperiencia">
              <div class="itemsExperiencia">
                <div class="itemExperiencia item3Experiencia">
                  <img
                    id="tuExperiencia"
                    src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                  />{" "}
                  <div class="section-titleExperiencia sierras">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <Link to={"/atractivo/235"}>
                        <h2 style={{ color: "white" }}>
                          Sierra de<br></br> Las Quijadas
                        </h2>
                      </Link>
                    </Animated>
                  </div>
                  <div className="productoSubtituloExperiencia">
                    <h5>El Gigante Rojo</h5>
                    <h5>Toda su cultura originaria</h5>
                  </div>
                </div>
                <div class="itemExperiencia item1Experiencia">
                  <img
                    id="tuExperiencia"
                    src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                  />{" "}
                  <div class="section-titleExperiencia moverDerecha">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <Link to={"/atractivo/202"}>
                        <h2 style={{ color: "white" }}>
                          Salto de la <br></br> Negra Libre
                        </h2>{" "}
                      </Link>
                    </Animated>
                  </div>
                  <div className="productoSubtituloExperiencia">
                    <h5>Disfrutá del camino</h5>
                    <h5>Saltos, Cerros, Cascadas</h5>
                  </div>
                </div>
                <div class="itemExperiencia item2Experiencia">
                  <img
                    id="tuExperiencia"
                    src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                  />{" "}
                  <div class="section-titleExperiencia moverDerecha">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>
                        Moto <br></br> Turismo
                      </h2>
                    </Animated>
                  </div>
                  <div className="productoSubtituloExperiencia">
                    <h5>Otro Planeta</h5>
                    <h5>Salina del Bebedero</h5>
                  </div>
                </div>

                <div class="itemExperiencia item4Experiencia">
                  <img
                    id="tuExperiencia"
                    src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                  />
                  <div class="section-titleExperiencia moverDerecha">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>
                        Minas <br></br>de Oro
                      </h2>
                    </Animated>
                  </div>

                  <div className="productoSubtituloExperiencia">
                    <h5>Oro en la Provincia</h5>
                    <h5>Circuito de minería</h5>
                  </div>
                </div>
                <div class="itemExperiencia item5Experiencia">
                  <img
                    id="tuExperiencia"
                    src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                  />
                  <div class="section-titleExperiencia moverDerecha">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>
                        Astro <br></br> Turismo
                      </h2>
                    </Animated>
                  </div>

                  <div className="productoSubtituloExperiencia">
                    <h5>Parques Provinciales</h5>
                    <h5>Gastronomía</h5>
                  </div>
                </div>

                <div className="reset"></div>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ScrollExperiencia.contextType = Consumer;
export default ScrollExperiencia;
