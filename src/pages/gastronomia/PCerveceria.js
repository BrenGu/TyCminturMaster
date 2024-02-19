import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

class PCerveceria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      id: 0,
      data: [
        {
          descripcion: "",
          imagenes: [{ imagen: "default.jpg" }]
        }
      ],
      index: 0
    };
    this.getData = this.getData.bind(this);
  }

  getData() {}

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        id: this.props.match.params.id
      },
      () => {
        this.getData();
      }
    );
  }

  render() {
    const loading = this.state.loading;
    return (
      <React.Fragment>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container ListadoAtractivofull">
              <div
                className="ZonaLocalidad-titulo"
                style={{ backgroundColor: `#722789` }}
              >
                <h3 style={{ color: `#722789` }}>
                  Disfrutá - Caminos de la cerveza artesanal
                </h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                San Luis te propone un nuevo recorrido para disfrutar los
                sabores de nuestra tierra, revalorizando el esfuerzo de los
                productores locales que elaboran cerveza artesanal puntana en
                distintos estilos y variedades. Realizadas con agua de máxima
                pureza y materia prima seleccionada, que garantizan su calidad e
                impronta autóctona, invitan al encuentro entre amigos o en
                familia. Son ideales para acompañar las tradicionales picadas o
                los deliciosos platos típicos, siempre con el marco natural
                sorprendente que ofrece nuestra provincia.
              </h4>
            </div>
            <center>
              <div className="Recorridos">
                <div>
                  <div className="titulo-creer">
                    <span className="reco-t-sub2">Vení a conocer:</span>
                  </div>
                </div>
                <div className="reco-container" style={{ maxWidth: "924px" }}>
                  <Link to="PZonaCerveceria/4/Sierras Centrales">
                    <div id="sierras">
                      <div className="cuadro-color" />
                      <img
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cerveza1.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Sierras</p>
                        <p>Centrales</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCerveceria/5/Norte Puntano">
                    <div id="norte">
                      <div className="cuadro-color" />
                      <img
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cerveza2.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Norte</p>
                        <p>Puntano</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCerveceria/8/Los Comechingones">
                    <div id="costa">
                      <div className="cuadro-color" />
                      <img
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cerveza3.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Costa de los</p>
                        <p>Comechingones</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCerveceria/1/Conlara">
                    <div id="valle">
                      <div className="cuadro-color" />
                      <img
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cerveza4.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Valle del Conlara</p>
                        <p>y San Martín</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCerveceria/9/Circuito del Morro">
                    <div id="villa">
                      <div className="cuadro-color" />
                      <img
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cerveza5.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Villa Mercedes</p>
                        <p>y El Morro</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </center>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PCerveceria.contextType = Consumer;
export default PCerveceria;
