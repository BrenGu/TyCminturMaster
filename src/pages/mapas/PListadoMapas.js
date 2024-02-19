import React, { Component } from "react";
import { Consumer } from "../../context";
import Loading from "../../utils/Loading";
import Listados from "../../components/Listados"
import axios from "axios";
import { Link } from "react-router-dom";

class PListadoMapas extends Component {
	constructor(props) {
	super(props);
		this.state = {
			loading: true,
			id: 0,
			data: [],
			nombreMapas: "",
			filtro: [],
			index: 0
		};
		this.getData = this.getData.bind(this);
		this.aplicarFiltro = this.aplicarFiltro.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getData() {
		var token = this.context.token;
		var self = this;
		axios({
		method: "get",
		headers: {
			Authorization: token,
		},
		url: `${process.env.REACT_APP_API}/zonas`,
		responseType: "json",
		})
		.then((response) => {
			self.setState(
			{
				data: response.data.data.registros,
				filtro: response.data.data.registros,
				loading: false
			}
			);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	componentDidMount() {
		document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
		this.getData();
	}

	aplicarFiltro() {
        let {nombreAtractivo} = this.state;
        let filtrado = this.state.data.filter((value) => {
            let respuesta = true;
            //Validar Nombre
            if(nombreAtractivo.length) {
                if(value.nombre.toLowerCase().search(nombreAtractivo.toLowerCase()) === -1) {
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
          this.aplicarFiltro();
        });
    }


	render() {
		const loading = this.state.loading;
		return (
			<div>
			{
				loading ?
					<div className="LoadingListadoAtractivo"><Loading margins="150px" /></div>
				:
				<React.Fragment>
					<div className="container ListadoAtractivofull">
						<div className="nf-titulo" >
							<span>MAPAS DE ZONAS</span>
						</div>
						<Link to={`/mapasxzona/${0}`} key={`map-${0}`} style={{width:"auto"}}>	
							<span className="reco-t-sub2" style={{fontSize: "2em", padding: "2px 15px", backgroundColor: "rgba(114,39,137, 1)", color: "#fff", textTransform: "uppercase"}}>Todas las zonas</span>
						</Link>
						<div className="form-row" style={{marginTop: "15px"}}>
							<div className="form-group col-md-4">
								                
								<label htmlFor="nombreAtractivo">Nombre</label>
								<input type="text" id="nombreAtractivo" name="nombreAtractivo" className="form-control" value={this.state.nombreAtractivo} onChange={this.handleChange} />
							</div>
						</div>						
					</div>
					<div className="container">
						<Listados data={this.state.filtro} tipo={"mapas"}  />
					</div>
				</React.Fragment>
			}
			</div>
		);
	}
}

PListadoMapas.contextType = Consumer;

export default PListadoMapas;
