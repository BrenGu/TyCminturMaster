import React, { Component } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import axios from "axios";
//import Alert from 'react-bootstrap/Alert'
//import { Consumer } from "../../context";

export default class SocialWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      popoverOpen: false,
      popoverOpen1: false,
      popoverOpen2: false,
      popoverOpen3: false,
      popoverOpen4: false,
      popoverOpen5: false,
      popoverOpen6: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    switch (event.target.id) {
      case "MainBtnWidget":
        var x = this.state.popoverOpen;
        this.setState({
          popoverOpen: !x,
        });

        break;
      case "widget-whatsapp":
        var x = this.state.popoverOpen1;
        this.setState({
          popoverOpen1: !x,
        });
        break;
      case "widget-facebook":
        var x = this.state.popoverOpen2;
        this.setState({
          popoverOpen2: !x,
        });
        break;
      case "widget-twitter":
        var x = this.state.popoverOpen3;
        this.setState({
          popoverOpen3: !x,
        });
        break;
      case "widget-instagram":
        var x = this.state.popoverOpen4;
        this.setState({
          popoverOpen4: !x,
        });
        break;
      case "widget-youtube":
        var x = this.state.popoverOpen5;
        this.setState({
          popoverOpen5: !x,
        });
        break;
      default:
        this.setState({
          popoverOpen: false,
          popoverOpen1: false,
          popoverOpen2: false,
          popoverOpen3: false,
          popoverOpen4: false,
          popoverOpen5: false,
        });
    }
  }

  componentDidMount() {
    var chatButton = document.querySelector(".chat-widget--button");
    var chatBtnSecnd = document.querySelectorAll(".chat-widget--button-second");
    setTimeout(() => {
      chatBtnSecnd.forEach((element) => {
        element.classList.add("-hide");
        chatButton.addEventListener(
          "mouseout",
          function() {
            void element.offsetWidth;
          },
          false
        );
        chatButton.addEventListener(
          "mouseover",
          function() {
            void element.offsetWidth;
            element.classList.toggle("-hide");
          },
          false
        );
      });
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <div class="chat-widget">
          <a
            class="chat-widget--button-second "
            href="https://www.wa.link/kd2a54"
            target="_blank"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "60px",
              bottom: "65px",
            }}
            id="widget-whatsapp"
          >
            <img
              style={{ width: "50%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/asistente/pin.png"
            />
          </a>
          <a
            class="chat-widget--button-second "
            href="https://www.youtube.com/channel/UCiYidEtfj2VP3nAqaG1u77w/featured"
            target="_blank"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "30px",
              bottom: "2px",
            }}
            id="widget-youtube"
          >
            <img
              style={{ width: "60%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/asistente/sol.png"
            />
          </a>
          <a
            class="chat-widget--button-second "
            href="https://twitter.com/TurismoSanLuis_"
            target="_blank"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "220px",
              bottom: "7px",
            }}
            id="widget-twitter"
          >
            <img
              style={{ width: "30%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/asistente/i.png"
            />
          </a>
          <a
            class="chat-widget--button-second "
            href="https://www.facebook.com/turismodesanluis/"
            target="_blank"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "200px", 
              bottom: "65px",
            }}
            id="widget-facebook"
          >
            <img
              style={{ width: "50%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/asistente/avion.png"
            />
          </a>
          <a
            class="chat-widget--button-second  "
            href="https://www.instagram.com/turismo_san_luis/"
            target="_blank"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "125px",
              bottom: "90px",
            }}
            id="widget-instagram"
          >
            <img
              style={{ width: "50%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/asistente/hotel.png"
            />
          </a>
          <a class="chat-widget--button" id="MainBtnWidget">
            <img
              style={{ width: "130%" }}
              src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/Asistente.png"
            />
          </a>

          <Popover
            trigger="hover"
            placement="left"
            isOpen={this.state.popoverOpen}
            target="MainBtnWidget"
            toggle={this.toggle}
          >
            <PopoverBody>Redes sociales</PopoverBody>
          </Popover>
          <Popover
            trigger="hover"
            placement="right"
            isOpen={this.state.popoverOpen1}
            target="widget-whatsapp"
            toggle={this.toggle}
          >
            <PopoverBody>Atractivos</PopoverBody>
          </Popover>
          <Popover
            trigger="hover"
            placement="left"
            isOpen={this.state.popoverOpen2}
            target="widget-facebook"
            toggle={this.toggle}
          >
            <PopoverBody>Viaje en Avion</PopoverBody>
          </Popover>
          <Popover
            trigger="hover"
            placement="left"
            isOpen={this.state.popoverOpen3}
            target="widget-twitter"
            toggle={this.toggle}
          >
            <PopoverBody>Oficinas de Informe</PopoverBody>
          </Popover>
          <Popover
            trigger="hover"
            placement="top"
            isOpen={this.state.popoverOpen4}
            target="widget-instagram"
            toggle={this.toggle}
          >
            <PopoverBody>Alojamiento</PopoverBody>
          </Popover>
          <Popover
            trigger="hover"
            placement="right"
            isOpen={this.state.popoverOpen5}
            target="widget-youtube"
            toggle={this.toggle}
          >
            <PopoverBody>Clima</PopoverBody>
          </Popover>
        </div>
      </React.Fragment>
    );
  }
}

//Newsletter.contextType = Consumer;
