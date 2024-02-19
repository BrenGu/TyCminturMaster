import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
         <div class="wrapper">
      <div class="profile-card js-profile-card">
        <div class="profile-card__img">
          <img   src={`${process.env.REACT_APP_API}/recursos/logoNuevo.png`} alt="profile card" />
        </div>

        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Secretaría de Turismo</div>
          <div class="profile-card__txt"></div>
          <div class="profile-card-loc">
            <span class="profile-card-loc__icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span class="profile-card-loc__txt">
            Av. Illia 35, esq. Junín <br />
            San Luis, Capital
            </span>
          </div>
        </div>
        <div class="profile-card-social">
          <a href="https://www.facebook.com/iaMuhammedErdem" class="profile-card-social__item facebookF" target="_blank">
          <span class="icon-font">
                <i class="fab fa-facebook fa-1x"></i>
            </span>
          </a>

          <a href="https://twitter.com/iaMuhammedErdem" class="profile-card-social__item twitterF" target="_blank">
            <span class="icon-font">
                <i class="fab fa-twitter fa-1x"></i>
            </span>
          </a>
          <a href="https://www.wa.link/kd2a54" class="profile-card-social__item instagramF" target="_blank">
            <span class="icon-font">
                <i class="fab fa-instagram fa-1x"></i>
            </span>
          </a>
          <a href="https://www.wa.link/kd2a54" class="profile-card-social__item whatsappF" target="_blank">
            <span class="icon-font">
                <i class="fab fa-whatsapp fa-1x"></i>
            </span>
          </a>
          <a href="https://www.youtube.com/channel/UCiYidEtfj2VP3nAqaG1u77w/featured" class="profile-card-social__item youtubeF" target="_blank">
            <span class="icon-font">
                <i class="fab fa-youtube fa-1x"></i>
            </span>
          </a>
        </div>
        <div className="profile-card__institucional">
          <img
            className="img-fluid"
            src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/LOGO%20NEGRO_all.png"
            alt="San Luis Nos Une"
          />
        </div>
      </div>
    </div>
    {/*
      <div className="Footer">
        <div className="logom">
          <Link to="/" className="link-menu">
            <img
              className="img-fluid"
              src={`https://i.ibb.co/ft02QmL/SAN-LUIS-TURISMO-FULL-COLOR-TRANSP.png`}
              alt="Primavera San Luis"
            />
          </Link>
        </div>
        <div className="ministerio">
          <h3>Secretaría de Turismo</h3>
          <p>Av. Illia 35, esq. Junín</p>
          <p>
            <a href="tel:+5492664423479">+54 (266) 4423479</a>
          </p>
          <p>
            <a href="tel:+5492664644938">+54 (266) 4644938</a>
          </p>
          <p>San Luis, Capital</p>
        </div>
        <div className="social">
          <h3>Seguinos</h3>
          <p>
            <i className="fab fa-facebook-square" />
            <a
              href="https://www.facebook.com/turismodesanluis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @TurismodeSanLuis
            </a>
          </p>
          <p>
            <i className="fab fa-twitter-square" />
            <a
              href="https://twitter.com/TurismoSanLuis_"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @TurismoSanLuis_
            </a>
          </p>
          <p>
            <i className="fab fa-instagram" />
            <a
              href="https://www.instagram.com/turismo_san_luis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @Turismo_san_luis
            </a>
          </p>
        </div>
        <div className="institucional">
          <img
            className="img-fluid"
            src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/pngsecretaria.png"
            alt="San Luis Nos Une"
          />
        </div>
      </div>
    */}
      </React.Fragment>
     
    );
  }
}

export default Footer;
