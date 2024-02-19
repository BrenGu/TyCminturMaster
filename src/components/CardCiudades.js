import React, { Component } from "react";
import ItemCardCiudades from "../components/ItemCardCiudades";
import { Consumer } from "../context";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

class CardCiudades extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      tipo: "",
      ciudades: [],
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
      url: `${process.env.REACT_APP_API}/${this.state.tipo}/ciudades`,
      responseType: "json",
    })
      .then((response) => {
        self.setState({
          loading: false,
          isNotFound: false,
          ciudades: response.data.data.registros,
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
    if (
      this.props.data !== prevProps.data ||
      this.props.tipo !== prevProps.tipo
    ) {
      this.setState({
        loading: false,
        data: this.props.data,
        tipo: this.props.tipo,
      });
    }
  }

  componentDidMount() {
    this.setState(
      {
        data: this.props.data,
        tipo: this.props.tipo,
        loading: false,
      },
      () => {
        this.getData();
      }
    );
  }

  render() {
    const listadoElementos = this.state.ciudades.map((nov) => {
      let alqxcities = this.state.data.filter((x) => x.ciudad === nov.ciudad);
      return (
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
              <li key={`nueva_zona${nov.id}`}>
                <ul>
                  <ListSubheader>
                    <h3 style={{ color: `#722789` }}>{`${nov.ciudad}`}</h3>
                  </ListSubheader>
                  <ListItem key={`item-nueva_zona${nov.id}`}>
                    <li
                      key={`nueva_zona${nov.id}`}
                      style={{ listStyleType: "none" }}
                    >
                      <ItemCardCiudades
                        data={alqxcities}
                        tipo={this.state.tipo}
                      />
                    </li>
                  </ListItem>
                </ul>
              </li>
              <hr></hr>
            </List>
            {/* <img
              alt="fotoCiudad"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
              src={`${process.env.REACT_APP_API}/recursos/ciudadesFotos/${nov.foto}`}
            />
          <button
              className="btn btn-dark btn-block"
              type="button"
              data-toggle="collapse"
              data-target={`#nueva_zona${nov.id}`}
              aria-expanded="false"
              aria-controls={`nueva_zona${nov.id}`}
              style={
                nov.ZonaId === "1"
                  ? {
                      backgroundColor: "#bf3276",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "4"
                  ? {
                      backgroundColor: "#cb6120",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "5"
                  ? {
                      backgroundColor: "#a2bd31",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "8"
                  ? {
                      backgroundColor: "#326534",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "9"
                  ? {
                      backgroundColor: "#e5b449",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "10"
                  ? {
                      backgroundColor: "#a01127",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "11"
                  ? {
                      backgroundColor: "#618dc5",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : nov.ZonaId === "12"
                  ? {
                      backgroundColor: "#5ea099",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }
                  : ""
              }
            >
              {nov.ciudad}
            </button>
            <div className="collapse" id={`nueva_zona${nov.id}`}>
              <div className="card card-body">
                <div className="row">
                  <div
                    className="col-md-10"
                    style={
                      nov.ZonaId === "1"
                        ? {
                            color: "#bf3276",
                          }
                        : nov.ZonaId === "4"
                        ? {
                            color: "#cb6120",
                          }
                        : nov.ZonaId === "5"
                        ? {
                            color: "#a2bd31",
                          }
                        : nov.ZonaId === "8"
                        ? {
                            color: "#326534",
                          }
                        : nov.ZonaId === "9"
                        ? {
                            color: "#e5b449",
                          }
                        : nov.ZonaId === "10"
                        ? {
                            color: "#a01127",
                          }
                        : nov.ZonaId === "11"
                        ? {
                            color: "#618dc5",
                          }
                        : nov.ZonaId === "12"
                        ? {
                            color: "#5ea099",
                          }
                        : ""
                    }
                  >
                    <div className="form-group">
                      <div className="atractivo-info">
                        <ItemCardCiudades
                          data={alqxcities}
                          tipo={this.state.tipo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          <br />
        </div>
      );
    });
    return <React.Fragment>{listadoElementos}</React.Fragment>;
  }
}

CardCiudades.contextType = Consumer;

export default CardCiudades;
