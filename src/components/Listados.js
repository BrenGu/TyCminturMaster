import React, { Component } from "react";
import Viewer from "../components/subcomponentes/Viewer";
import { Link } from "react-router-dom";
//import { Consumer } from "../context";
//import axios from "axios";

class Listados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      idLocalidad: 0,
      data: [],
      visibility: [],
      tipo: "",
      visibles: 5,
      clase: "listado",
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.idLocalidad !== prevProps.idLocalidad ||
      this.props.data !== prevProps.data ||
      this.props.tipo !== prevProps.tipo
    ) {
      if (this.props.tipo == "mapas") {
        this.setState({
          loading: true,
          data: this.props.data,
          tipo: this.props.tipo,
        });
      } else {
        this.setState({
          loading: true,
          idLocalidad: this.props.idLocalidad,
          data: this.props.data,
          tipo: this.props.tipo,
        });
      }
    }
  }

  componentDidMount() {
    if (this.props.tipo == "mapas") {
      this.setState({
        data: this.props.data,
        tipo: this.props.tipo,
      });
    } else {
      this.setState({
        idLocalidad: this.props.idLocalidad,
        data: this.props.data,
        tipo: this.props.tipo,
      });
    }
  }

  render() {
    const listadoAtractivofull =
      this.state.tipo == "mapas"
        ? this.state.data.map((atrac) => {
            let descripcion = "";
            if (atrac.descripcion.length > 395) {
              descripcion = atrac.descripcion.substr(0, 395) + "...";
            } else {
              descripcion = atrac.descripcion;
            }

            return (
              <Link to={`/mapasxzona/${atrac.id}`} key={`map-${atrac.id}`}>
                <div className="row mb-5">
                  <div className="col">
                    <div className="atractivo-full-item">
                      <div className="imagen">
                        <span style={{ backgroundColor: `#${atrac.color}` }}>
                          MAPAS
                        </span>
                        <img
                          className="img-fluid"
                          src={`${atrac.foto}`}
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
                <div
                  className="ZonaMenu-Item"
                  style={{ backgroundColor: `#${atrac.color}` }}
                ></div>
              </Link>
            );
          })
        : this.state.data.map((atrac) => {
            let descripcion = "";
            if (atrac.descripcion.length > 395) {
              descripcion = atrac.descripcion.substr(0, 395) + "...";
            } else {
              descripcion = atrac.descripcion;
            }

            let indice = atrac.imagenes[0].imagen;
            return (
              <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
                <div class="blog-item">
                  <a href="#">
                    <div class="icon">
                      <img
                        className=""
                        src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${indice}`}
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

    return (
      <React.Fragment>
        {
          <Viewer visibles={this.state.visibles} clase={this.state.clase}>
            {listadoAtractivofull}
          </Viewer>
        }
      </React.Fragment>
    );
  }
}

//Listados.contextType = Consumer;

export default Listados;
