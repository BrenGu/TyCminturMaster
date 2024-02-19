import React, { Component } from "react";
import { Link } from "react-router-dom";
import ZonasMenu from "./subcomponentes/ZonasMenu";
import WeatherCard from "./WeatherCard";
//import Phome from "../pages/PHome";
//import { Fragment } from "react";
//import { SelectPicker } from "rsuite";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ocultar: 0,
      nav: "navbar navbar-expand-lg navbar-light Menu",
      mov: 0,
      selec: null,
      idSubMenu: 1,
      lista: true,
      visibleMenu: false,
      mostrar: "block",
      isLoaded: false,
      newMode: false,
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
      filtro: "",
      verLista: false,
      MsgVisible: false,
      MsgBody: "",
      clase: "Menu",
      showAt: 45,
      climaShow: false,
    };

    this.link = React.createRef();
    this.cambiar = this.cambiar.bind(this);
    this.handleFiltroClick = this.handleFiltroClick.bind(this);
    this.handleBusquedaChange = this.handleBusquedaChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.fireNew = this.fireNew.bind(this);
    this.setMenu = this.setMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleFormError = this.handleFormError.bind(this);
    this.handleFormOk = this.handleFormOk.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.selectFirsElement = this.selectFirsElement.bind(this);
    this.closeLista = this.closeLista.bind(this);
  }

  closeLista() {
    // console.log("close lista");
    this.setState({
      lista: false,
    });
  }
  //selecciona la localidad con el tipeo de la felcha
  selectFirsElement() {
    // console.log("Seleccionar primero" );
    //let select = document.getElementsByName(0);

    let selec = document.getElementsByName(this.state.mov);
    // console.log(this.state.mov);
    selec.forEach((e) => {
      //console.log(e);
      this.setState({
        mov: -1,
      });
      //this.state.mov = -1;
      e.style = "";
    });
  }

  setValueInput() {
    let text = document.getElementById("buscar");

    text.value = "";
  }
  selectOption(event) {
    this.state.lista = true;
    var lin = this.link.current;
    let key = event.key;

    //console.log(key);

    switch (key) {
      //presion boton abajo
      case "Backspace":
        this.selectFirsElement();
        break;

      case "Enter":
        if (this.state.selec != null) {
          let select = document.getElementsByName(this.state.mov - 1);
          select.forEach((e) => {
            e.style = "";
          });

          this.state.mov = -1;
          // console.log(this.state.selec.id);
          if (window.location.hostname === "localhost") {
            window.location.href = `http://localhost:3000/#${this.state.selec.id}`;
          } else {
            window.location.href = `http://turismo.sanluis.gov.ar/#${this.state.selec.id}`;
          }
          this.cambiar();
        }
        break;
      case "ArrowDown":
        if (
          this.state.mov <
          document.getElementsByClassName("linkBusqueda").length - 1
        ) {
          this.state.mov++;

          //console.log(this.state.mov);
          //console.log(document.getElementsByName("links").length);
          let select = document.getElementsByName(this.state.mov);
          select.forEach((e) => {
            this.state.selec = e;
            // console.log(e);

            e.style = "text-decoration-line: underline ; font-size: 18px;";
          });
          // console.log(this.state.selec.id);
        }
        if (true) {
          let select = document.getElementsByName(this.state.mov - 1);
          select.forEach((e) => {
            // console.log(e);

            e.style = "";
          });
        }

        break;

      //flecha hacia arriba
      case "ArrowUp":
        // console.log(key);
        if (this.state.mov !== 0) {
          this.state.mov--;
          // console.log(this.state.mov);
          //console.log(document.getElementsByName("links").length);
          let select = document.getElementsByName(this.state.mov);
          select.forEach((e) => {
            // console.log(e);
            this.state.selec = e;

            e.style = "text-decoration-line: underline ; font-size: 18px;";
          });

          //console.log(document.getElementsByName(this.state.mov));
        }
        if (true) {
          let select = document.getElementsByName(this.state.mov + 1);
          select.forEach((e) => {
            //console.log(e);
            e.style = "";
          });
        }

        break;
    }
  }

  cambiar() {
    this.setState({ mostrar: "none" });
    this.setValueInput();
  }
  //funcion para ocultar el las opciones desplegadas
  closeMenu() {
    // console.log("close");
    if (this.state.ocultar === 0)
      this.setState(
        {
          visibleMenu: false,
        },
        () => {
          this.cambiar();
        }
      );
  }

  setMenu(id) {
    this.closeLista();

    if (this.state.visibleMenu === false || id !== this.state.idSubMenu) {
      this.setState(
        {
          visibleMenu: true,
        },
        () => {
          this.cambiar();
        }
      );
    }
    this.state.idSubMenu = id;
  }
  fireNew() {
    this.setState({
      localidades: {
        ...this.state.localidades,
        selected: 0,
      },
      newMode: true,
    });
  }

  handleFormError(msg) {
    let msgshow = "";
    if (Array.isArray(msg)) {
      msgshow = msg.join(", ");
    } else {
      msgshow = msg;
    }
    this.setState({
      MsgVisible: true,
      MsgBody: msgshow,
    });
  }

  handleFormOk(registro) {
    registro = JSON.parse(registro);
    if (registro.id === 0) {
      this.handleNew(registro);
    } else {
      this.handleSave(registro);
    }
  }

  handleFormCancel() {
    this.setState({ newMode: false });
  }

  handleNew(registro) {
    //La Api devuelve insertId
    fetch(`${process.env.REACT_APP_API_HOST}/ciudad`, {
      method: "POST",
      headers: {
        Authorization: "asdssffsdff",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registro),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            this.setState(
              {
                newMode: false,
                MsgVisible: true,
                MsgBody: "La Localidad se agregó correctamente.",
              },
              () => {
                this.componentDidMount();
                //Esto posiblemente no funcione bien
                /*
                this.setState({
                    localidades: {
                        selected: result.insertId
                    }
                })
                */
              }
            );
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsgs.join(", "),
            });
          }
        },
        (error) => {
          //???
          this.setState({
            MsgVisible: true,
            MsgBody: error,
          });
        }
      );
  }

  handleSave(registro) {
    fetch(`${process.env.REACT_APP_API_HOST}/ciudad/${registro.id}`, {
      method: "PATCH",
      headers: {
        Authorization: "asdssffsdff",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registro),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            this.setState({
              MsgVisible: true,
              MsgBody: "Los datos se actualizaron correctamente.",
            });
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsgs.join(", "),
            });
          }
        },
        (error) => {
          //???
          this.setState({
            MsgVisible: true,
            MsgBody: error,
          });
        }
      );
  }

  //Metodo que filtra las localidades
  handleBusquedaChange(event) {
    // console.log("change");
    let valor = event.target.value;

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
        mostrar: "block",
      });
    });
  }

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

  componentDidMount() {
    //Lista de Localidades

    fetch(`${process.env.REACT_APP_API}/ciudades`, {
      method: "GET",
      headers: {
        Authorization: "asdssffsdff",
        //"Content-Type": "application/json"
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
                this.handleFiltroClick(this.state.localidades.selected);
                window.onscroll = () => {
                  var menu = document.getElementById("nav");
                  if (
                    document.body.scrollTop > this.state.showAt ||
                    document.documentElement.scrollTop > this.state.showAt
                  ) {
                    if (menu) {
                      this.setState({
                        clase: "sticky",
                      });
                    }
                  } else {
                    if (menu) {
                      this.setState({
                        clase: "Menu",
                      });
                    }
                  }
                };
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
          //???
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    var cont = 0;

    const filtro = this.state.localidades.data.map((lf) => {
      this.selectFirsElement();
      if (lf.visible === true) {
        return (
          // active

          <li
            value=""
            key={`lloc-${lf.id}`}
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
              onClick={() => this.closeLista()}
            >
              {lf.nombre}{" "}
            </Link>
          </li>
        );
      }
    });
    return (
      <React.Fragment>
        <nav className={`navbar navbar-expand-lg ${this.state.clase}`} id="nav">
          <Link
            to="/"
            data-toggle="tooltip"
            data-placement="top"
            title="Menu principal "
            className="link-menu mr-3 linkHome"
          >
            <i className="fas fa-home" />
          </Link>
          <div className="logoGob2 animated bounceInDown delay-2s" style={{}}>
            <Link to="/" className="link-menu  ">
              <img
                src={`${process.env.REACT_APP_API}/recursos/icons/logo-gobierno-blanco-sin-frase.png`}
                alt="San Luis"
              />
            </Link>
          </div>
          <button
            id="toggle"
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.closeMenu()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              {/*
              <li className="nav-item link-menu">
                <span
                  className="nav-link"
                  onMouseOver={(e) => this.setMenu(4, e)}
                >
                  ¿QUÉ HACEMOS?
                </span> <li
                className="nav-item link-menu"
                onMouseOver={(e) => this.setMenu(1, e)}
              >
                <span className="nav-link">¿QUÉ VISITAMOS?</span>
              </li>
              </li>*/}
              <li className="nav-item link-menu">
                <span
                  className="nav-link"
                  onMouseOver={(e) => this.setMenu(2, e)}
                >
                  ¡A PLANIFICAR!
                </span>
              </li>
              <li className="nav-item link-menu">
                <span
                  className="nav-link"
                  onMouseOver={(e) => this.setMenu(5, e)}
                >
                  INSTITUCIONAL
                </span>
              </li>

              <li className="nav-item">
                <div className="containeres">
                  <input
                    onKeyDown={(e) => this.selectOption(e)}
                    onClick={(e) => this.closeMenu(e)}
                    type="text"
                    holder="Buscar localidades..."
                    id="buscar"
                    className="buscador input form-control  "
                    value={this.state.filtro}
                    onChange={this.handleBusquedaChange}
                    autoComplete="off"
                  />
                  <div
                    className="search"
                    onClick={() => this.closeLista()}
                  ></div>
                </div>
                {this.state.lista ? (
                  <ul className="listaBusqueda ">{filtro}</ul>
                ) : (
                  ""
                )}
              </li>
              {/*<li className="nav-item">
                <div className="containeres">
                  <button onClick={() => {this.setState({climaShow: !this.state.climaShow})}}>Clima</button>
                </div>
              </li>
              {
                this.state.climaShow?
                  <WeatherCard />
                :""
              }
            */}
            </ul>

            {/*<ul>
              <div className="logo mt-3">
                <a
                  className="alink link-menu"
                  href="https://www.facebook.com/turismodesanluis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="redes fab fa-facebook animated bounceInDown delay-2s"
                    style={{ right: "50px" }}
                  />
                </a>
                <a
                  className="alink link-menu"
                  href="https://twitter.com/TurismoSanLuis_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="redes fab fa-twitter animated bounceInDown delay-2s"
                    style={{ right: "80px" }}
                  />
                </a>
                <a
                  className="alink link-menu"
                  href="https://www.instagram.com/turismo_san_luis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="redes fab fa-instagram animated bounceInDown delay-2s" />
                </a>
                <Link
                  to="/"
                  className="link-menu  animated bounceInDown delay-2s"
                >
                  <img
                    src={`https://i.ibb.co/ft02QmL/SAN-LUIS-TURISMO-FULL-COLOR-TRANSP.png`}
                    alt="San Luis"
                  />
                </Link>
              </div>
            </ul>*/}
            <span className="navbar-text mr-5">
              <div
                className="logoGob animated bounceInDown delay-2s"
                style={{}}
              >
                <Link to="/" className="link-menu  ">
                  <img
                    src={`${process.env.REACT_APP_API}/recursos/icons/logo-gobierno-blanco-sin-frase.png`}
                    alt="San Luis"
                  />
                </Link>
              </div>
            </span>
          </div>
          {this.state.visibleMenu ? (
            <div
              id="toggle"
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => this.closeMenu()}
              className={`menu-visita-container${this.state.clase} animated fadeIn`}
              onMouseLeave={(e) => this.closeMenu(e)}
              /*style={{background: "rgb(114,39,137)",
            background: "-moz-linear-gradient(left, rgba(114,39,137,1) 0%, rgba(237,15,104,0.8) 100%)",
            background: "-webkit-linear-gradient(left, rgba(114,39,137,1) 0%,rgba(237,15,104,0.8) 100%)",
            background: "linear-gradient(to right, rgba(114,39,137,1) 0%,rgba(237,15,104,0.8) 100%)"}}
            */
            >
              <div className="menu-visita">
                <ZonasMenu
                  idMenu={this.state.idSubMenu}
                  onZonaClick={this.closeMenu}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      </React.Fragment>
    );
  }
}

export default Menu;
