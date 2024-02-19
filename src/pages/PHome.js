import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";

import Recorridos from "../components/Recorridos";
import EventoForm from "../components/EventoForm";
import Descarga from "../components/Descarga";
import Novedades from "../components/Novedades";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import SliderActividades from "../components/SliderActividades";
import Slider from "../components/SliderClean";
import PantallaModal from "../components/subcomponentes/Modal";
import Newsletter from "../components/subcomponentes/Newsletter";
import Loading from "../utils/Loading";
import TabSlider from "../components/subcomponentes/TabSlider";
import CardImperdibles from "../components/CardImperdibles";
import WeatherCard from "../components/WeatherCard";
import Etiqueta from "../components/Producto";
import SpeedDial2 from "../components/SpeedDial";
import ScrollProductos from "../components/ScrollProductos";
import ScrollExperiencia from "../components/ScrollExperiencia";
import BotoneraFondo from "../components/BotoneraFondo";
import Galeria from "../components/Galeria";
import ComponentHome1 from "../components/ComponentHome1";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      visible: true,
    };
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    this.setState({
      visible: true,
    });

    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="Home">
        {this.state.loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="menu-y-slider ">
              <Slider></Slider>
              {/*<div className="pantallaGrande">
              <span className="newsHome">
                  <Newsletter />
                </span>     <SocialWidget />
                 {<PantallaModal />}
              
               
             </div>
              <div className="pantallaChica2">{<PantallaModal/>}</div> */}
            </div>
            <br></br>
            <ComponentHome1></ComponentHome1>
            <Novedades timerID="100" />
            <Descarga />
            {/*               
       
 <Recorridos /> */}
            {/* <EventoForm />*/}
            {/* <Novedades time="10000" /> */}
            {/* <EventoForm /> */}
            {/* <Novedades timerID="100" /> */}
            {/* <Recorridos />   <div>
              <Galeria />
            </div>*/}
            {/*  <EventoForm />
            // <div className="Recorridos">
            //   <div className="reco-titulo">
            //     <span className="reco-t-sub2">Nuestras Redes</span>
            //   </div>
            // </div>
            // <br />*/}
            <center>
              <div className="grid-containerRedes">
                <div>
                  <center>
                    <Link to="/" className="link-menu">
                      <img
                        className="img-fluid"
                        src={`https://i.ibb.co/fGXVJvH/LOGO-INS.png`}
                        alt="Primavera San Luis"
                        style={{ width: "300px" }}
                      />
                    </Link>
                    <br />
                    <br />
                    {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
                  <iframe
                    src="//lightwidget.com/widgets/b1d0a9aa676b5c91b1d4db290b168f9a.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="instagram lightwidget-widget "
                  />*/}
                    <Helmet>
                      <script
                        type="text/javascript"
                        src="http://turismo.sanluis.gov.ar/recursos/js/instagram.js"
                      ></script>
                    </Helmet>
                    <div
                      class="instagram embedsocial-hashtag"
                      data-ref="aec058c58cb9744559a7457f2daa5eb89cbe1a72"
                    ></div>
                  </center>
                </div>
                <div>
                  <center>
                    <div style={{ width: "100%" }}>
                      <Link to="/" className="link-menu">
                        <img
                          className="img-fluid tituloFace"
                          src={`https://i.ibb.co/pdtB79Z/LOGO-FACE.png`}
                          alt="Primavera San Luis"
                          style={{ width: "300px" }}
                        />
                      </Link>
                    </div>
                    <br />
                    <iframe
                      title="facebook"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fturismodesanluis%2F&tabs=timeline&width=1000&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1914035878882625"
                      className="facebook"
                      scrolling="no"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    />
                  </center>
                </div>
              </div>
            </center>
            <br></br> <br></br>
            <BotoneraFondo />
            <br></br> <br></br>
            <br></br>
            <br></br>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;
