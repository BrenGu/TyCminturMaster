import React, { useEffect, useState} from 'react';
import { Consumer } from "../../context";
import Loading from "../../utils/Loading";
import axios from "axios";
import Censistas from '../../components/Censistas';

const ListadoCensistas = () => {
    const [data, setData] = useState([])
    const [filtro, setFiltro] = useState([])
    const [nombreCen, setNombreCen] = useState("")
    const [dniCen, setDniCen] = useState("")
    const [emailCen, setEmailCen] = useState("")
    const [loading, setLoading] = useState(true)

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if(name == "nombreCen"){
            setNombreCen(value);
        }else if(name == "dniCen"){
            setDniCen(value + "")
        }else if(name == "emailCen"){
            setEmailCen(value)
        }
    }

    useEffect(() => {
        let filtrado = data.filter((value) => {
            let respuesta = true;
            //NOMBRE Y APELLIDO
            if(nombreCen.length) {
                if(value.nombre.toLowerCase().search(nombreCen.toLowerCase()) === -1 && value.apellido.toLowerCase().search(nombreCen.toLowerCase()) === -1 ) {
                    respuesta = false;
                }
            }
            //DNI
            if(dniCen.length) {
                if(value.dni.toLowerCase().search(dniCen.toLowerCase()) === -1) {
                    respuesta = false;
                }
            }
            //EMAIL
            if(emailCen.length) {
                if(value.email.toLowerCase().search(emailCen.toLowerCase()) === -1) {
                    respuesta = false;
                }
            }

            return respuesta;
        });

        setFiltro(filtrado)

    }, [nombreCen, dniCen, emailCen]);

    useEffect(() => {
       axios({
        method: "get",
        headers: {
          Authorization: "token"
        },
        url: `${process.env.REACT_APP_API}/censista/all`,
        responseType: "json"
      })
        .then(response => {
          setData(response.data.data.registros)
          setFiltro(response.data.data.registros)
          setLoading(false)
        })
        .catch(error => {
          console.log(error);
        });
   }, []);

    return (
        <React.Fragment>          
            <div className="est-main" >
                <div
                    className="ZonaDetalle-titulo"
                    style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                    <h3 style={{ color: `#722789` }}>
                    LISTADO DE CENSISTAS
                    </h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col offset-md-1">
                        <form className="mb-5">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <div className="container">
                                        <label htmlFor="nombreCen">Nombre o apellido</label>
                                        <input type="text" id="nombreCen" name="nombreCen" className="form-control" value={nombreCen} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <div className="container">
                                        <label htmlFor="dniCen">DNI</label>
                                        <input type="number" id="dniCen" name="dniCen" className="form-control" value={dniCen} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <div className="container">
                                        <label htmlFor="emailCen">Email</label>
                                        <input type="text" id="emailCen" name="emailCen" className="form-control" value={emailCen} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {loading ?
                <div><Loading margins="150px" /></div>
            :
            <Censistas dataProp={filtro}></Censistas>
            }
        </React.Fragment>
    );
}


ListadoCensistas.contextType = Consumer;

export default ListadoCensistas;