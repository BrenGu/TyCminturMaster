import React, { Component } from "react";
import { Consumer } from "../context";

class SliderActividades extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var counter = 1;
    setInterval(function() {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-sliderActividades">
          <div className="slider2Actividades">
            <div className="slidesActividades">
              {/* radio buttons */}
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />
              {/* slides images  */}
              <div className="slideActividades first">
                <img
                  className="imgSlideActividades"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/trekking.jpg"
                  alt=""
                />
                <img
                  id="tuExperiencia"
                  src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                />
                <p>Tu trekking</p>
                <div className="descripcionAct">
                  <br />
                  <span>
                    El trekking es una actividad física en la que se recorren
                    parajes naturales como bosques, montañas, cañones, selvas o
                    ríos y que requieren más esfuerzo físico que el senderismo.
                  </span>
                </div>
              </div>
              <div className="slideActividades ">
                <img
                  className="imgSlideActividades"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/windsurf.jpg"
                  alt=""
                />
                <img
                  id="tuExperiencia"
                  src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                />
                <p>Tu windsurf</p>
                <div className="descripcionAct">
                  <br />
                  <span>
                    El windsurf, consiste en deslizarse sobre el agua sobra una
                    tabla que lleva una vela. Las tablas de windsurf son
                    ligeras, rápidas y fáciles de manejar.
                  </span>
                </div>
              </div>
              <div className="slideActividades">
                <img
                  className="imgSlideActividades"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/cabalgata.jpg"
                  alt=""
                />
                <img
                  id="tuExperiencia"
                  src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                />
                <p>Tu cabalgata</p>
                <div className="descripcionAct">
                  <br />
                  <span>
                    Convivi con la naturaleza usando al caballo como medio de
                    transporte a través de ríos y montañas.
                  </span>
                </div>
              </div>
              <div className="slideActividades">
                <img
                  className="imgSlideActividades"
                  src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tirolesa.jpg"
                  alt=""
                />
                <img
                  id="tuExperiencia"
                  src="http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/carouselActividades/tuExperiencia.png"
                />
                <p>Tu tirolesa</p>
                <div className="descripcionAct">
                  <br />
                  <span>
                    Están diseñados de modo que una o varias personas se
                    impulsan por gravedad, y pueden deslizarse desde la parte
                    superior hasta el fondo mediante un cable de acero
                    inoxidable.
                  </span>
                </div>
              </div>
            </div>
            {/* automatic navigation */}
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
            {/* manual navigation */}
            <div className="navigation-manual">
              <label for="radio1" class="manual-btn"></label>
              <label for="radio2" class="manual-btn"></label>
              <label for="radio3" class="manual-btn"></label>
              <label for="radio4" class="manual-btn"></label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SliderActividades.contextType = Consumer;
export default SliderActividades;
