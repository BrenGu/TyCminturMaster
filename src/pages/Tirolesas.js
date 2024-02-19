import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import Loading from "../utils/Loading";
import NotFound from "../components/NotFound";
import CardCiudades from "../components/CardCiudades";

class Tirolesas extends Component {
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
                paddingTop: "140px",
                paddingBottom: "30px",
                paddingLeft: "80px",
              }}
              className="container"
            >
              <h3 style={{ color: `#722789` }}>Tirolesas</h3>
              <div className="parentTirolesa">
                <div className="div1Tirolesa">
                  <span>
                    En función de la Res. N° 07-SGG-ST-2021 se acordó con el
                    Colegio de Ingenieros de San Luis la realización de una
                    revisión técnica de las tirolesas de la provincia a fin de
                    cumplir con lo establecido en la resolución mencionada.
                    Dicha revisión incluyó los aspectos estructurales, de
                    seguridad e higiene, habilitación comercial y seguro vigente
                    resultando aprobadas las siguientes:
                  </span>
                </div>
                <div className="div2Tirolesa">
                  <img
                    style={{ height: "100px", width: "150px" }}
                    src="https://cinytec.org.ar/wp-content/uploads/2019/01/logo2019-150x105.png"
                  ></img>
                </div>
                <div className="div3Tirolesa">
                  {" "}
                  <h5>Hace click para acceder a Google Maps:</h5>{" "}
                </div>
              </div>
              <br></br>
              <CardCiudades data={this.state.data} tipo={this.state.tipo} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Tirolesas.contextType = Consumer;

export default Tirolesas;
