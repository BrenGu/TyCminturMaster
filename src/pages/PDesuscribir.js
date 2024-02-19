import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";


class PDesuscribir extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
        msg: "",
        email: "",
        visible: "none",
        newsletters: []
    };   
    this.handleChange = this.handleChange.bind(this);
    this.desuscribir = this.desuscribir.bind(this);
    this.verificar = this.verificar.bind(this);
  }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

        if(this.state.msg !== ""){
        this.setState({
            msg: "",
            visible: "none"
        });
        }
    }

    verificar(){
        const token = this.context.token;
        var self = this;
        let {email} = self.state;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
            axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/newsletter/activos`,
                responseType: 'json'
            })
            .then((response) => {
              self.setState({
                newsletters: response.data.data.registros
            }, () => {
              let cant = self.state.newsletters.filter(x => x.email === self.state.email);
              if(cant.length !== 0){
                self.setState({
                   id: cant[0].id
                }, () => {
                    self.desuscribir();
                });
              }else{
                self.setState({
                  msg: "Email no encontrado",
                  visible: "inline"
                });
              }
            });
            })
            .catch((error) => {
                console.log(error);
            });

        }else{
            self.setState({
                msg: "Ingrese un mail correctamente",
                visible: "inline"
            });    
        }
    }

  desuscribir(){
    const token = this.context.token;

    axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API}/newsletter/${this.state.id}`,
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        },
        data: {
          id: this.state.id
        }
      }).then((response) => {
            this.setState({
                msg: "Se completo la desuscripción correctamente",
                visible: "inline"
            }); 
        })
        .catch((error) => {
            console.log(error);
            this.setState({
                msg: "Error",
                visible: "inline"
        });
    });
  }

  componentDidMount() {
    this.setState({
        visible: "none"
      });
  }

  render() {
    
    return (    
        <React.Fragment>
        <div className="PDesuscribir container">
            <div className="DesHeader">
                <h3 style={{color: `#722789`}}>Lamentamos mucho que quiera desuscribirse. Para completar la desuscripción ingrese su email a continuación: </h3>
            </div>
            <div className="DesMsg" style={{display: this.state.visible}}>
                <h3>{this.state.msg}</h3>
            </div>
            <div className="DesBody">
                <center>
                    <input type="email" className="DesEmail form-control" placeholder="* Email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </center>               
                <button className="DesConfirm" onClick={() => this.verificar()}>Confirmar desuscripción</button>
            </div>
        </div>
      </React.Fragment>    
        
    );
  }
}

PDesuscribir.contextType = Consumer;

export default PDesuscribir;
