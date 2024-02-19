import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TabSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ancho: this.props.anchoImg,
      alto: this.props.altoImg,
      maginLeft: this.props.maginLeft,
      visible: false,
      bandera: 1,
    };
  }

  componentDidMount() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="tabs">
          <input
            type="radio"
            id="tab1"
            name="tab-control"
            checked={this.state.bandera == 1 ? true : false}
            onClick={() => {
              this.setState({
                bandera: 1,
              });
            }}
          />
          <input
            type="radio"
            id="tab2"
            name="tab-control"
            onClick={() => {
              this.setState({
                bandera: 2,
              });
            }}
          />
          <input
            type="radio"
            id="tab3"
            name="tab-control"
            onClick={() => {
              this.setState({
                bandera: 2,
              });
            }}
          />
          <input
            type="radio"
            id="tab4"
            name="tab-control"
            onClick={() => {
              this.setState({
                bandera: 2,
              });
            }}
          />
          <ul className="listatabslider">
            <li title="Ingreso">
              <label for="tab1" role="button">
                <i
                  class="fas fa-suitcase-rolling"
                  style={{ paddingRight: "5px" }}
                ></i>
                <br />
                <span>Ingresá</span>
              </label>
            </li>
            <li title="Delivery Contents">
              <label for="tab2" role="button">
                <i class="fas fa-hotel" style={{ paddingRight: "5px" }}></i>
                <br />
                <span>Alojate</span>
              </label>
            </li>
            <li title="Returns">
              <label for="tab3" role="button">
                <i
                  class="fas fa-map-marked-alt"
                  style={{ paddingRight: "5px" }}
                ></i>

                <br />
                <span>Conocé</span>
              </label>
            </li>
          </ul>
          <div class="slider">
            <div class="indicator"></div>
          </div>
          <div class="content">
            <section>
              <h2>Ingreso</h2>
              <i
                class="fas fa-arrow-alt-circle-right"
                style={{ color: "rgba(237,15,104, 1)" }}
              ></i>{" "}
              Hoy, a nuestra provincia podes ingresar tranquilamente a disfrutar
              de unas maravillosas vacaciones, <b>no debes solicitar ningún permiso</b>.
              
              <div>
                <a className="btnavion" href="http://sanluismidestino.com/vuelos-especiales/" target="_blank">
                  <span>Ingreso en Avión</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ATERRIZAJE.png"
                    style={{ height: "25px" }}
                  ></img>
                </a>
              </div>
              
            </section>

            <section>
              <h2>Alojate</h2>
              <i
                class="fas fa-arrow-alt-circle-right"
                style={{ color: "rgba(237,15,104, 1)" }}
              ></i>{" "}
              La provincia elaboró distintos protocolos para que puedas
              disfrutar de tus vacaciones de manera segura. Te mostramos el
              listado de todos los alojamientos que cumplen con los requisitos.
              <div>
              <Link
                to="/filtroalojamientoAdhiere"
                className="btnavion"
                  style={{ backgroundColor: "rgba(114,39,137, 1)" }}
              >
                <span>donde alojarte</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ALOJAMIENTO.png"
                    style={{ height: "25px", color: "rgba(114,39,137, 1)" }}
                  ></img>
              </Link>
              </div>
            </section>
            <section>
              <h2>Conocé</h2>
              <i
                class="fas fa-arrow-alt-circle-right"
                style={{ color: "rgba(237,15,104, 1)" }}
              ></i>{" "}
              Tenemos un sin fin de opciones para que puedas disfrutar y
              recorrer nuestra provincia. ¿Qué estas esperando para venir?
              <div className="container-btnsavion">
              <Link
                to="/PParquesList"
                className="btnavion-conoce"
              >
                <span>Parques provinciales</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ICONO PARQUE.png"
                    style={{ height: "25px", color: "rgba(114,39,137, 1)" }}
                  ></img>
              </Link>
               
              <Link to="/Diques" className="btnavion-conoce" style={{backgroundColor: "rgb(204, 12, 89)"}}>
                  <span>Diques y embalses</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ICONO AGUA.png"
                    style={{
                      height: "25px",
                      color: "rgba(237,15,104, 1)",
                    }}
                  ></img>
              </Link>
              <Link
                to="/Recorridos"
                className="btnavion-conoce"
                style={{backgroundColor: "rgb(156, 54, 187)"}}
              >
                <span>Caminos alternativos</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ICONO TREKKING.png"
                    style={{
                      height: "25px",
                      color: "rgba(237,15,104, 1)",
                    }}
                  ></img>
              </Link>
              <Link
                to="/PCreerGnral"
                className="btnavion-conoce"
                style={{backgroundColor: "rgba(114,39,137, 1)"}}
              >
                <span>Creer en San Luis</span>
                  <img
                    className="material-icons"
                    src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/ICONO INFORME.png"
                    style={{
                      height: "25px",
                      color: "rgba(237,15,104, 1)",
                    }}
                  ></img>
              </Link>
              
              </div>
            </section>
            <section>
              <h2>Returns</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dicta vero rerum? Eaque repudiandae architecto libero
              reprehenderit aliquam magnam ratione quidem? Nobis doloribus
              molestiae enim deserunt necessitatibus eaque quidem incidunt.
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
