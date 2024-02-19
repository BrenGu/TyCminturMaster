import React, { Component } from "react";
import { Consumer } from "../../context";
import Loading from "../../utils/Loading";
import Listados from "../../components/Listados";
import axios from "axios";

class PListadoAtractivos extends Component {
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
      nombreAtractivo: "",
      filtro: [],
      index: 0,
    };
    this.getData = this.getData.bind(this);
    this.aplicarFiltro = this.aplicarFiltro.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/ciudad/${self.state.id}/atractivos/imagenes`,
      responseType: "json",
    })
      .then((response) => {
        self.setState({
          data: response.data.data.registros,
          filtro: response.data.data.registros,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

  aplicarFiltro() {
    let { nombreAtractivo } = this.state;
    let filtrado = this.state.data.filter((value) => {
      let respuesta = true;
      //Validar Nombre
      if (nombreAtractivo.length) {
        if (
          value.nombre.toLowerCase().search(nombreAtractivo.toLowerCase()) ===
          -1
        ) {
          respuesta = false;
        }
      }
      return respuesta;
    });
    this.setState({
      //Aca estoy metiendo en el estado filtro el array de Alojamientos filtrado.
      filtro: filtrado,
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.aplicarFiltro();
      }
    );
  }

  render() {
    const loading = this.state.loading;
    return (
      <div>
        {loading ? (
          <div className="LoadingListadoAtractivo">
            <Loading margins="150px" />
          </div>
        ) : (
          <React.Fragment>
            <div
              className="container ListadoAtractivofull"
              style={{
                paddingTop: "100px",
                paddingLeft: "80px",
              }}
            >
              <div
                className="nf-titulo"
                style={{ marginTop: "50px", color: "#722789" }}
              >
                <span>Atractivos Turistícos</span>
              </div>
              <br />
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="nombreAtractivo">Nombre</label>
                  <input
                    type="text"
                    id="nombreAtractivo"
                    name="nombreAtractivo"
                    className="form-control"
                    value={this.state.nombreAtractivo}
                    onChange={this.handleChange}
                  />
                </div>
                {/*<div className="form-group col-md-3 d-flex align-items-end justify-content-end">
								<button type="submit" className="btn btn-primary">Buscar</button>
							</div>*/}
              </div>
            </div>
            <div className="container">
              <Listados
                idLocalidad={this.state.id}
                data={this.state.filtro}
                tipo={"atractivo"}
              />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PListadoAtractivos.contextType = Consumer;

export default PListadoAtractivos;
