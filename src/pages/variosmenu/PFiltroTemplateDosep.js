import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Loading from "../../utils/Loading";
import Gastronomicos from "../../components/subcomponentes/Gastronomicos";
import Alojamientos from "../../components/subcomponentes/Alojamientos";
import { Link } from "react-router-dom";


class PFiltroTemplateDosep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,

            localidades: [],
            tipos: [],
            gastronomicos: [],
            alojamientos: [],
            filtro: [],

            idlocalidad: 0,
            idtipo: 0,
            nombreGastro:"",
            nombreAloja: "",
            categoria:""
        };
        this.getDataGastronomia = this.getDataGastronomia.bind(this);
        this.getDataAlojamientos = this.getDataAlojamientos.bind(this);
        this.handleChange = this.handleChange.bind(this);
       // this.volverAtras = this.volverAtras.bind(this);
        this.aplicarFiltroGastronomia = this.aplicarFiltroGastronomia.bind(this);
        this.aplicarFiltroAlojamiento = this.aplicarFiltroAlojamiento.bind(this);
     }

    aplicarFiltroGastronomia() {
        let { idlocalidad, idtipo, nombreAloja} = this.state;
        idlocalidad = parseInt(idlocalidad, 10);
        idtipo = parseInt(idtipo, 10);
        let filtrado = this.state.gastronomicos.filter((value) => {
            let respuesta = true;
            //console.log("Nuevo valor: " + value);
            //Validar la Localidad seleccionada
            if(idlocalidad !== 0) {
                if(parseInt(value.idciudad, 10) !== idlocalidad) {
                    respuesta = false;
                }
            }
            //Validar el Tipo seleccionado
            if(idtipo !== 0) {
                if(parseInt(value.idtipo, 10) !== idtipo) {
                    respuesta = false;
                }
            }
            //Validar Nombre
            if(nombreAloja.length) {
                if(value.nombre.toLowerCase().search(nombreAloja.toLowerCase()) === -1) {
                    respuesta = false;
                }
            }
        
            return respuesta;
        });
        this.setState({
            //Aca estoy metiendo en el estado filtro el array de gastronomicos filtrado.
            filtro: filtrado
        });
    }

    aplicarFiltroAlojamiento() {
        let { idlocalidad, idtipo, nombreAloja} = this.state;
        idlocalidad = parseInt(idlocalidad, 10);
        idtipo = parseInt(idtipo, 10);
        let filtrado = this.state.alojamientos.filter((value) => {
            let respuesta = true;
            //console.log("Nuevo valor: " + value);
            //Validar la Localidad seleccionada
            if(idlocalidad !== 0) {
                if(parseInt(value.idciudad, 10) !== idlocalidad) {
                    respuesta = false;
                }
            }
            //Validar el Tipo seleccionado
            if(idtipo !== 0) {
                if(parseInt(value.idtipo, 10) !== idtipo) {
                    respuesta = false;
                }
            }
            //Validar Nombre
            if(nombreAloja.length) {
                if(value.nombre.toLowerCase().search(nombreAloja.toLowerCase()) === -1) {
                    respuesta = false;
                }
            }
        
            return respuesta;
        });
        this.setState({
            //Aca estoy metiendo en el estado filtro el array de Alojamientos filtrado.
            filtro: filtrado
        });
    }




    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        },
        () => {
          if (this.state.categoria == "alojamientos")
          {this.aplicarFiltroAlojamiento();}
          if (this.state.categoria == "gastronomia")
          {this.aplicarFiltroGastronomia();}

        });
    }

    async getDataGastronomia() {
        await this.setState({loading: true});

        try {
            let token = this.context.token;
            let self = this;
            //Todas las Localidades
            await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/ciudades`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    response.data.data.registros.unshift({
                        id: 0,
                        nombre: "Todas las Localidades",
                        departamento: "S/N"
                    });
                    self.setState({
                        localidades: response.data.data.registros
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });


            //Todos los Tipos de Alojamiento
        {/*    await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/tipos`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    response.data.data.registros.unshift({
                        id: 0,
                        descripcion: "Todos los Tipos"
                    });
                    self.setState({
                        tipos: response.data.data.registros
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        */}
                       
            //Todos los gastronomicos
            await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/gastronomia/adhiereDosep`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    self.setState({
                        gastronomicos: response.data.data.registros,
                        filtro: response.data.data.registros,
                        loading: false
                    });
                }else {console.log ("no se encontraron registros");}
            })
            .catch((error) => {
                console.log(error);
            });
        } 
        
        catch(err) {
            // catches errors both in fetch and response.json
            console.log(err);
        }




    }

    async getDataAlojamientos() {
        await this.setState({loading: true});
        try {
            let token = this.context.token;
            let self = this;
            //Todas las Localidades
            await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/ciudades`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    response.data.data.registros.unshift({
                        id: 0,
                        nombre: "Todas las Localidades",
                        departamento: "S/N"
                    });
                    self.setState({
                        localidades: response.data.data.registros
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
            //Todos los Tipos de Alojamiento
            await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/tipos`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    response.data.data.registros.unshift({
                        id: 0,
                        descripcion: "Todos los Tipos"
                    });
                    self.setState({
                        tipos: response.data.data.registros
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
            //Todos los Alojamientos
            await axios({
                method: "get",
                headers: {
                    "Authorization": token
                },
                url: `${process.env.REACT_APP_API}/guias/adhiereDosep`,
                responseType: "json"
            })
            .then((response) => {
                if(response.data.data.count > 0) {
                    self.setState({
                        alojamientos: response.data.data.registros,
                        filtro: response.data.data.registros,
                        loading: false
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } catch(err) {
            // catches errors both in fetch and response.json
            console.log(err);
        }
    }

    /*volverAtras(categ){
 
            
            if (categ == "gastronomia")
                {this.getDataGastronomia(0);}
            if (categ == "alojamientos")
            
       
                {alert(categ);
                    this.getDataAlojamientos(0);}
    
    }*/
    componentDidUpdate(prevProps) {
        if (
          this.props.location.categoria !== prevProps.location.categoria
        ) {
          this.setState({
            categoria: this.props.location.categoria
        },
        ()=> { 
           
            if (this.state.categoria === undefined)
            {this.setState({
                loading: false
            })}
            if (this.state.categoria == "gastronomia")
                {
                    this.getDataGastronomia(0);}
            if (this.state.categoria == "alojamientos")
                {this.getDataAlojamientos(0);}
        }
        )
        }
      }

    componentDidMount() {
        //this.state.categoria = "alojamientos";
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera 
        this.setState({
            categoria: this.props.location.categoria
        },
        ()=> { 
           
            if (this.state.categoria === undefined)
            {this.setState({
                loading: false
            })}
            if (this.state.categoria == "gastronomia")
                {this.getDataGastronomia(0);}
            if (this.state.categoria == "alojamientos")
                {this.getDataAlojamientos(0);}
        }
        )
       // console.log("categoria: "+this.state.categoria);
       
    }

    render() {
        const localidades = this.state.localidades.map((localidad) => {
            return(<option key={`localidad-${localidad.id}`} value={localidad.id}>{localidad.nombre}</option>);
        });
        const tipos = this.state.tipos.map((tipo) => {
            return(<option key={`tipo-${tipo.id}`} value={tipo.id}>{tipo.descripcion}</option>);
        });
        return (

           

            <div className="PFiltroAlojamiento mb-5">
                {
                    this.state.loading ?
                        <div><Loading margins="150px" /></div>
                    :
                    <React.Fragment>
                        <div className="ZonaLocalidad-titulo" style={{backgroundColor: '#722789'}}>
                            <h3 style={{color: '#722789'}}>{this.state.categoria} ADHERIDOS - DOSEP TURISMO 2021</h3>
                        </div> 
                           { 
                           this.state.categoria !== undefined ?
                           <div className="container">
                            <div className="row">
                                <div className="col offset-md-1">
                                    <form /*onSubmit={this.aplicarFiltro}*/ className="mb-5">
                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <div className="container"> 
                                                    <label htmlFor="idlocalidad">Localidad</label>
                                                    <select id="idlocalidad" name="idlocalidad" className="form-control" value={this.state.idlocalidad} onChange={this.handleChange}>
                                                        {localidades}
                                                    </select>
                                                </div>
                                            </div>
                                          { this.state.categoria == "alojamientos" ? ( 
                                           <div className="form-group col-md-4">
                                                <div className="container"> 
                                                    <label htmlFor="idtipo">Tipo</label>
                                                    <select id="idtipo" name="idtipo" className="form-control" value={this.state.idtipo} onChange={this.handleChange}>
                                                        {tipos}
                                                    </select>
                                                </div>
                                            </div> ) : ("") }
                                            <div className="form-group col-md-4">
                                                <div className="container">
                                                  <label htmlFor="nombreAloja">Nombre</label>
                                                    <input type="text" id="nombreAloja" name="nombreAloja" className="form-control" value={this.state.nombreAloja} onChange={this.handleChange} />
                                                </div>
                                                
                                            </div>
                                            {/*<div className="form-group col-md-3 d-flex align-items-end justify-content-end">
                                                <button type="submit" className="btn btn-primary">Buscar</button>
                                            </div>*/}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> : ""}
                        
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                { this.state.categoria == "gastronomia" ?   
                                    ( <Gastronomicos idLocalidad={0} data={this.state.filtro} /> ) 
                                    : this.state.categoria == "alojamientos" ? (
                                    <Alojamientos idLocalidad={0} data={this.state.filtro}  /> ) 
                                    :
                                    <center>
                            
                                        <div className="one-two  column">
                                            <a
                                            href="javascript: void(0)"
                                            onClick={()=>{
                                                this.setState({
                                                    categoria:"alojamientos"
                                                }, () => {
                                                    this.getDataAlojamientos(0);
                                                })
                                            }}
                                            className="link-menu"
                                            
                                            >
                                            <img
                                                style={{height: 280, width: 500}}
                                                className="img-fluid"
                                                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_ALOJAMIENTO.jpg`}
                                                alt="Img"
                                            />
                                            </a>
                                        </div>
                                        <div className="one-two  column">
                                            <a
                                            href="javascript: void(0)"
                                            onClick={()=>{
                                                this.setState({
                                                    categoria:"gastronomia"
                                                }, () => {
                                                    this.getDataGastronomia(0);
                                                })
                                            }}
                                            className="link-menu"
                                            
                                            >
                                            <img
                                                style={{height: 280, width: 500}}
                                                className="img-fluid"
                                                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/gastronomia.jpg`}
                                                alt="Img"
                                                
                                            />
                                            </a>
                                        </div>
                                        </center>
                                }
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

PFiltroTemplateDosep.contextType = Consumer;

export default PFiltroTemplateDosep;