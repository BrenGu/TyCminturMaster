import React, { Component } from "react";
import { Consumer } from "../../context";
import { Helmet } from "react-helmet";

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="Productosection ">
            <Helmet>
              <script
                type="text/javascript"
                src="http://turismo.sanluis.gov.ar/recursos/js/productoDrag.js"
              ></script>
            </Helmet>
            <center>
              <h3>Experimenta los circuitos de esta provincia hermosa</h3>
            </center>
            <div class=" Productocontainer Productodragscroll">
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
              <div className="Producto ">
                <img src="http://www.turismo.sanluis.gov.ar/api-turismo/public/atractivos/0_27_20181022125559.jpg" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Productos.contextType = Consumer;
export default Productos;
