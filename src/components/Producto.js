import React, { Component } from "react";
import { Link } from "react-router-dom";
import card from "./subcomponentes/Card";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <span className="tituloProducto">
            Experimenta los circuitos de esta provincia hermosa
          </span>
        </center>
        <div class="accordion">
          <ul>
            <li tabindex="1">
              <div class="section-title">
                <h2>Gastronomía</h2>
              </div>
              <div>
                <a href="#">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </a>
              </div>
            </li>
            <li tabindex="2">
              <div class="section-title">
                <h2>Gastronomía</h2>
              </div>
              <div>
                <a href="#">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </a>
              </div>
            </li>{" "}
            <li tabindex="3">
              <div class="section-title">
                <h2>Gastronomía</h2>
              </div>
              <div>
                <a href="#">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </a>
              </div>
            </li>
            <li tabindex="4">
              <div class="section-title">
                <h2>Gastronomía</h2>
              </div>
              <div>
                <a href="#">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </a>
              </div>
            </li>
            <li tabindex="5">
              <div class="section-title">
                <h2>Gastronomía</h2>
              </div>
              <div>
                <a href="#">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <card></card>
      </React.Fragment>
    );
  }
}

export default Footer;
