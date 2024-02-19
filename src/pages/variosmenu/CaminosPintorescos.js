import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../utils/Loading";

class PCaminosPintorescos extends Component {
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
    //url: `${process.env.REACT_APP_API}/atractivoTipo/1`,
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/atractivoTipo/3`,
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
                  <div class="title" style={{ color: "#722789" }}>
                    {atrac.nombre} <br></br>
                    <span class="blog-date">
                      {atrac.tipoNombre} - {atrac.localidad}
                    </span>
                  </div>
                  <div class="rounded"></div>

                  <p>{descripcion}</p>
                </div>

                <div class="item-arrow">
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
            {/*           <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
            <div className="row mb-5">
              <div className="col">
                <div className="atractivo-full-item">
                  <div className="imagen">
                    <span style={{ backgroundColor: `#${atrac.color}` }}>
                      {atrac.localidad} - {atrac.tipo}
                    </span>
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[indice].imagen}`}
                      alt="Img"
                    />
                  </div>
                  <div
                    className="titulo"
                    style={{ backgroundColor: `#${atrac.color}` }}
                  >
                    <h3>{atrac.nombre}</h3>
                  </div>
                  <div className="body">
                    <p className="text-dark mb-2">{descripcion}</p>
                    <span className="btn-novedades">
                      Leer <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>*/}
          </Link>
        );
      });
    }

    return (
      <React.Fragment>
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <Loading margins="96px" />
          </div>
        ) : (
          <React.Fragment>
            <div
              className="container ListadoAtractivofull"
              style={{
                paddingTop: "200px",
                paddingBottom: "30px",
                paddingLeft: "80px",
              }}
            >
              <h3 style={{ color: `#722789` }}>Caminos Pintorescos</h3>
              <h5 className="" style={{ color: `#808080` }}>
                San Luis es un lugar privilegiado por la naturaleza, donde se
                manifiestan una infinidad de recorridos colmados de diversidad,
                aire puro, vegetación, ríos, valles y sierras en su máxima
                expresión. Son una irresistible invitación a transitarlos para
                conectarte con entornos plenos de encanto, vistas panorámicas
                sorprendentes y tramos de altas serranías que deslumbran por su
                magnificencia.
              </h5>
            </div>
            <br></br>
            <div className="container">{ListadoAtractivofull}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PCaminosPintorescos.contextType = Consumer;
export default PCaminosPintorescos;
