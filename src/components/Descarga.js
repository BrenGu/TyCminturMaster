import React, { Component } from "react";
import ReactWOW from "react-wow";
import { Link } from "react-router-dom";

class Descarga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div class=" d-flex justify-content-center">
        <div class=" card shaodw-lg  card-1">
          <div class="card-body  d-flex pt-0">
            <div class="container row justify-content-md-center align-items-center">
              <div class="col-md-3 imgMapas align-items-center">
                <center>
                  <img
                    class=" img-fluid"
                    src="https://turismo.sanluis.gov.ar/recursos/mapa.png"
                  />
                </center>
              </div>
              <div class="col-md-6   text-center">
                <h5 class="card-title mapasTitle">
                  <b>Descargá los mapas de la provincia</b>
                </h5>
                <h6 class="card-title">
                  Hacé click y obtené sus versiones digitales para verlas en tu
                  celular.
                </h6>
                <br></br>
                <Link to="/descargar-mapas">
                  <button
                    type="button"
                    class="btn btn-primary btn-round-lg btn-lg"
                  >
                    Ingresar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Descarga;
