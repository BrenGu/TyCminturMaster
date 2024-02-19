import React, { Component } from "react";
import { Consumer } from "../context";
import SpeedDial from "../components/SocialWidget";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="cuerpoSlider">
            {/* <div className="mancha"></div> */}
            <div className="sliderHome">
              <input
                name="input-slider"
                id="input-slide-0"
                type="radio"
                className="input-slide input-slide-num"
              />
              <input
                name="input-slider"
                id="input-slide-1"
                type="radio"
                className="input-slide input-slide-num"
              />
              <input
                name="input-slider"
                id="input-slide-2"
                type="radio"
                className="input-slide input-slide-num"
              />
              <input
                name="input-slider"
                id="input-slide-3"
                type="radio"
                className="input-slide input-slide-num"
              />
              <input
                name="input-slider"
                id="input-slide-autoplay"
                type="radio"
                className="input-slide"
                defaultChecked
              />

              <ul>
                <li className="slide-0 mancha">
                  <img
                    className=""
                    src="https://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/2.png"
                  ></img>
                </li>
                <li className="slide-1 mancha">
                  <img
                    className=""
                    src="https://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/2.png"
                  ></img>
                </li>
                <li className="slide-2 mancha">
                  <img
                    className=""
                    src="https://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/2.png"
                  ></img>
                </li>
                <li className="slide-3 mancha">
                  <img
                    className=""
                    src="https://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/2.png"
                  ></img>
                </li>
              </ul>
              <div className="slide-description">
                <label className="slide-0 "></label>
                <label className="slide-1"></label>
                <label className="slide-2"></label>
                <label className="slide-3"></label>
              </div>
              <div className="slider-arrow-prev">
                <label className="slide-0" htmlFor="input-slide-0" />
                <label className="slide-1" htmlFor="input-slide-1" />
                <label className="slide-2" htmlFor="input-slide-2" />
                <label className="slide-3" htmlFor="input-slide-3" />
              </div>
              <div className="slider-arrow-next">
                <label className="slide-0" htmlFor="input-slide-0" />
                <label className="slide-1" htmlFor="input-slide-1" />
                <label className="slide-2" htmlFor="input-slide-2" />
                <label className="slide-3" htmlFor="input-slide-3" />
              </div>
              <div className="slider-dot">
                <label className="slide-0" htmlFor="input-slide-0" />
                <label className="slide-1" htmlFor="input-slide-1" />
                <label className="slide-2" htmlFor="input-slide-2" />
                <label className="slide-3" htmlFor="input-slide-3" />
              </div>
            </div>
          </div>
          {/* <SpeedDial /> */}
        </div>
      </React.Fragment>
    );
  }
}

Slider.contextType = Consumer;
export default Slider;
