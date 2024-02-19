import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound"
import ItemCardCiudades from "../../components/ItemCardCiudades"
import CardCiudades from "../../components/CardCiudades";

class PAlquileresAuto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isNotFound: true,
      data: [],
      tipo: "alquileresauto"
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
      url: `${process.env.REACT_APP_API}/alquileresauto`,
      responseType: "json",
    })
      .then((response) => {
        self.setState({
            loading: false,
            isNotFound: false,
            data: response.data.data.registros
        });
        
      })
      .catch((error) => {
        self.setState({
            loading: false,
            isNotFound: true
        });
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState({
      loading: true
    }, () => {
      this.getData();
    });
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
        )
        :(
          <React.Fragment>
            <div className="container mb-5" />
              <div className="container">
              <div
                className="ZonaDetalle-titulo"
                style={{ paddingTop: "50px", backgroundColor: `#722789` }}
              >
                <h3 style={{ color: `#722789` }}>Alquiler de Autos</h3>
              </div>
                <CardCiudades data={this.state.data} tipo={this.state.tipo} />
            </div>

          </React.Fragment>
        )}
      </div>
    );
  }
}

PAlquileresAuto.contextType = Consumer;

export default PAlquileresAuto;
