import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../utils/Loading";
class PDiques extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivoTipo/1`,
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
        if (atrac.descripcion.length > 395) {
          descripcion = atrac.descripcion.substr(0, 205) + "...";
        } else {
          descripcion = atrac.descripcion;
        }
        let indice = Math.floor(Math.random() * atrac.imagenes.length);
        return (
          <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
            <div className="blog-item">
              <a href="#">
                <div className="icon">
                  <img
                    className=""
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[indice].imagen}`}
                    alt="Img"
                  />
                </div>
                <div className="content">
                  <div className="title" style={{ color: "#722789" }}>
                    {atrac.nombre} <br></br>
                    <span className="blog-date">
                      {atrac.tipoNombre} - {atrac.localidad}
                    </span>
                  </div>
                  <div className="rounded"></div>

                  <p>{descripcion}</p>
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
                paddingTop: "150px",
                paddingBottom: "30px",
                paddingLeft: "30px",
              }}
            >
              <h3 style={{ color: `#722789` }}>Espejos de Agua</h3>
              <h5 className="" style={{ color: `#808080` }}>
                A lo largo de más de tres décadas, el Estado Provincial trabajó
                en la construcción de grandes obras de almacenamiento y
                distribución del agua. San Luis, con 20 diques, es la provincia
                con mayor cantidad de embalses de todo el país, que garantizan
                seguridad hídrica para las futuras generaciones y brindan
                excelentes propuestas turísticas. Deportes náuticos, pesca,
                paseos en botes, sol, playa y descanso son algunas de las
                tentadoras opciones recreativas que podés disfrutar en los
                hermosos espejos de agua sanluiseños.
              </h5>
              <div style={{ paddingTop: "10px" }} className="Recorridos">
                <div className="reco-titulo">
                  <Link to="/PPermisoPesca" className="link">
                    <span className="reco-t-sub2" style={{ color: `#722789` }}>
                      Ver Permisos
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <br></br>
            <div className="container">{ListadoAtractivofull}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PDiques.contextType = Consumer;
export default PDiques;

