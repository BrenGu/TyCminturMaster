import React from "react";
import { Component } from "react";
import Loading from "../utils/Loading";
import PuntanidadGastronimica from "../utils/images/puntanidad-gastronomica.png";
import GustoASanLuis from "../utils/images/gusto-a-san-luis.png";
import Sello from "../utils/images/sello.png";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom"; 

class GustosSanLuis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      authorized: false,
      msg: {
        visible: false,
        body: "",
      },
    };
    //Funciones bind
  }

  //Definicion de funciones

  componentDidMount() {}

  okLogin = () => {
    this.setState({
      authorized: true,
    });
  };

  handleLogAuth = () => {
    this.setState({ authorized: false });
  };

  render() {
    //Variables
    const authorized = this.state.authorized;
    const loading = this.state.loading;

    return (
      <div>
        {!authorized ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              {/* <Loading margins="96px" /> */}
              <LoginForm okLogin={this.okLogin} />
            </div>
          </div>
        ) : (
          <>
            <div className="gustos-san-luis">
              <div className="img-puntanidad-gastonomica">
                <img className="" src={PuntanidadGastronimica} />
              </div>
              <div className="img-title">
                <img className="" src={GustoASanLuis} />
              </div>
              <div className="img-puntanidad-gastonomica">
                <img className="" src={Sello} />
              </div>
            </div>
            <div className="intro">
              <p>
                La construcción de un sello de identidad gastronómica constituye
                la primera herramienta de calidad, diseñada para integrar a
                todos establecimientos gastronómicos que brinden una experiencia
                culinaria, ofreciendo platos elaborados con ingredientes
                autóctonos. En este sentido, la secretaría de turismo de San
                Luis, impulsa el turismo gastronómico con el objetivo de
                resaltar la gastronomía local, destacando sus vínculos con los
                diferentes entornos sociales, naturales, culturales.{" "}
              </p>
            </div>

            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <p className="seccion-title">· Objetivos </p>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      1. Posicionar a la gastronomía como sector estratégico en
                      el desarrollo turístico provincial.
                    </p>
                    <br />
                    <p>
                      2. Promover la utilización de productos identitarios
                      locales, reconociendo la labor del productor como actor
                      esencial.
                    </p>
                    <br />
                    <p>
                      3. Contribuir a la profesionalización de los recursos
                      humanos.
                    </p>
                    <br />
                    <p>
                      4. Impulsar la gestión de la calidad en los destinos
                      turísticos.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <p className="seccion-title">· Misión</p>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      Estará dirigido a todos aquellos establecimientos, que de
                      acuerdo a las normas legales, sanitarias y de seguridad,
                      se vean involucrados en la prestación de servicios
                      gastronómicos, en la provincia de San Luis, que actúan
                      complementariamente con el desarrollo de la actividad
                      turística.
                    </p>
                    <p>
                      <b> - Sector Publico:</b> Secretaria de Turismo ,
                      producción, Sol Puntano y sector académico.
                    </p>
                    <p>
                      <b> - Sector Privado: </b>Chefs, cocineros, recursos
                      humanos de salón, productores locales profesionales y
                      sommeliers.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <p className="seccion-title">· Plan de trabajo</p>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>1. Presentación del Sello de Identidad Gastronómica.</p>
                    <br />
                    <p>2. Diagnóstico participativo.</p>
                    <br />
                    <p>
                      3. Inscripción de postulantes que cumplan con los
                      requisitos.
                    </p>
                    <br />
                    <p>4. Capacitaciones.</p>
                    <br />
                    <p>5. Postulación de las alternativas gastronómicas.</p>
                    <br />
                    <p>6. Auditorías.</p>
                    <br />
                    <p>7. Elección por jurados.</p>
                    <br />
                    <p>8. Premiación.</p>
                    <br />
                    <p>9. Asignación del sello.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <p className="seccion-title">· Beneficios</p>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <h4>
                      Beneficios para el turista del Sello de identidad
                      gastronómico:
                    </h4>
                    <p>
                      {" "}
                      • Oferta gastronómica amplia que ofrece platos autóctonos.{" "}
                    </p>
                    <p>
                      {" "}
                      • Conocimiento de ingredientes y/o especies autóctonas.{" "}
                    </p>
                    <p> • Vivencia de una experiencia culinaria de calidad. </p>
                    <br />
                    <h4>
                      Beneficios para el sector del Sello de identidad
                      gastronómico:
                    </h4>
                    <p> • Capacitaciones y talleres. </p>
                    <p> • Asesoramientos. </p>
                    <p> • Relevamientos técnicos.</p>
                    <p> • Entrega de sello de identidad gastronómica. </p>
                    <p> • Pertenecer a la oferta gastronómica regional. </p>
                    <p>
                      {" "}
                      • Difusión y promoción de establecimientos gastronómicos.{" "}
                    </p>
                    <p> • Establecimiento de estándares de calidad. </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <p className="seccion-title">
                        · Premios y Reconocimientos
                      </p>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                  <h4>Premios y Reconocimientos:</h4>
                    <p>
                      {" "}
                      • Primer Premio: Orden de compra <b>$1.000.000</b>
                    </p>
                    <p>
                      {" "}
                      • Segundo Premio: Orden de compra <b>$700.000</b>{" "}
                    </p>
                    <p>
                      {" "}
                      • Tercer Premio: Orden de compra <b>$500.000</b>
                    </p>
                    <p>
                      {" "}
                      • Cuarto Premio: Orden de compra <b>$300.000</b>{" "}
                    </p>
                    <p>
                      {" "}
                      • Quinto Premio: Orden de compra <b>$200.000</b>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSix">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed btn-override"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <p className="seccion-title">· Requisitos</p>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  class="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      Para la participación del sello de identidad gastronómico
                      puntano, en primer lugar es necesario poseer la
                      habilitación municipal, cumpliendo con las
                      reglamentaciones vigentes y ofrecer platos/bebidas
                      autóctonos de forma permanente. Estos platos deberán ser
                      elaborados con un porcentaje representativo de
                      ingredientes regionales.
                    </p>
                    <p>
                      La inscripción para la implementación del sello de
                      identidad gastronómico será de carácter gratuita y
                      voluntaria.{" "}
                    </p>
                    <p>1. Habilitacion Municipal</p>
                    <p>2. Seguridad e Higiene:</p>
                    <p className="enum"> • Cumplimiento de las normas</p>
                    <p className="enum"> • Conservación de insumos</p>
                    <p className="enum"> • Instalaciones y luminaria</p>
                    <p className="enum"> • Utensilios </p>
                    <p className="enum"> • Temperaturas</p>
                    <p>3. Unidad de medidas de satisfaccion del cliente</p>
                    <p>
                      4. Incorporación a la oferta gastronómica de
                      platos/bebidas con un porcentaje representativo de
                      ingredientes regionales, pudiendo estar reflejados en:
                    </p>
                    <p className="enum"> • Menú / Carta</p>
                    <p className="enum"> • Plato</p>
                    <p className="enum"> • Productores</p>
                    <p className="enum"> • Procedimientos</p>
                    <p>
                      5. Organigrama, en donde todas sus partes estén
                      interiorizadas, sobre la incorporación del sello
                    </p>
                    <p>6. Conocimiento y Capacitaciones</p>
                    <p>7. Proveedores</p>
                    <p>8. Equipamiento:</p>
                    <p className="enum"> • Servicios sanitarios</p>
                    <p className="enum"> • Conservación</p>
                    <p className="enum"> • Iluminación </p>
                    <p className="enum"> • Ventilación </p>
                    <p className="enum"> • Climatización</p>
                    <p className="enum"> • Accesibilidad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gastro-container">
              <div className="pres">
                <figure class="gastro-items ">
                  <h1>PRESENTACION</h1>
                  <img className="imgPresentacion" src="" alt="" />
                  <figcaption className="figcaption">
                    <h3 className="titleItem">Conocé</h3>
                    <p>
                      Insertar decripcion de Presentacion
                      <br />
                      <br />
                    </p>
                    <Link to={"/gustosSanLuis/presentacion"}>
                      <button>Más</button>
                    </Link>
                  </figcaption>
                </figure>
              </div>
              <div className="cap">
                <figure class="gastro-items ">
                  <h1>CAPACITACIONES</h1>
                  <img className="imgCapacitacion" src="" alt="" />
                  <figcaption className="figcaption">
                    <h3 className="titleItem">Explorá</h3>
                    <p>
                      Insertar decripcion de Capacitacion
                      <br />
                      <br />
                    </p>
                    <Link to={"/gustosSanLuis/Capacitaciones"}>
                      <button>Más</button>
                    </Link>
                  </figcaption>
                </figure>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default GustosSanLuis;
