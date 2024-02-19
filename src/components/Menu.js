import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../utils/images/logo-san-luis.png"; //  src/images
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
//import {LinkContainer} from "react-router-bootstrap"

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lista: true,
      mov: 0,
      selec: null,
      mostrar: "inline-block",
      filtro: "",
      localidades: {
        data: [
          {
            id: 0,
            nombre: "Cargando...",
            visible: true,
          },
        ],
        selected: 0,
      },
    };

    this.link = React.createRef();
    this.cambiar = this.cambiar.bind(this);
    this.handleBusquedaChange = this.handleBusquedaChange.bind(this);
    this.handleFiltroClick = this.handleFiltroClick.bind(this);
    this.cancelBusqueda = this.cancelBusqueda.bind(this);
    this.closeLista = this.closeLista.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Lista de localodades
    fetch(`${process.env.REACT_APP_API}/ciudades`, {
      method: "GET",
      headers: {
        Authorization: "asdssffsdff",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            var setX = result.data.registros.map((v) => {
              return {
                ...v,
                visible: false,
              };
            });
            this.setState(
              {
                localidades: {
                  data: setX,
                  selected: setX[0].id,
                },
              },
              () => {
                //this.handleFiltroClick(this.state.localidades.selected);
                //this.menuMode();
              }
            );
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsg,
            });
          }
        },
        (error) => {
          this.setState({
            loading: true,
            error,
          });
        }
      );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  cancelBusqueda() {
    this.setState({ lista: false });
  }

  //Disabled
  // menuMode() {
  //   window.onscroll = () => {
  //     var menu = document.getElementById("nav");
  //     if (
  //       document.body.scrollTop > this.state.showAt ||
  //       document.documentElement.scrollTop > this.state.showAt
  //     ) {
  //       if (menu) {
  //         this.setState({
  //           clase: "sticky",
  //         });
  //       }
  //     } else {
  //       if (menu) {
  //         this.setState({
  //           clase: "Menu",
  //         });
  //       }
  //     }
  //   };
  // }

  smallNavbar() {
    //When user scrolls
    //document.getElementById("nav").style.position = "fixed";
    //document.getElementById("nav").style.minHeight = "100px";
    //document.getElementById("nav").style.backgroundRepeat = "no-repeat";

    document.getElementById("nav").style.top = "0px";
  }

  bigNavbar() {
    // When user is on the top
    //document.getElementById("nav").style.position = "fixed";
    //document.getElementById("nav").style.width = "100%";

    //Si el top bar desaparece, subimos el nav a top 0.
    if (window.innerWidth > 991) {
      document.getElementById("nav").style.top = "40px";
      //document.getElementById("nav").style.minHeight = "120px";
    } else {
      document.getElementById("nav").style.top = "0px";
      //document.getElementById("nav").style.minHeight = "90px";
    }
  }

  //Fade between small and big navbar
  handleScroll = () => {
    if (window.scrollY > 40) {
      //Small Navbar
      this.smallNavbar();
    } else {
      //Big Navbars
      if (window.innerWidth > 350) {
        this.bigNavbar();
      } else {
        this.smallNavbar();
      }
    }
  };

  handleFiltroClick(id) {
    this.setState(
      {
        localidades: {
          ...this.state.localidades,
          selected: id,
          visible: false,
        },
      },
      () => {
        if (window.scrollY > 350) {
          window.scrollTo(0, 140);
        }
      }
    );
  }

  selectOption(event) {
    this.state.lista = true;

    let text = document.getElementById("buscar");

    if (text.length == 0) {
      this.cancelBusqueda();
    }
  }

  setValueInput() {
    let text = document.getElementById("buscar");

    text.value = "";
  }

  cambiar() {
    this.setState({ mostrar: "inline" });
    this.setValueInput();
  }

  closeLista(clickedValue) {
    document.getElementById("buscar").value = clickedValue;
    this.setState({
      lista: false,
    });
  }

  handleBusquedaChange(event) {
    let valor = event.target.value;
    //Oculta lista al borrar el contenido del buscador
    if (valor == "") {
      this.setState({
        lista: false,
      });
    }
    this.setState({ filtro: valor }, () => {
      var copy = Object.assign([], this.state.localidades.data);
      copy = copy.map((d) => {
        if (d.nombre.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
          d.visible = true;
          return d;
        } else {
          d.visible = false;
        }
        return d;
      });
      this.setState({
        localidades: {
          ...this.state.localidades,
          data: copy,
          selected: 1,
        },
        mostrar: "inline-block",
      });
    });
  }

  render() {
    var cont = 0;
    //var localidad = "";

    const filtro = this.state.localidades.data.map((lf) => {
      //this.selectFirstElement();
      if (lf.visible === true) {
        return (
          <li
            value=""
            key={`lloc-${lf.id}`}
            className="linkBusqueda"
            ref={this.link}
            onClick={this.cambiar}
            to={`/localidad/${lf.id}`}
            style={{ textDecoration: "none" }}
          >
            <Link
              id={`/localidad/${lf.id}`}
              className="liLista"
              name={cont++}
              to={`/localidad/${lf.id}`}
              onClick={() => this.closeLista(lf.nombre)}
            >
              {lf.nombre}{" "}
            </Link>
          </li>
        );
      }
    });

    return (
      <React.Fragment>
        <div className="menuNew">
          <Navbar
            bg="navbar"
            variant="dark"
            id="nav"
            sticky="top"
            expand="lg"
            collapseOnSelect
          >
            <Navbar.Brand className="">
              <a href={"/"}>
                <img id="logoscroll" src={Logo} alt="San Luis" className="" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              data-bs-target="#responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="justify-content-center flex-grow-1  ">
                <NavDropdown
                  renderMenuOnMount={false}
                  title="Organizá tu viaje"
                  //id="collasible-nav-dropdown"
                  className=""
                >
                  <NavDropdown.Item href="#/filtroalojamiento">
                    Hospedaje
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/listado-guias-agencias-covid/guiasturismo">
                    Guías de Turismo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/listado-guias-agencias-covid/agencias">
                    Agencias de Viaje
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/agencia-vuelos">
                    Vuelos a Chile
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#/PPrincipalGastronomia">
                    Gastronomía
     </NavDropdown.Item>*/}
                </NavDropdown>
                <div className="nav-space"></div>
                <NavDropdown
                  //renderMenuOnMount={true}
                  title="Conocé San Luis"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#/tirolesas">
                    Tirolesas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/parques-provinciales">
                    Parques Provinciales
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/atractivo/235">
                    Parque Nacional
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/termas-salinas">
                    Termas y Salinas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/caminos-pintorescos">
                    Caminos Pintorescos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/Diques">
                    Diques Y Embalses
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/riosysaltos">
                    Ríos y Saltos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/PCreerGnral">
                    Iglesias
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="nav-space"></div>
              
                <NavDropdown
                  //renderMenuOnMount={true}
                  title="Institucional"
                  id="collasible-nav-dropdown"
                ><NavDropdown.Item href="#/eventos">
                Eventos
              </NavDropdown.Item>
              <NavDropdown.Divider />
                  <NavDropdown.Item href="#/listadoEstadisticas">
                    Estadísticas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeK3j4XzI6Qo_AzMjEsItrGx8n3Ui2S8cYA18dFOI4xWs99wQ/viewform"
                  >
                    Formulario para Guías
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/novedades">
                    Prensa Turistíca
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/Pcontacto">
                    Contacto
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="nav-space"></div>
                <div className="buscador-container">
                  <input
                    onKeyDown={(e) => this.selectOption(e)}
                    id="buscar"
                    type="text"
                    placeholder="Buscá..."
                    autoComplete="off"
                    className="buscador-destino buscador-icon"
                    value={this.state.filtro}
                    onChange={this.handleBusquedaChange}
                  />
                  {this.state.lista ? (
                    <ul className="ul-busqueda " onBlur={this.cancelBusqueda}>
                      {filtro}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
export default Menu;
