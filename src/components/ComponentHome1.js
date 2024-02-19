import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Consumer } from "../context";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class ComponentHome1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <center>
          <div className="imgActividades">
            <center>
              <img
                className=""
                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/experimenta.png`}
                alt="Img"
              />{" "}
            </center>
          </div>
          <div class="probando">
            <div class="div1-probando">
              {" "}
              <figure class="image-block">
                <h1>Espejos de Agua</h1>
                <img className="imgPrueba1" src="" alt="" />
                <figcaption>
                  <h3 style={{ color: "white" }}>Disfrutá</h3>
                  <p>
                    En San Luis hay más de 20 opciones diferentes para conocer,
                    disfrutar y practicar una diversidad de deportes acuáticos.
                    Inmersos en una geografía natural inigualable, los espejos
                    de agua invitan a la aventura.
                    <br />
                    <br />
                  </p>
                  <Link to={"/Diques"}>
                    <button>Más Info</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div class="div2-probando">
              {" "}
              <figure class="image-block">
                <h1>Oro en la Provincia</h1>
                <img className="imgPrueba3" />
                <figcaption>
                  <h3 style={{ color: "white" }}>Explorá</h3>
                  <p>
                    La Carolina aún conserva los vestigios de la mayor fiebre
                    del oro registrada en Argentina. Caminar por el interior de
                    la mina de oro, rememorar el trabajo de los mineros y
                    visitar la Casa del Poeta, Juan Crisóstomo Lafinur son parte
                    de las actividades imperdibles.
                  </p>
                  <Link to={"/atractivo/83"}>
                    {" "}
                    <button>Más Info</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div class="div3-probando">
              {" "}
              <figure class="image-block">
                <h1>Aventura</h1>
                <img className="imgPrueba4" />

                <figcaption>
                  <h3 style={{ color: "white" }}>Animate</h3>
                  <p>
                    Imposible aburrirse. Quien busca adrenalina, en San Luis la
                    encuentra. Cabalgatas, cuatriciclos, tirolesa, trekking en
                    sierras , cicloturismo y mucho más.
                    <br />
                    <br />
                    <br />
                  </p>
                  <Link to={"/tirolesas"}>
                    <button>Más Info</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div class="div4-probando">
              {" "}
              <figure class="image-block ">
                <h1 className="">Parques</h1>
                <img className="imgPrueba6" />

                <figcaption>
                  <h3 style={{ color: "white" }}>Respirá</h3>
                  <p>
                    Espacios de naturaleza y vida silvestre donde se fusionan
                    las actividades al aire libre para quienes disfrutan de la
                    vida silvestre. En los parques de San Luis, el turista puede
                    conectar con la naturaleza y disfrutar de saltos, cascadas y
                    reservas de agua increíbles.
                  </p>
                  <Link to={"/parques-provinciales"}>
                    {" "}
                    <button>Más Info</button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </center>
      </React.Fragment>
    );
  }
}

ComponentHome1.contextType = Consumer;
export default ComponentHome1;
