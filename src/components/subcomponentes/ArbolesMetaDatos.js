import React from "react";
import { Helmet } from "react-helmet";

class ArbolesMetaDatos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: props.datos,
        }
        console.log(props.datos);
    }

    render() {
        return (
            <div className="application">
                <Helmet>

                    <meta property="og:title" content={`${this.state.datos.nombre_popular}. ${this.state.datos.nombre_cientifico}`} />
                    <meta property="og:image" content={`${process.env.REACT_APP_API_RECURSOS}/recursos/arboles/${this.state.datos.foto_uno}`} />
                    <meta property="og:description" content={this.state.datos.descripcion} />


                </Helmet>
                ...
            </div>
        );
    }
};

export default ArbolesMetaDatos;