import React, { Component } from "react";
import axios from "axios";
import Loading from "../utils/Loading";
import { Consumer } from "../context";



class OficinasTurismo extends Component{

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          isNotFound: true,
          data: [],
          result:[],
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
          url: `${process.env.REACT_APP_API}/oficinas`,
          responseType: "json",
        })
          .then((response) => {
            self.setState({
              loading: false,
              isNotFound: false,
              result: response.data.data.registros
             
            }, () => {
              console.log(this.state.result)
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
        this.setState({
          loading: true
        }, () => {
          this.getData();
        });
      }
    
    
      render() {
       // const isNotFound = this.state.isNotFound;
       const {  result } = this.state;
        return (   
          <div className="PEventos">
            {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (

              <React.Fragment>
                <div className="container mb-5" />
                <div className="container">
                <div className="row mb-3" style={{ paddingTop: "150px" }}>

                  <div
                    className="ZonaDetalle-titulo"
                    style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                  >
                    <h3 style={{ color: `#722789` }}>Oficinas Turisticas</h3>
                  </div>
                <ul>
                {this.state.result.map(item => (
                           <ol key={item.iddepartamento}>
                            Ciudad: {item.nombre}<br/>
                            Domicilio: {item.domicilio}<br/>
                            Telefono: {item.telefono}<br/>
                            Email: {item.mail}<br/>
                            Interno: {item.interno}<br/>
                            Web: {item.web}<br/>
                            Responsable: {item.responsable}<br/><br/><br/>
                                </ol>
               ))}
               </ul>


               </div>
                </div>
              </React.Fragment>

      )}
            </div>
     );
   }
  }
    

  OficinasTurismo.contextType = Consumer;

 export default OficinasTurismo;