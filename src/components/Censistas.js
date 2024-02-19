import React, { useEffect, useState} from 'react';
import { Consumer } from "../context";
import Viewer from "./subcomponentes/Viewer"

const Censistas = (props) => {
    const {dataProp} = props 
    const [data, setData] = useState(dataProp)
    const [visibles, setVisibles] = useState(3)
    const [clase, setClase] = useState("alojamiento")
    const [prevProps, setPrevProps] = useState({data: dataProp})

    const calculoVisibles = () => {
        var w = window.innerWidth;
        if(w > 1200) {
            setVisibles(3);
        } else if(w <= 1024 && w >= 768) {
            setVisibles(2);
        } else {
            setVisibles(1);
        }
    }

    useEffect(() => {
       window.addEventListener("resize", calculoVisibles);
       calculoVisibles();

        return () => {
            window.removeEventListener("resize", calculoVisibles)
        }
    }, []);

    useEffect(() => {
        if(dataProp !== prevProps.data ){
            setData(dataProp)
        }
     }, [dataProp]);


   const cardsCensistas = data.map((element) => {
        return(
            <div class="containerCensistas">
                    <div class="boxCensistas">
                        <div class="topCensistas">
                            <div class="profileCensistas"><img src={`${process.env.REACT_APP_API_RECURSOS}/recursos/censistas/${element.foto}`} className="imageCensistas" ></img></div>
                            <h1 class="titleCensistas">{element.nombre}</h1>
                            <h3 class="jobCensistas">{element.apellido}</h3>
                        </div>
                        <div class="bottomCensistas">
                            <div class="linksCensistas">
                                <ul class="listaCensistas">
                                    <li><i class="fas fa-id-card"  style={{marginRight:"10px"}}></i>{element.dni}</li>
                                    {element.email !== "" ? <li><i class="fas fa-at" style={{marginRight:"10px"}}></i>{element.email}</li> : ""}
                                    {element.telefono !== "" ? <li><i class="fas fa-phone" style={{marginRight:"10px"}}></i>{element.telefono}</li> : ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        )
    });

    return (
        <React.Fragment> 
            <section class="container">
                <div class="row">
                    <div class="col">
                        <Viewer visibles={visibles} clase={clase}>
                            {cardsCensistas}
                        </Viewer>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


Censistas.contextType = Consumer;

export default Censistas;