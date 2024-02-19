import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Consumer } from "../context";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "1%" }}>
          <Helmet>
            <script
              type="text/javascript"
              src="http://turismo.sanluis.gov.ar/recursos/js/scroll.js"
            ></script>
          </Helmet>
          <div className="tituloScrollActividades">
            <center>
              <img
                className=""
                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/explora.png`}
                alt="Img"
              />{" "}
            </center>
          </div>
          <div class="grid-container">
            {/*
            <div class="arrow izquierda bounce">
              <i class="fa fa-arrow-left fa-5x" aria-hidden="true"></i>
    </div>*/}
            <main class="grid-item main">
              <div class="items">
                <Link to={"/Diques"}>
                  <div class="item item4">
                    <div class="section-title espejosAgua">
                      <Animated
                        animationIn="bounceInLeft"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <h2 id="primerp">Espejos de Agua</h2>
                      </Animated>
                    </div>
                    <div class="parrafoProducto">
                      <p className="productoP">
                        Lo que queremos hacer es colocar este texto al lado
                        derecho de la imagen, algo así como se observa en
                        periódicos o revistas.
                      </p>
                    </div>
                    <div className="productoSubtitulo">
                      <h5>Oro en la Provincia</h5>
                      <h5>Circuito de minería</h5>
                    </div>
                  </div>
                </Link>
                <Link to={"/Tirolesas"}>
                  <div class="item item6">
                    <div class="section-title aventura">
                      <Animated
                        animationIn="bounceInLeft"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <h2>Aventura</h2>
                      </Animated>
                    </div>
                    <div class="parrafoProducto">
                      <p className="productoP">
                        Lo que queremos hacer es colocar este texto al lado
                        derecho de la imagen, algo así como se observa en
                        periódicos o revistas.
                      </p>
                    </div>
                    <div className="productoSubtitulo">
                      <h5>Gastronomía</h5>
                      <h5>Gastronomía</h5>
                    </div>
                  </div>
                </Link>
                <div class="item item3">
                  <div class="section-title sierras">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>Las Sierras</h2>
                    </Animated>
                  </div>
                  <div class="parrafoProducto">
                    <p className="productoP">
                      Lo que queremos hacer es colocar este texto al lado
                      derecho de la imagen, algo así como se observa en
                      periódicos o revistas.
                    </p>
                  </div>
                  <div className="productoSubtitulo">
                    <h5>Los Gigantes</h5>
                    <h5>Todo el circuito serrano</h5>
                  </div>
                </div>
                <Link to={"/parques-provinciales"}>
                  <div class="item item5">
                    <div class="section-title parques">
                      <Animated
                        animationIn="bounceInLeft"
                        animationOut="fadeOut"
                        isVisible={true}
                      >
                        <h2>Parques</h2>
                      </Animated>
                    </div>
                    <div class="parrafoProducto">
                      <p className="productoP">
                        Lo que queremos hacer es colocar este texto al lado
                        derecho de la imagen, algo así como se observa en
                        periódicos o revistas.
                      </p>
                    </div>
                    <div className="productoSubtitulo">
                      <h5>Parques Provinciales</h5>
                      <h5>Gastronomía</h5>
                    </div>
                  </div>{" "}
                </Link>
                <div class="item item2">
                  <div class="section-title salinas">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>Termas y Salinas</h2>
                    </Animated>
                  </div>
                  <div class="parrafoProducto">
                    <p className="productoP">
                      Lo que queremos hacer es colocar este texto al lado
                      derecho de la imagen, algo así como se observa en
                      periódicos o revistas.
                    </p>
                  </div>
                  <div className="productoSubtitulo">
                    <h5>Otro Planeta</h5>
                    <h5>Salina del Bebedero</h5>
                  </div>
                </div>
                {/* 
                 <div class="item item1">
                  <div class="section-title">
                    <Animated
                      animationIn="bounceInLeft"
                      animationOut="fadeOut"
                      isVisible={true}
                    >
                      <h2>Gastronomía</h2>
                    </Animated>
                  </div>
                  <div class="parrafoProducto">
                    <p className="productoP">
                      Lo que queremos hacer es colocar este texto al lado
                      derecho de la imagen, algo así como se observa en
                      periódicos o revistas.
                    </p>
                  </div>
                  <div className="productoSubtitulo">
                    <h5>Magia Gastronómica</h5>
                    <h5>Disfrutá de los Sabores</h5>
                  </div>
                </div>*/}
                <div className="reset"></div>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Scroll.contextType = Consumer;
export default Scroll;
