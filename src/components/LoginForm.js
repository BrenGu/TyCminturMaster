import React, { Component } from "react";
import UserRegistration from "./RegistroUsuario";
import Msg from "../utils/Msg";
import GustoASanLuis from "../utils/images/gusto-a-san-luis.png";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test@gmail.com",
      password: "qwerty123",
      register: false,
      usuarios: {
        data: [
          {
            id: 0,
            email: "",
            password: "",
            nombre: "",
            activo: -1,
          },
        ],
      },
      msg: {
        visible: false,
        body: "",
      },
    };
  }

  componentDidMount() {
    //Get usuarios
    fetch(`${process.env.REACT_APP_API}/usersGastronomicos`, {
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
              };
            });
            this.setState(
              {
                usuarios: {
                  data: setX,
                },
              },
              () => {
                //console.log(this.state.usuarios)
              }
            );
          } else {
            // this.setState({
            //   MsgVisible: true,
            //   MsgBody: result.errMsg,
            // });
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

  handleRegister = () => {
    this.setState({
      register: !this.state.register,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Validar los datos
    let userEmail = this.state.username;
    let userPass = this.state.password;

    let usuarios = this.state.usuarios.data;

    let user = usuarios.find((u) => u.email === userEmail);

    console.log(user);

    //Login correcto
    if (user && userPass == user.password) {
      this.props.okLogin();
    } else {
      //Credenciales invalidas
      let errMsg = "No se ha podido acceder. Verifique usuario y contraseña.";

      this.setState({
        msg: {
          visible: true,
          body: errMsg,
        },
      });
    }
  };

  render() {
    const register = this.state.register;
    return (
      <>
        {register ? (
          <UserRegistration handleRegister={this.handleRegister} />
        ) : (
          <>
          <div className="col-md-4 offset-md-4">
            <div className="img-title-login">
                <img className="" src={GustoASanLuis} />
              </div>
          </div>

          <div className="row justify-content-center ">          
            <div className="col-md-3 login-border ">
              <h3 className="">Iniciar sesión</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">E-mail:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="row justify-content-center">
                  <button className="btn btn-primary btn-login" type="submit">
                    Ingresar
                  </button>
                </div>
                <div className="row justify-content-center">
                  <p id="emailHelp" class="form-text text-muted">
                    No tienes usuario aun?
                    <button
                      type="button"
                      class="btn btn-link"
                      onClick={this.handleRegister}
                    >
                      Registrate
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
        )}

        <Msg
          visible={this.state.msg.visible}
          okClose={() =>
            this.setState({ msg: { ...this.state.msg, visible: false } })
          }
          okAceptar={null}
          tipo="0"
        >
          {this.state.msg.body}
        </Msg>
      </>
    );
  }
}

export default LoginForm;
