import React, { Component } from "react";
import axios from "axios";
//import Alert from 'react-bootstrap/Alert'
//import { Consumer } from "../../context";

export default class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      visible: "none",
      email: "",
      newsletters: [],
      msg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(id) {
    axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API}/newsletter/${id}`,
      data: {
        email: this.state.email,
        activo: 1
      }
    }).then((response) => {
          this.setState({
            msg: "Mail registrado con exito"
          }); 
      })
      .catch((error) => {
          console.log(error);
      });
  }


  handleNew() {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/newsletter`,
      data: {
        email: this.state.email
      }
    }).then((response) => {
          this.setState({
            msg: "Mail registrado con exito"
          }); 
      })
      .catch((error) => {
          console.log(error);
      });
  }

  componentDidMount() {
    this.setState({
      visible: "flex"
    });
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
          url: `${process.env.REACT_APP_API}/newsletter/all`,
          responseType: 'json'
      })
      .then((response) => {
        self.setState({
          newsletters: response.data.data.registros,
          loading: false
      }, () => {
        let res1 = self.state.newsletters.filter(x => x.email === self.state.email && x.activo === "0");
        let res2 = self.state.newsletters.filter(x => x.email === self.state.email && x.activo === "1");
        if(res1.length === 1){
          var id = res1["0"].id;
          self.handleSave(id);
        }else if(res1.length === 0 && res2.length === 0){
          self.handleNew();    
        }else{
          this.setState({
            msg: "Ese email ya existe"
          });
        }
      });
      })
      .catch((error) => {
          console.log(error);
      });
    }else{
      this.setState({
        msg: "Mail incorrecto"
      });    
    }
  }

  closeModal() {
    this.setState({
      visible: "none",
    });
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
        msg: ""
      });
    }
}

  render() {

    return (
      <React.Fragment>
        {//<div className="container newsletter" >
         } 
        <div className="container newsletter" style={{display: this.state.visible}} >
         <div className="newsletterFullBody">
            <div className="newsHeader"> {/*row */}
            <div className="buttonX"><button  style={{right: 0, border: "none", background: "none", cursor: "pointer"}} onClick={() => this.closeModal()}><i className="fas fa-times buttonX"></i></button> </div>
              <div className="col-10"><span className="newsTitle"><i class="far fa-newspaper"></i> Sumate al Newsletter <i class="far fa-newspaper"></i></span></div>
            </div>
            <div className="newsBody">
              <div className="col">{
                  this.state.msg === "" ?
                  <input type="hidden" disabled className="newsMsg form-control" id="msg" name="text" value={this.state.msg}/>              
                :
                  <input type="text"  disabled className="newsMsg form-control" id="msg" name="text" value={this.state.msg}/>
              }  
              </div>
            </div>
            <br></br>
            <div className="">
              <div className="col">
                <input type="email" className="newsEmail form-control" placeholder="* Email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
              </div>
            </div>
            <br></br>
            <div className=" newsFooter">
              <div className="col"><button className="newsFooterButton" onClick={() => this.verificar()}>Enviar</button></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

//Newsletter.contextType = Consumer;