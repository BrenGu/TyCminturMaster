import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import Loading from "../utils/Loading";
import { TweenMax, Power1 } from "gsap/all";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas0: React.createRef(),
      ctx0: "",
      canvas1: React.createRef(),
      ctx1: "",
      canvas2: React.createRef(),
      ctx2: "",
      canvas3: React.createRef(),
      ctx3: "",
      linklist: React.createRef(),
      btns: React.createRef(),
      nextBtn: React.createRef(),
      loadTxt: React.createRef(),
      isAnimating: false,
      currentImage: 0,
      prevImage: 0,
      currentLink: "",
      imagesloaded: 0,
      partMove: { val: 1 },
      slideshowInterval: "",
      imagesList: [],
      linkList1: [],
      galeria: [],
      imgW: "",
      imgH: "",
      IAR: "",
      VW: "",
      VH: "",
      AR: "",
      isShowRight: false,
      isShowLeft: false,
      IS_ACTIVE: "is-active",
      partList: [
        {
          context: "",
          xpos: 100,
          radius: 0, // circumference of mask1
        },
        {
          context: "",
          xpos: -70,
          radius: 0, // circumference of mask2
        },
        {
          context: "",
          xpos: 50,
          radius: 0, // circumference of mask3
        },
      ],
    };

    this.drawImages = this.drawImages.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.onBtnsClick = this.onBtnsClick.bind(this);
    this.onListClick = this.onListClick.bind(this);
    this.selectLink = this.selectLink.bind(this);
    this.calculateScreen = this.calculateScreen.bind(this);
    this.resizeBg = this.resizeBg.bind(this);
    this.slideshowChange = this.slideshowChange.bind(this);
    this.addEL = this.addEL.bind(this);
    this.preloadImages = this.preloadImages.bind(this);
    this.handleImageComplete = this.handleImageComplete.bind(this);
    this.init = this.init.bind(this);
    this.preInit = this.preInit.bind(this);
    this.show = this.show.bind(this);
  }
  //SIMILAR AL COMPONENT DID MOUNT
  show(value, estado) {
    this.setState({
      [value]: !estado,
    });
  }
  drawImages() {
    var imgPrev = this.state.imagesList[this.state.prevImage];
    var imgNext = this.state.imagesList[this.state.currentImage];
    // This is Next
    this.state.ctx0.globalAlpha = 1;
    this.state.ctx0.drawImage(imgNext, 0, 0, this.state.imgW, this.state.imgH);

    // This is Prev
    this.state.ctx0.globalAlpha = this.state.partMove.val;
    this.state.ctx0.drawImage(imgPrev, 0, 0, this.state.imgW, this.state.imgH);

    var obj, ctx, xPrev, xNext;
    for (var i = 0; i < this.state.partList.length; i++) {
      obj = this.state.partList[i];
      ctx = obj.context;
      xPrev = -obj.xpos * (1 - this.state.partMove.val);
      xNext = obj.xpos * this.state.partMove.val;
      ctx.clearRect(0, 0, this.state.VW, this.state.VH);
      ctx.save();
      ctx.beginPath();
      ctx.arc(
        this.state.VW / 2,
        this.state.VH / 2,
        obj.radius,
        0,
        2 * Math.PI,
        false
      );
      ctx.fill();

      // This is Next
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-in";
      ctx.drawImage(imgNext, xNext, 0, this.state.imgW, this.state.imgH);

      // This is Prev
      ctx.globalAlpha = this.state.partMove.val;
      ctx.globalCompositeOperation = "source-atop";
      ctx.drawImage(imgPrev, xPrev, 0, this.state.imgW, this.state.imgH);

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      if (i === 0) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#fff";
        ctx.stroke();
      }
    }
  }

  changeImage() {
    var self = this;
    // Do not interupt previous movement
    if (this.state.isAnimating) {
      return;
    }

    this.setState(
      {
        isAnimating: true,
      },
      () => {
        TweenMax.to(this.state.partMove, 1, {
          val: 0,
          ease: Power1.easeInOut,
          onUpdate: this.drawImages,
          onComplete: function() {
            self.state.partMove.val = 1;
            self.state.isAnimating = false;
          },
        });
      }
    );
  }

  onBtnsClick(event) {
    event.preventDefault();
    if (this.state.isAnimating) {
      return;
    }

    var trgt = event.target;
    if (trgt.nodeName === "BUTTON") {
      this.state.prevImage = this.state.currentImage;

      if (trgt.classList.contains("show-next")) {
        this.state.currentImage + 1 >= this.state.imagesList.length
          ? (this.state.currentImage = 0)
          : this.state.currentImage++;
      } else {
        this.state.currentImage - 1 < 0
          ? (this.state.currentImage = this.state.imagesList.length - 1)
          : this.state.currentImage--;
      }

      this.changeImage();
      this.selectLink();
      clearInterval(this.state.slideshowInterval);
    }
  }

  onListClick(e) {
    e.preventDefault();

    // Do not interupt previous animation
    if (this.state.isAnimating) {
      return;
    }

    var trgt = e.target;

    if (trgt.nodeName === "A") {
      this.state.prevImage = this.state.currentImage;
      this.state.currentImage = parseInt(trgt.getAttribute("data-order"), 10);
      this.changeImage();

      this.selectLink();

      clearInterval(this.state.slideshowInterval);
    }
  }

  selectLink() {
    let { IS_ACTIVE } = this.state;
    if (this.state.currentLink !== "") {
      this.state.currentLink.classList.remove(IS_ACTIVE);
    }
    this.setState(
      {
        currentLink: this.state.linkList1[this.state.currentImage],
      },
      () => {
        this.state.currentLink.classList.add(IS_ACTIVE);
      }
    );
  }

  calculateScreen() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var res = vw / vh;
    var list = this.state.partList;

    this.state.canvas0.current.width = this.state.canvas1.current.width = this.state.canvas2.current.width = this.state.canvas3.current.width = vw;
    this.state.canvas0.current.height = this.state.canvas1.current.height = this.state.canvas2.current.height = this.state.canvas3.current.height = vh;

    list[0].radius = vw * 0.4;
    list[1].radius = vw * 0.25;
    list[2].radius = vw * 0.08;

    this.setState({
      VW: vw,
      VH: vh,
      AR: res,
      partList: list,
    });
  }

  resizeBg() {
    var image1 = this.state.imagesList[0];
    var iar = image1.width / image1.height;
    if (iar < this.state.AR) {
      this.setState({
        IAR: iar,
        imgW: this.state.VW,
        imgH: this.state.VW / iar,
      });
    } else {
      this.setState({
        IAR: iar,
        imgW: this.state.VH * iar,
        imgH: this.state.VH,
      });
    }
  }

  slideshowChange() {
    this.state.prevImage = this.state.currentImage;
    this.state.currentImage + 1 >= this.state.imagesList.length
      ? (this.state.currentImage = 0)
      : this.state.currentImage++;
    this.changeImage();
    this.selectLink();
  }

  addEL() {
    let self = this;

    window.addEventListener("resize", () => {
      if (this.state.canvas0.current != null) {
        const calculateScreenPromise = new Promise((resolve) => {
          resolve(self.calculateScreen());
        });
        const resizeBgPromise = new Promise((resolve) => {
          resolve(self.resizeBg());
        });

        calculateScreenPromise.then((response1) => {
          resizeBgPromise.then((response2) => {
            self.changeImage();
          });
        });
      }
    });
    this.state.btns.current.addEventListener("click", this.onBtnsClick);
    this.state.linklist.current.addEventListener("click", this.onListClick);
  }

  preloadImages() {
    this.state.imagesList.forEach((img) => {
      if (img.complete) {
        this.handleImageComplete();
      } else {
        img.onload = this.handleImageComplete;
      }
    });
  }

  handleImageComplete() {
    var x = this.state.imagesloaded++;
    var y = x + 1;
    this.setState(
      {
        imagesloaded: y,
      },
      () => {
        if (this.state.imagesloaded === this.state.imagesList.length) {
          this.state.loadTxt.current.classList.add("is-hidden");
          this.addEL();
          this.init();
        }
      }
    );
  }

  init() {
    const calculatePromise = new Promise((resolve) => {
      resolve(this.calculateScreen());
    });

    const selectLinkPromise = new Promise((resolve) => {
      resolve(this.selectLink());
    });

    const resizeBgPromise = new Promise((resolve) => {
      resolve(this.resizeBg());
    });
    calculatePromise.then((response1) => {
      resizeBgPromise.then((response2) => {
        selectLinkPromise.then((response3) => {
          this.changeImage();
          this.setState({
            slideshowInterval: setInterval(this.slideshowChange, 3000),
          });
        });
      });
    });
  }

  preInit() {
    var alist = this.state.linklist.current.querySelectorAll("a");
    var img;
    var x = this.state.linkList1;
    var y = this.state.imagesList;
    for (var i = 0; i < alist.length; i++) {
      x.push(alist[i]);
      img = new Image();
      img.src = alist[i].getAttribute("data-imagesrc");
      y.push(img);
      this.setState({
        linkList1: x,
        imagesList: y,
      });
    }

    const calculateScreenPromise = new Promise((resolve) => {
      resolve(this.calculateScreen());
    });
    calculateScreenPromise.then((response) => {
      this.preloadImages();
    });
  }

  componentDidMount() {
    /*
    const token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/carrusel/galeria/4`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          self.setState({
            galeria: response.data.data.registros,
          },()=>{
            var x = this.state.partList;
            this.setState(
              {
                ctx0: this.state.canvas0.current.getContext("2d"),
                ctx1: this.state.canvas1.current.getContext("2d"),
                ctx2: this.state.canvas2.current.getContext("2d"),
                ctx3: this.state.canvas3.current.getContext("2d"),
              },
              () => {
                x[0].context = this.state.ctx1;
                x[1].context = this.state.ctx2;
                x[2].context = this.state.ctx3;
                this.setState(
                  {
                    partList: x,
                  },
                  () => {
                    this.preInit();
                  }
                );
              }
            );
          });
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });*/
    var x = this.state.partList;
    this.setState(
      {
        ctx0: this.state.canvas0.current.getContext("2d"),
        ctx1: this.state.canvas1.current.getContext("2d"),
        ctx2: this.state.canvas2.current.getContext("2d"),
        ctx3: this.state.canvas3.current.getContext("2d"),  },
        () => {
          x[0].context = this.state.ctx1;
          x[1].context = this.state.ctx2;
          x[2].context = this.state.ctx3;
          this.setState(
            {
              partList: x,
            },
            () => {
              this.preInit();
            }
          );
        }
      );
  }

  render() {
    /*var x = -1;
    const gal = this.state.galeria.map((g) => {
      x++
      if(g.activo == 1){
        return (
          <li>
            <a
              href={`${process.env.REACT_APP_API_RECURSOS}/carrusel/${g.image}`}
              data-order={`${x}`}
              data-imagesrc={`${process.env.REACT_APP_API_RECURSOS}/carrusel/${g.image}`}
            ></a>
          </li>
        )
      }
    })*/

    return (
      <React.Fragment>
        <canvas
          id="canvas0"
          className={"thecanvas"}
          width="800"
          height="480"
          ref={this.state.canvas0}
        ></canvas>
        <canvas
          id="canvas1"
          className={"thecanvas"}
          width="800"
          height="480"
          ref={this.state.canvas1}
        ></canvas>
        <canvas
          id="canvas2"
          className={"thecanvas"}
          width="800"
          height="480"
          ref={this.state.canvas2}
        ></canvas>
        <canvas
          id="canvas3"
          className={"thecanvas"}
          width="800"
          height="480"
          ref={this.state.canvas3}
        ></canvas>
        <nav class="link-list" ref={this.state.linklist}>
          <ul>
            <li>
              <a
                href=""
                data-order="0"
                data-imagesrc="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/1-min.jpg"
                
              ></a>
            </li>
            <li>
              <a
                href=""
                data-order="1"
                data-imagesrc="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/2-min.jpg"
              ></a>
            </li>
            <li>
              <a
                href=""
                data-order="2"
                data-imagesrc="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/3-min.jpg"
              ></a>
            </li>
            <li>
              <a
                href=""
                data-order="3"
                data-imagesrc="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/4-min.jpg"
              ></a>
            </li>
            <li>
              <a
                href=""
                data-order="4"
                data-imagesrc="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/5-min.jpg"
              ></a>
            </li>
            {/*gal*/}
          </ul>
          
        </nav>
        <nav class="btns" ref={this.state.btns}>
          <button
            class="show-prev iconSlider"
            onMouseOver={() => {
              this.show("isShowLeft", this.state.isShowLeft);
            }}
            onMouseLeave={() => {
              this.show("isShowLeft", this.state.isShowLeft);
            }}
          >
            {this.state.isShowLeft ? (
              <i class="fas fa-chevron-circle-left "></i>
            ) : (
              <i class="fas fa-chevron-left "></i>
            )}
          </button>
          <button
            class="show-next iconSlider"
            ref={this.state.nextBtn}
            onMouseOver={() => {
              this.show("isShowRight", this.state.isShowRight);
            }}
            onMouseLeave={() => {
              this.show("isShowRight", this.state.isShowRight);
            }}
          >
            {this.state.isShowRight ? (
              <i class="fas fa-chevron-circle-right"></i>
            ) : (
              <i class="fas fa-chevron-right "></i>
            )}
          </button>
        </nav>
        <p class="loading-txt" ref={this.state.loadTxt}>
            <Loading margins="150px" />
        </p>
      </React.Fragment>
    );
  }
}

Slider.contextType = Consumer;
export default Slider;
