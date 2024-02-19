import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

/*
    <MaxImage fotos={} visible={} onClose={this.closeImg} />
*/

class MaxImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      visible: "hidden",
      fotos: [],
      fotosAux: [],
      imgSelected: "",
      index: 0
    };

    this.setData = this.setData.bind(this);
    this.resetImg = this.resetImg.bind(this);
  }

  /* buscarImagen(img) {
    console.log(fotos.indexOf(img));
    //return  fotos.indexOf(img)
  }*/

  setData() {  
    let visibilidad = "hidden";
    let top = 0;
    if (this.props.visible === true) {
      visibilidad = "visible";
    }
    //if(document.body.scrollTop > this.state.showAt || document.documentElement.scrollTop > this.state.showAt) {
    if (document.body.scrollTop) {
      top = document.body.scrollTop;
    } else {
      top = document.documentElement.scrollTop;
    }

    //acomodar el array para mostrar bien las imagenes
    var i = this.state.fotos.indexOf(this.state.imgSelected);
    console.log(i);
    var arrayAux = this.state.fotos;
    //console.log(this.props.src);
    if (i > -1) {
      for (var x = i; x > 0; /*console.log(x)*/) {
        arrayAux[x] = arrayAux[--x];
      }

      arrayAux[0] = this.state.imgSelected;
    }
    this.setState({
      top: top,
      fotosAux: arrayAux,
      visible: visibilidad,
      index: i
    });

    //console.log("Flag MaxImage- variable (fotos)--->" + this.state.fotos);
    //console.log("Flag MaxImage- variable (props.src)--->" + this.state.src);
    //console.log("indexOf-->  " + this.props.src.indexOf(this.props.id));

    //if ((this.props.src).indexOf(this.props.id) > -1) {

    //console.log(removeItemFromArr(this.props.src,this.props.id))
  }

  resetImg() { 
    this.props.onClose();
   // this.setData();

  }

  componentDidUpdate(prevProps) {
    if(this.props.src !== prevProps.src || this.props.id !== prevProps.id) {
      this.setState({
        fotos: this.props.src,
        imgSelected: this.props.id
      }, () => {
          this.setData();
      });
    }
  }

  componentDidMount() {
    this.setState({
      fotos: this.props.src,
      imgSelected: this.props.id
    }, () => {
        this.setData();
    });
  }

  render() {
    const fotos = this.state.fotosAux.map((listaImg) => {
      //  console.log("flag (img) nueva variable--->" + listaImg);
      return (
        <Carousel.Item>
          <img className="d-block w-100 " src={listaImg} alt="" />
        </Carousel.Item>
      );
    });

    return (
      <React.Fragment>
        <div
          className="visor animated bounceIn delay-2s"
          style={{visibility: this.state.visible, top: this.state.top }}
        >
          <div className="visor-content">
            <div className="visor-close" onClick={(e) => this.resetImg(e)}>
              <i className="fas fa-times"></i>
            </div>
            <Carousel clasname="pb-5" >
              {fotos}
            </Carousel>
          </div>
        </div>
        <style jsx="true">{`
          .visor {
            visibility: hidden;
            position: absolute;
            top: 0;
            width: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
            border-style: none;
          }

          .img:hover {
            transform: scale(1.2);
            transition: all 500ms;
          }

          .visor .visor-content {
            width: 90%;
            height: 90%;
            position: relative;
            border-style: none;
            margin-bottom: 100px;
          }
          .visor .visor-content .visor-close {
            position: absolute;
            right: 25px;
            top: 25px;
            z-index: 1000;
          }
          .visor .visor-content .visor-close i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: white;
            color: black;
          }
          .visor .visor-content img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            border: 1px solid #fff;
            border-style: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MaxImage;
