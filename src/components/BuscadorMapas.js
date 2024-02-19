import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import axios from "axios";
import Viewer from "../components/subcomponentes/Viewer";

class BuscadorMapas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idLocalidad: 0,
            data: [],
            alojamientos: [],
            visibles: 4,
            clase: "listado",
            card: React.createRef(),
            icon: React.createRef()
            
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data) {
            this.setState({
                loading: true,
                data: this.props.data
            });
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data,
            loading: false
        });

    }

    render() {
        var ListadoAtractivofull = null;
        ListadoAtractivofull = this.state.data.map((atrac) => {
            if(atrac.id != 0){
                if(atrac.tipo === "Ciudades"){
                    let descripcion = "";
                    if (atrac.descripcion.length > 150) {
                    descripcion = atrac.descripcion.substr(0, 150) + "...";
                    } else {
                    descripcion = atrac.descripcion;
                    }
                    return (
                    <Link to={`/localidad/${atrac.idciudad}`} key={`atractivo-${atrac.idciudad}`}>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="map-full-item">
                                    <div
                                        className="titulo"
                                        style={{ backgroundColor: `rgba(237,15,104, 1)` }}
                                    >
                                        <h3>{atrac.ciudad}{atrac.nombre}</h3>
                                    </div>
                                    <div className="imagen">
                                        <img
                                        className="img-fluid"
                                        src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.foto}`}
                                        alt="Img"
                                        />
                                    </div>
                                    <div className="body">
                                        <p className="text-dark mb-2">{descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    );
                }else{
                    let descripcion = "";
                    if (atrac.descripcion.length > 150) {
                    descripcion = atrac.descripcion.substr(0, 150) + "...";
                    } else {
                    descripcion = atrac.descripcion;
                    }
                    return (
                    <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
                        <div className="row mb-5">
                            <div className="col">
                                <div className="map-full-item">
                                    <div
                                        className="titulo"
                                        style={{ backgroundColor: `rgba(237,15,104, 1)` }}
                                    >
                                        <h3>{atrac.ciudad}{atrac.nombre}</h3>
                                    </div>
                                    <div className="imagen">
                                        <img
                                        className="img-fluid"
                                        src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.foto}`}
                                        alt="Img"
                                        />
                                    </div>
                                    <div className="body">
                                      <p className="text-dark mb-2">{descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    );
                }
                
            }			
        });
            
        
        return(
            <React.Fragment>
                {
                    <div class="row" style={{backgroundColor: "whitesmoke"}}>
                        <div class="col">
                            <Viewer visibles={this.state.visibles} clase={this.state.clase}>
                                {ListadoAtractivofull}
                            </Viewer>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

BuscadorMapas.contextType = Consumer;

export default BuscadorMapas;