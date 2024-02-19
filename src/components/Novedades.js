import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper modules
SwiperCore.use([Pagination]);
class Novedades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      index: 0,
      timerID: false,
    };
    this.stop = this.stop.bind(this);
    this.carouselTimer = this.carouselTimer.bind(this);
  }

  carouselTimer() {
    let indice = parseInt(this.state.index, 10);
    indice++;
    if (indice > this.state.data.length - 1) {
      indice = 0;
    }
    this.setState(
      {
        index: indice,
      },
      () => {
        let oldData = Object.assign([], this.state.data);
        oldData = oldData.map((d) => {
          return { ...d, display: "none" };
        });
        let newDataItem = oldData[indice];
        newDataItem["display"] = "block";
        oldData[indice] = newDataItem;
        this.setState({
          data: oldData,
        });
      }
    );
  }

  stop() {
    clearInterval(this.state.timerID);
  }

  componentDidMount() {
    //A los datos del Fetch hay que agregar la propiedad display: "none
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/novedades/12`,
      responseType: "json",
    })
      .then((response) => {
        let data = response.data.data.registros;
        self.setState(
          {
            data: data,
            loading: false,
          },
          () => {
            if (parseInt(response.data.data.count, 10) > 0) {
              let timer = setInterval(self.carouselTimer, self.props.time);
              self.setState(
                {
                  timerID: timer,
                },
                () => {
                  self.carouselTimer();
                }
              );
            }
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    const items = this.state.data.map((item) => {
      let descripcion = item.descripcion.substr(0, 200) + "...";
      let fecha = item.fecha.split("-");
      return (
        <SwiperSlide key={`ci-${item.id}`} className="blog-slider__item">
          <div className="blog-slider__img">
            <img
              style={{ height: "420px" }}
              src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${item.foto_uno}`}
              alt="Foto"
            />
          </div>

          <div class="blog-slider__content">
            <div className="col-sm-11">
              <span className="blog-slider__code">{`${fecha[2]}/${fecha[1]}/${fecha[0]}`}</span>
              <div className="blog-slider__title">
                <h2>{item.titulo}</h2>
              </div>
              <div>
                <h4>{item.subtitulo}</h4>
              </div>

              <div class="blog-slider__text">{descripcion}</div>
              <Link
                to={`/novedad/${item.id}`}
                className="link"
                style={{ color: "black" }}
              >
                <div class="blog-slider__button">Leer más</div>
              </Link>
              <Link
                to={`/novedades`}
                className="link"
                style={{ color: "black" }}
              >
                <div class="blog-slider__button">Ver todas las noticias</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div className="" style={{ paddingTop: "100px" }}>
        <center>
          <div className="imgActividades">
            <img
              className=""
              src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades.png`}
              alt="Img"
            />{" "}
          </div>
        </center>

        <Swiper
          spaceBetween={30}
          effect={"fade"}
          direction={"vertical"}
          loop={false}
          pagination={{
            el: ".blog-slider__pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          className="blog-slider"
        >
          {items}
          <div className="blog-slider__pagination"></div>
        </Swiper>

        {/*    <div className="blog-slider">
          <div class="blog-slider__wrp swiper-wrapper">{items}</div>
        </div>
    */}
      </div>
    );
  }
}

Novedades.contextType = Consumer;

export default Novedades;
