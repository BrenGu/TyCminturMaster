import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import Loading from "./../utils/Loading";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

class Termas_salinas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      data: [],
      tipo: "tirolesas",
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/gettirolesas`,
      responseType: "json",
    })
      .then((response) => {
        self.setState({
          loading: false,
          isNotFound: false,
          data: response.data.data.registros,
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
    this.setState(
      {
        loading: true,
      },
      () => {
        this.getData();
      }
    );
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
            <div
              style={{
                paddingTop: "70px",
                paddingBottom: "30px",
              }}
              className="container"
            >
              <h3 style={{ color: `#722789` }}>Termas y Salinas</h3>
              <center>
                <span>
                  A pocos kilómetros de la Ciudad de San Luis encontrarás dos
                  centros termales en plena llanura puntana. Balde y San
                  Jerónimo con sus enérgicas y saludables aguas te permitirán
                  relajarte en contacto con ambientes que irradian tranquilidad
                  absoluta. El circuito se completa con la visita al vasto
                  desierto blanco de las “Salinas del Bebedero”, que presenta
                  todo su esplendor escénico en el invierno cuando se acumulan
                  grandes extensiones de sal. Originalidad y bienestar
                  diferencian a esta zona que resulta imprescindible conocer,
                  experimentando sus atributos terapéuticos.
                </span>
              </center>
              <hr />
              <h3 style={{ color: `#722789` }}>
                Te invitamos a recorrer nuestra provincia
              </h3>
              <Link to={`/atractivo/13`} key={`atractivo-1`}>
                <div className="blog-item">
                  <a href="#">
                    <div className="icon">
                      <img
                        className=""
                        src={`https://turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_13_20181022115336.jpg`}
                        alt="Img"
                      />
                    </div>
                    <div className="content">
                      <div className="title" style={{ color: "#722789" }}>
                        Salinas del Bebedero <br></br>
                      </div>
                      <div className="rounded"></div>

                      <p>
                        Se encuentran a 42 km de la ciudad de San Luis, por
                        Autopista, Ruta Nacional Nº 7. A 25 km se llega al
                        puente (R.P. n° 15) que une la localidad de Balde con
                        Salinas, desde allí se ingresa a 10 km hasta llegar al
                        salar. El camino es de asfalto, en buen estado de
                        conservación.
                      </p>
                    </div>

                    <div className="item-arrow">
                      {" "}
                      <p className="leerMas">Leer más</p>
                      <br></br>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#e36838" }}
                      ></i>
                    </div>
                  </a>
                </div>
                <hr></hr>
              </Link>
              <Link to={`/localidad/26`} key={`atractivo-2`}>
                <div className="blog-item">
                  <a href="#">
                    <div className="icon">
                      <img
                        className=""
                        src={`https://www.clarin.com/img/2019/04/30/5QGl3YFcT_1256x620__1.jpg`}
                        alt="Img"
                      />
                    </div>
                    <div className="content">
                      <div className="title" style={{ color: "#722789" }}>
                        Localidad de San Jerónimo <br></br>
                      </div>
                      <div className="rounded"></div>

                      <p>
                        Es un destino turístico que se destaca por sus aguas
                        termales, las cuales han alcanzado gran renombre. Se
                        obtienen a 451 metros de profundidad, alcanzando los 39°
                        C en boca de pozo. La localidad cuenta con dos
                        balnearios: uno municipal y otro privado, donde se puede
                        pasar el día, acampar o alojarse.{" "}
                      </p>
                    </div>

                    <div className="item-arrow">
                      {" "}
                      <p className="leerMas">Leer más</p>
                      <br></br>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#e36838" }}
                      ></i>
                    </div>
                  </a>
                </div>
                <hr></hr>
              </Link>
              <Link to={`/localidad/2`} key={`atractivo-3`}>
                <div className="blog-item">
                  <a href="#">
                    <div className="icon">
                      <img
                        className=""
                        src={`https://www.serargentino.com/public/images/2020/02/san-luis-termas-773x458.jpeg`}
                        alt="Img"
                      />
                    </div>
                    <div className="content">
                      <div className="title" style={{ color: "#722789" }}>
                        Localidad de Balde<br></br>
                      </div>
                      <div className="rounded"></div>

                      <p>
                        Decididamente saludable y desestresante, la pequeña
                        aunque grandiosa localidad de Balde se sitúa a escasos
                        kilómetros hacia el suroeste de San Luis capital,
                        integrando la cautivante región de las Termas y Salinas.
                      </p>
                    </div>

                    <div className="item-arrow">
                      {" "}
                      <p className="leerMas">Leer más</p>
                      <br></br>
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                        style={{ color: "#e36838" }}
                      ></i>
                    </div>
                  </a>
                </div>
                <hr></hr>
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Termas_salinas.contextType = Consumer;

export default Termas_salinas;
