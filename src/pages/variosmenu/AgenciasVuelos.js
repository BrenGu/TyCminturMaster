import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound";
import CardCiudades from "../../components/CardCiudades";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

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
                paddingTop: "70px",
                paddingBottom: "30px",
              }}
              className="container"
            >
              <h3 style={{ color: `#722789` }}>Agencias de Viajes</h3>
              <center>
                <span>
                  En las siguientes agencias de viajes podrás comprar tu pasaje
                  para el vuelo correspondiente a: <br />
                  <br /> Valle del Conlara (RLO) – Santiago de Chile (SCL){" "}
                  <br /> Santiago de Chile (SCL) – Valle del Conlara (RLO)
                </span>
              </center>
              <br></br>
              <div className="row mb-3">
                <div className="col">
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "auto",
                      "& ul": { padding: 0 },
                    }}
                    subheader={<li />}
                  >
                    <li>
                      <ul>
                        <ListSubheader>
                          <h3 style={{ color: `#722789` }}>San Luis</h3>
                        </ListSubheader>
                        <center>
                          <li>
                            <a
                              href="https://goo.gl/maps/urZZ2f8Ds2W96LRu9"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Alituris
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Colon 733
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(266) 4 423034
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: info@alituris.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://goo.gl/maps/KRYJgk2rbVivj4cb7"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Babel Viajes
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Republica del libano esq
                                Sarmiento local 5
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: 2664315538/2665243644
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: sanluis@babelviajes.com.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://goo.gl/maps/gcdkQ33cLAGwSkvs7"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Daimar Tour
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: RIVADAVIA 560
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: 2664363326 - 2664660296
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: administracion@daimartour.com.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://goo.gl/maps/kXbJvYhCG6TDLBw2A?coh=178571&entry=tt"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Dasso Viajes{" "}
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Rivadavia Nº 444 "A"
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(2664) - 421017
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: dassoviajesevt@gmail.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          {/* 
                          <li>
                            <a
                              href="https://goo.gl/maps/dQaMiQAafK8qxypJ7?coh=178571&entry=tt"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Gimatur SRL
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Av. Illia 305.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(266) 5000076
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: receptivo@gimatur.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>*/}
                          <li>
                            <a
                              href="https://goo.gl/maps/9ji8PYtRHZXpLGrQ6"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                San Luis Travel
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Pringles 335
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(2664) 867440
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: ventas@sanluis-travel.com.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://goo.gl/maps/1GUsFCM2wDPFqq6k7?coh=178571&entry=tt"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Siglatur
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: GENERAL PAZ 870.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(2664) 872850
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: siglatur@gmail.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://viajesnocomunes.com.ar/#/"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Viajes No Comunes{" "}
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: AV. PTE. ILLIA 599, LOCAL 2.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono:(02664) -430256
                              </span>
                              <br />
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://goo.gl/maps/RHPinR1tgmnNN4Pe9"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Zigurat SRL
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Av Peron 451
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: 2664687963
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: Matias@viajeszigurat.com.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <ListSubheader>
                            <h3 style={{ color: `#722789` }}>Villa de Merlo</h3>
                          </ListSubheader>
                          <li>
                            <a
                              href="https://fernandezguardiaviajes.tur.ar/"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                FG Viajes
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Cnel. Pringles 457.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: (351) 3851492
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: viajesmerlo@gmail.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>{" "}
                          <li>
                            <a
                              href="https://goo.gl/maps/c9h7CAiHDxCFFQhm7?coh=178571&entry=tt"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                IXCHEL{" "}
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Cnel. Pringles 457.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: (266) 4542329
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: info@ixchel.tur.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>{" "}
                          <li>
                            <a
                              href="https://goo.gl/maps/uvqbLcahUEQymzxZA?coh=178571&entry=tt"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                No Tire Godoy{" "}
                              </h4>{" "}
                              <span
                                className="pr-4 "
                                style={{ textTransform: `capitalize` }}
                              >
                                <i
                                  className="fas fa-map-marker"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Dirección: Camino Pasos Malos.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: (011) 52462308
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: infoa@grupontg.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>{" "}
                          <ListSubheader>
                            <h3 style={{ color: `#722789` }}>Villa Mercedes</h3>
                          </ListSubheader>
                          <li>
                            <a
                              href="https://www.fermitour.tur.ar/"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Fermitur{" "}
                              </h4>{" "}
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: (2657)- 430569
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: info@fermitour.tur.ar
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <li>
                            <a
                              href="https://mododeviaje.tur.ar/#/"
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              <h4
                                style={{
                                  color: `#484547`,
                                  textTransform: `capitalize`,
                                }}
                              >
                                Modo de Viaje{" "}
                              </h4>{" "}
                              <span className="pr-4">
                                <i
                                  className="fas fa-phone"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Telefono: (2657) 629265
                              </span>
                              <br />
                              <span>
                                <i
                                  class="fas  fa-envelope"
                                  style={{ color: `#722789` }}
                                />
                                &nbsp; Email: mododeviajeturismo@gmail.com
                                <br />
                              </span>
                            </a>
                            <hr />
                          </li>
                          <ListSubheader>
                            <h3 style={{ color: `#722789` }}>Buenos Aires</h3>
                          </ListSubheader>
                          <li>
                            <h4
                              style={{
                                color: `#484547`,
                                textTransform: `capitalize`,
                              }}
                            >
                              Travel Services
                            </h4>{" "}
                            <span className="pr-4">
                              <i
                                className="fas fa-phone"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Telefono: 54 9 116705675
                            </span>
                            <br />
                            <span>
                              <i
                                class="fas  fa-envelope"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Email: acoto@travelservices.com
                              <br />
                            </span>
                            <hr />
                          </li>
                          <ListSubheader>
                            <h3 style={{ color: `#722789` }}>Rio Cuarto</h3>
                          </ListSubheader>
                          <li>
                            <h4
                              style={{
                                color: `#484547`,
                                textTransform: `capitalize`,
                              }}
                            >
                              Itinerarios
                            </h4>{" "}
                            <span
                              className="pr-4 "
                              style={{ textTransform: `capitalize` }}
                            >
                              <i
                                className="fas fa-map-marker"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Dirección: Sobremonte Norte 190
                            </span>
                            <br />
                            <span className="pr-4">
                              <i
                                className="fas fa-phone"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Telefono: 54 358 5044840
                            </span>
                            <br />
                            <span>
                              <i
                                class="fas  fa-envelope"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Email: reservas@itinerarios.tur.ar
                              <br />
                            </span>
                            <hr />
                          </li>
                          <ListSubheader>
                            <h3 style={{ color: `#722789` }}>Chile</h3>
                          </ListSubheader>
                          <li>
                            <h4
                              style={{
                                color: `#484547`,
                                textTransform: `capitalize`,
                              }}
                            >
                              Crystalis Travel
                            </h4>{" "}
                            <span
                              className="pr-4 "
                              style={{ textTransform: `capitalize` }}
                            >
                              <i
                                className="fas fa-map-marker"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Dirección: Profesora Amanda Labarca
                              Humberstone 442
                            </span>
                            <br />
                            <span className="pr-4">
                              <i
                                className="fas fa-phone"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Telefono: 56 228491354
                            </span>
                            <br />
                            <span>
                              <i
                                class="fas  fa-envelope"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Email: info@ctravelservice.com
                              <br />
                            </span>
                            <hr />
                          </li>
                          <li>
                            <h4
                              style={{
                                color: `#484547`,
                                textTransform: `capitalize`,
                              }}
                            >
                              Travela Way
                            </h4>{" "}
                            <span>
                              <i
                                class="fas  fa-envelope"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Email: pespinoza@travelaway.cl
                              <br />
                            </span>
                            <hr />
                          </li>
                          <li>
                            <h4
                              style={{
                                color: `#484547`,
                                textTransform: `capitalize`,
                              }}
                            >
                              Inkan Viajes
                            </h4>{" "}
                            <span className="pr-4">
                              <i
                                className="fas fa-phone"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Telefono: 56 9 31197068
                            </span>
                            <br />
                            <span>
                              <i
                                class="fas  fa-envelope"
                                style={{ color: `#722789` }}
                              />
                              &nbsp; Email: contacto@inkanviajes.cl
                              <br />
                            </span>
                            <hr />
                          </li>
                        </center>
                      </ul>
                    </li>
                    <hr></hr>
                  </List>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Tirolesas.contextType = Consumer;

export default Tirolesas;
