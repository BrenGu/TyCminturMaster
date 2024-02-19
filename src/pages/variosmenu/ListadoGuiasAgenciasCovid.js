import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound";
import CardCiudades from "../../components/CardCiudades";

class ListadoGuiasAgenciasCovid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      data: [],
      carousel: [],
      tipo: "",
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
      url: `${process.env.REACT_APP_API}/${this.state.tipo}${
        this.state.tipo == "agencias" ? "/viaje" : ""
      }`,
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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.tipo !== prevProps.match.params.tipo) {
      this.setState(
        {
          loading: true,
          tipo: this.props.match.params.tipo,
        },
        () => {
          this.getData();
        }
      );
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        loading: true,
        tipo: this.props.match.params.tipo,
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
            <div className="container mb-5" />
            <div className="container">
              <h3
                style={{
                  color: `#722789`,
                  paddingTop: "60px",
                  marginLeft: "15px",
                }}
              >
                {this.state.tipo === "guiasturismo"
                  ? "GUÍAS DE TURISMO"
                  : "AGENCIAS DE VIAJES"}
              </h3>
              <hr></hr>
              <CardCiudades data={this.state.data} tipo={this.state.tipo} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

ListadoGuiasAgenciasCovid.contextType = Consumer;

export default ListadoGuiasAgenciasCovid;
