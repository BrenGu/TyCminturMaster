import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../utils/Loading";

class PParques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: 0,
      data: [
        {
          descripcion: "",
          imagenes: [{ imagen: "default.jpg" }],
        },
      ],
      index: 0,
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    // url: `${process.env.REACT_APP_API}/atractivoTipo/2`,
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/atractivoTipo/2`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState({
            data: response.data.data.registros,
          });
        } else {
          //Error no se enocntró el id
        }
      })
      .catch((error) => {
        console.log(error);
      });
    self.setState({ loading: false });
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
    var ListadoAtractivofull = null;
    if (this.state.data.length > 0) {
      ListadoAtractivofull = this.state.data.map((atrac) => {
        let descripcion = "";
        if (atrac.descripcion.length > 205) {
          descripcion = atrac.descripcion.substr(0, 205) + "...";
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
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[indice].imagen}`}
                    alt="Img"
                  />
                </div>
                <div class="content">
                  <div class="title" style={{ color: "#5bb156" }}>
                    {atrac.nombre} <br></br>
                    <span class="blog-date">
                      {atrac.tipoNombre} - {atrac.localidad}
                    </span>
                  </div>
                  <div class="rounded"></div>

                  <p>{descripcion}</p>
                </div>

                <div class="item-arrow">
                  {" "}
                  <p className="leerMas">Leer más</p>
                  <br></br>
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
    }

    return (
      <React.Fragment>
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div
              style={{
                paddingTop: "150px",
                paddingBottom: "30px",
                paddingLeft: "30px",
              }}
              className="container ListadoAtractivofull"
            >
              <h3 style={{ color: `#5bb156` }}>Parques Provinciales</h3>
              <div style={{ float: "right", paddingLeft: "50px" }}>
                <img
                  className="logoParques"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/icons/parques.jpg"
                ></img>
              </div>
              <h5 className="" style={{ color: `#808080` }}>
                <br></br>
                Con sus cuidadosos diseños paisajísticos, te permiten relajarte
                y disfrutar de la naturaleza, en medio del ambiente urbano.
                Estos placenteros refugios verdes te ofrecen recreación, eventos
                y propuestas para todos los gustos y edades. <br></br>Cada uno
                de ellos con su marca distintiva, preservan vegetación
                autóctona, cuentan apasionantes historias y constituyen sitios
                de vital importancia por los beneficios ambientales y sociales
                que brindan a locales y turistas.
                {/* Bienvenidos a los parques provinciales.*/}
              </h5>{" "}
            </div>

            <br />
            <div className="container">{ListadoAtractivofull}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PParques.contextType = Consumer;
export default PParques;
