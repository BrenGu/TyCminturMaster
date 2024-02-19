import React, { useEffect, useState } from "react";
import { Consumer } from "../context";
import Viewer from "./subcomponentes/Viewer";

const Topbar = (props) => {
  return (
    <React.Fragment className="">
      <div className="topBar ">
        <div className="text-white topBarIcon">
          <i className="fa fa-phone-square  mr-2"></i>
          <a href="tel:+542664423479">+54 (266) 4423479</a>
          {/*  <i class="mr-2"> </i>| <i class="mr-2"> </i>
          <i className="fa fa-at mr-2" />
          <a href="mailto:contacto@turismo.sanluis.gov.ar">
            contacto@turismo.sanluis.gov.ar
          </a>*/}
        </div>
        <div className="text-white topBarTitle">
          Sitio oficial del <b>Ministerio de Turismo y Cultura</b> de la Provincia de
          San Luis
        </div>
        <div className="topBarIcon">
          <a className="text-white px-2" href="https://walink.co/a8a41d">
            <i className="tabIconos fab fa-whatsapp" />
          </a>
          <a
            className="text-white px-2"
            href="https://www.facebook.com/turismodesanluis"
          >
            <i className="tabIconos fab fa-facebook-f" />
          </a>
          <a
            className="text-white px-2"
            href="https://twitter.com/TurismoSanLuis_"
          >
            <i className="tabIconos fab fa-twitter" />
          </a>
          <a
            className="text-white px-2"
            href="https://www.instagram.com/turismo_san_luis/"
          >
            <i className="tabIconos fab fa-instagram" />
          </a>
          <a
            className="text-white pl-2"
            href="https://www.youtube.com/channel/UCiYidEtfj2VP3nAqaG1u77w"
          >
            <i className="tabIconos fab fa-youtube" />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
Topbar.contextType = Consumer;
