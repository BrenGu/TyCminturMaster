
import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../utils/Loading";
import NotFound from "../../components/NotFound"
import GoogleMap from "../../components/subcomponentes/GoogleMap";
import BuscadorMapas from "../../components/BuscadorMapas";

class PMapasRecorridos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtro: [],
      localidades: [{
        id: 0,
        idciudad: 0,
        ciudad: "Todas las Localidades",
        descripcion: "Todas las Localidades",
        departamento: "S/N",
        latitud: "00.00",
        longitud: "00.00"
      }],
      loading: true,
      isNotFound: true,
      idciudad: 0,
      idtipo: 0,
      tipos: [],
      nombreSearch: "",
      url: "",
      puntoInicio: "",
      latitudesFiltro: [],
      longitudesFiltro: [],
      msg: {
        visible: false,
        body: ""
      },
    };
    this.getData = this.getData.bind(this);
    this.lat_long = this.lat_long.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePunto = this.handleChangePunto.bind(this);
    this.aplicarFiltro = this.aplicarFiltro.bind(this);
  }

  aplicarFiltro() {
      let { idciudad, idtipo, nombreSearch} = this.state;
      let lonFilter = []
      let latFilter = []
      idciudad = parseInt(idciudad, 10);
      idtipo = parseInt(idtipo, 10);

      let filtrado = this.state.data.filter((value) => {
          let respuesta = true;

          {/*if(idciudad !== 0) {
              if(parseInt(value.idciudad, 10) !== idciudad) {
                  respuesta = false;
              }
          }
          //Validar el Tipo seleccionado
          //if(idtipo !== 0) {
              if(value.tipo.search(this.state.tipos[idtipo].nombre) === -1) {
                  respuesta = false;
              }
          //}*/}
          //Validar Nombre
          if(nombreSearch.length) {
              if(value.nombre.toLowerCase().search(nombreSearch.toLowerCase()) === -1) {
                  respuesta = false;
              }
          }
      
          return respuesta;
      });

      filtrado.forEach(element => {
        latFilter.push(element.latitud)
        lonFilter.push(element.longitud)
      })

      this.setState({
          filtro: filtrado,
          latitudesFiltro: latFilter,
          longitudesFiltro: lonFilter
      },()=>{
        this.lat_long();
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
      this.aplicarFiltro();
    });
  }

  handleChangePunto(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  async getData() {
    var dat = []

    var token = this.context.token;

    /*await axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/clasificacion/all`,
      responseType: "json",
    })
    .then((response) => {
    if (response.data.data.count > 0) {
        response.data.data.registros.unshift({
          id: 0,
          nombre: "Ciudades"
        });
        this.setState(
        {
            tipos: response.data.data.registros
        });
    }})*/
      //Localidades de la Zona
      {/*
      await axios({
        method: "get",
        headers: {
          Authorization: token,
        },
        url: `${process.env.REACT_APP_API}/zonas/ciudades`,
        responseType: "json",
      })
      .then((response) => {
      if (response.data.data.count > 0) {
          let x = []
          let y = []
          let fil = []
          response.data.data.registros.forEach(element => {
            x.push(element.latitud)
            y.push(element.longitud)

            fil.push({ "id": element.id,
              "idciudad": element.idciudad,
              "tipo": "Ciudades",
              "nombre": element.ciudad,
              "descripcion": element.descripcion,
              "foto": element.foto,
              "latitud": element.latitud,
              "longitud": element.longitud
            })

            dat.unshift({ "id": element.id,
              "idciudad": element.idciudad,
              "tipo": "Ciudades",
              "nombre": element.ciudad,
              "descripcion": element.descripcion,
              "foto": element.foto,
              "latitud": element.latitud,
              "longitud": element.longitud
            })
          });
          
          this.setState(
          {
              filtro: fil,
              latitudesFiltro:  x,
              longitudesFiltro: y,
              localidades: this.state.localidades.concat(response.data.data.registros)
          });
      }})
    */}
      await axios({
        method: "get",
        headers: {
          Authorization: token,
        },
        url: `${process.env.REACT_APP_API}/atractivoTipo/32`,
        responseType: "json",
      })
      .then((response2) => {
      if (response2.data.data.count > 0) {
        let x = []
        let y = []
        let fil = []
        response2.data.data.registros.forEach(element2 => {
            x.push(element2.latitud)
            y.push(element2.longitud)

            fil.push({ "id": element2.id,
              "idciudad": element2.idlocalidad,
              "tipo": element2.tipoAtractivo,
              "nombre": element2.nombre,
              "descripcion": element2.descripcion,
              "foto": element2.imagenes[0].imagen,
              "latitud": element2.latitud,
              "longitud": element2.longitud
            })

            dat.unshift({ "id": element2.id,
              "idciudad": element2.idlocalidad,
              "tipo": element2.tipoAtractivo,
              "nombre": element2.nombre,
              "descripcion": element2.descripcion,
              "foto": element2.imagenes[0].imagen,
              "latitud": element2.latitud,
              "longitud": element2.longitud
            })             
        });
          
        this.setState(
        {   data: dat,
            filtro: fil,
            latitudesFiltro:  x,
            longitudesFiltro: y,
            loading: false,
            isNotFound: false
        },()=>{
          this.lat_long();
        });
      }})
  }

  lat_long(){      
    var x;
    var str = "";
    
    for(x = 0; x < this.state.latitudesFiltro.length; x++){
      str += this.state.latitudesFiltro[x] + "," + this.state.longitudesFiltro[x] + "/";
    }

    this.setState({
      url: str
    })
  };

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData(0);
  }

  render() {
    const pntIni = this.state.puntoInicio.split("/").map((el)=>{
      if(el != ""){
        return (<div><i class="far fa-check-circle"></i> {el}</div>)
      }
    });
    const loading = this.state.loading;
    const isNotFound = this.state.isNotFound;
    /*const localidades = this.state.localidades.map((localidad) => {
      return(<option key={`localidad-${localidad.idciudad}`} value={localidad.idciudad}>{localidad.ciudad}</option>);
    });
    const tipos = this.state.tipos.map((tipo) => {
        return(<option key={`tipo-${tipo.id}`} value={tipo.id}>{tipo.nombre}</option>);
    });*/

    return (
      <div className="ZonaSlider">
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        )
        : isNotFound ? (
          <NotFound />
        )
        :(
          <React.Fragment>
            <div className="row" style={{marginRight: 0, marginBottom: "15px"}}>
              <div className="col-md-6" >
                 <div className="container">
                    <div className="row">
                        <div className="col" style={{backgroundColor: "whitesmoke"}}>
                            <form className="mb-3 formulario-mapas">
                                <div className="form-row">
                                    {/*<div className="form-group col-md-4">
                                        <div className="container"> 
                                            <label htmlFor="idciudad">Localidad</label>
                                            <select id="idciudad" name="idciudad" className="form-control" value={this.state.idciudad} onChange={this.handleChange}>
                                                {localidades}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <div className="container"> 
                                            <label htmlFor="idtipo">Tipo</label>
                                            <select id="idtipo" name="idtipo" className="form-control" value={this.state.idtipo} onChange={this.handleChange}>
                                                {tipos}
                                            </select>
                                        </div>
                                    </div>
                                    */}
                                    <div className="form-group col-md-8">
                                        <div className="container">
                                          <label htmlFor="nombreSearch">Nombre</label>
                                            <input type="text" id="nombreSearch" name="nombreSearch" className="form-control" value={this.state.nombreSearch} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col" style={{height: "500px", overflowY: "scroll"}}>
                            <BuscadorMapas data={this.state.filtro} />                             
                        </div>
                    </div>
                </div>
    
                <a class="redirectMapBox" style={{width: "60%", marginLeft:"20%"}}  target="_blank" 
                  href={`https://www.google.com/maps/dir/${this.state.url}`}>
                  <h1 class="redirectMapMessage">Unir rutas</h1>
                </a>
              </div>
              <div id="mapa" className="col-md-6" style={{backgroundColor: "whitesmoke", paddingTop: "110px", paddingRight:"0px"}}>
                  <span className="tituloGoogleMap">MAPA</span>
                  <GoogleMap
                    data={this.state.filtro}
                    lat={this.state.latitudesFiltro}
                    lng={this.state.longitudesFiltro}
                    zoom="8"
                    gwidth="100%"
                    gheight="600px"
                  />
                  <div style={{marginTop: "10px", textAlign:"center"}}>
                      <b>¿Cómo llegar desde tu punto de partida?</b>
                      <input className="form-control" style={{width: "60%", marginLeft:"20%"}} type="text" name="puntoInicio" id="puntoInicio" /*value={this.state.puntoInicio} onChange={this.handleChangePunto}*//>
                      <button style={{borderRadius:"10px", backgroundColor: "#ffff", color:"#27AE60", borderColor:"#27AE60", marginTop:"10px"}} 
                        onClick={()=>{
                          var x = document.getElementById("puntoInicio").value;
                          this.setState({
                            puntoInicio: this.state.puntoInicio.concat("/"+x) 
                          })
                        }}>
                        <i class="fas fa-plus-circle"></i> Agregar punto 
                      </button>
                      <br />
                      Puntos de partida agregados:
                      {pntIni}
                      <a class="redirectMapBox" style={{width: "60%", marginLeft:"20%"}}  target="_blank" href={`https://www.google.com/maps/dir${this.state.puntoInicio}/${this.state.latitudesFiltro[0]},${this.state.longitudesFiltro[0]}`}>
                        <h1 class="redirectMapMessage">Obtener ruta</h1>
                      </a>
                  </div>
              </div>
            </div>
            
          </React.Fragment>
        )}
      </div>
    );
  }
}

PMapasRecorridos.contextType = Consumer;

export default PMapasRecorridos;
