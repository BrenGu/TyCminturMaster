import React, { Component } from "react";
import { Link } from "react-router-dom";
import Viewer from "../components/subcomponentes/Viewer";

class CardHalloween extends Component {
    constructor(props) {
         
        super(props);
        this.state = {
            loading: true,
            data: [],
            atractivos: [],
            clase: "halloween"
            
        };
        this.calculoVisibles = this.calculoVisibles.bind(this);
    }

    calculoVisibles() {
        var w = window.innerWidth;
        if(w > 1200) {
            this.setState({visibles: 3});
        } else if(w <= 1024 && w >= 768) {
            this.setState({visibles: 2});
        } else {
            this.setState({visibles: 1});
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data) {
            this.setState({
                loading: true,
                data: this.props.data
            }, () => {
                this.setData();
            });
        }
    }
    
    componentDidMount() {
        this.setState({
            idLocalidad: this.props.idLocalidad,
            atractivos: this.props.data
        });
        window.addEventListener("resize", this.calculoVisibles);
        this.calculoVisibles();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.calculoVisibles);
    }

    render() {
        const atractivos = this.state.atractivos.map((atrac) => {
            let descripcion = "";
            if (atrac.descripcion.length > 190) {
            descripcion = atrac.descripcion.substr(0, 190) + "...";
            } else {
            descripcion = atrac.descripcion;
            }
            return(
                <article key={`hallo-atrac-card-${atrac.id}`} className={`material-card-hallo`}>
                    <div class="hallo-mc-content">
                        <div className="hallo-mc-title">
                            <li><span>{atrac.nombre}</span></li>
                        </div>
                        <div class="hallo-img-container">
                            <img class="img-responsive" src={`${process.env.REACT_APP_API}/atractivos/${atrac.foto}`} alt="Img" />
                        </div>
                        <div class="hallo-mc-description">
                            <li><span>{descripcion}</span></li>
                        </div>
                    </div>
                    <div class="hallo-mc-footer">
                        <Link to={`/atractivo/${atrac.id}`}>VER MÁS</Link>
                    </div>
                </article>
            );
        });

        return(
            <React.Fragment>
                {
                    <section class="container">
                        <div class="row">
                                {/*atractivos*/}
                                <div class="col">
                                {<Viewer visibles={this.state.visibles} clase={this.state.clase}>
                                    {atractivos}
                                </Viewer>}
                                    </div>
                            {/*<nav class="link-list" ref={this.state.linklist}>
                                <ul>{bullets}</ul>
                </nav>*/}
                        </div>
                    </section>
                   
                }
            </React.Fragment>
        );
    }
}

export default CardHalloween;