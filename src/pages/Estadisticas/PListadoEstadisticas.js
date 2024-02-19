import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
import Estadistica from "../../components/Estadistica";

class PListadoEstadisticas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: false,
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    let token = this.context.token;
    let self = this;

    await axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/reporte/all`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.registros.length > 0) {
          self.setState({
            data: response.data.data.registros,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData(0);
  }

  render() {
    const graph = this.state.data.map((element) => {
      //var colours = ["#bf3276", "#cb6120", "#a2bd31", "#326534", "#e5b449", "#a01127", "#618dc5", "#5ea099"]
      var color = "#bf3276";
      return (
        <div>
          <div className="card" style={{ borderColor: "#fff" }}>
            <div
              className="card-header"
              id={`est-${element.id}`}
              style={{ backgroundColor: "#fff" }}
            >
              <h5 className="mb-0 d-flex justify-content-between">
                <button
                  className="btn"
                  style={{
                    width: "100%",
                    height: "50px",
                    fontSize: "1.2rem",
                    lineHeight: "1.8rem",
                    fontWeight: "700",
                    backgroundColor: color,
                    color: "#fff",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse-activo-${element.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse-activo-${element.id}`}
                  onClick={() => {
                    this.setState({ flag: element.id });
                  }}
                >
                  {element.nombre}
                </button>
                {/*<button className="btn btn-danger" type="button" onClick={(e) => { this.msgDelAtractivo(this.state.atractivo.id, this.state.atractivo.nombre, e) }}>
                                <i className="fas fa-trash"></i>
                               </button>*/}
              </h5>
            </div>
            <div
              id={`collapse-activo-${element.id}`}
              className="collapse"
              aria-labelledby={`atractivo-${element.id}`}
              data-parent="#accordionAtractivos"
            >
              <div className="card-body">
                <Estadistica
                  id={element.id}
                  updateOnOpen={this.state.flag}
                ></Estadistica>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div
          className="container"
          style={{
            paddingTop: "200px",
            paddingLeft: "50px",
            marginBottom: "-50px",
          }}
        >
          <h3 style={{ color: `#722789` }}>Listado de Estadísticas</h3>
          <hr></hr>
        </div>
        <div>
          <div className="accordion" id="accordionAtractivos">
            {graph}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PListadoEstadisticas.contextType = Consumer;

export default PListadoEstadisticas;
