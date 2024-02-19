import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import { gsap } from "gsap/all";
import Loading from "../utils/Loading";
import axios from "axios";

class CardImperdibles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: require("imagesloaded"),
      buttons: {
        prev: React.createRef(),
        next: React.createRef(),
      },
      cardsContainerEl: React.createRef(),
      appBgContainerEl: React.createRef(),
      cardInfosContainerEl: React.createRef(),
      app: React.createRef(),
    };
    this.swapCards = this.swapCards.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.resetCardTransforms = this.resetCardTransforms.bind(this);
    this.initCardEvents = this.initCardEvents.bind(this);
    this.removeCardEvents = this.removeCardEvents.bind(this);
    this.init = this.init.bind(this);
    this.waitForImages = this.waitForImages.bind(this);
  }

  swapCards(direction) {
    const currentCardEl = this.state.cardsContainerEl.current.querySelector(
      ".current--card"
    );
    const previousCardEl = this.state.cardsContainerEl.current.querySelector(
      ".previous--card"
    );
    const nextCardEl = this.state.cardsContainerEl.current.querySelector(
      ".next--card"
    );

    const currentBgImageEl = this.state.appBgContainerEl.current.querySelector(
      ".current--image"
    );
    const previousBgImageEl = this.state.appBgContainerEl.current.querySelector(
      ".previous--image"
    );
    const nextBgImageEl = this.state.appBgContainerEl.current.querySelector(
      ".next--image"
    );

    this.changeInfo(direction);
    swapCardsClass();
    this.removeCardEvents(currentCardEl);
    function swapCardsClass() {
      currentCardEl.classList.remove("current--card");
      previousCardEl.classList.remove("previous--card");
      nextCardEl.classList.remove("next--card");

      currentBgImageEl.classList.remove("current--image");
      previousBgImageEl.classList.remove("previous--image");
      nextBgImageEl.classList.remove("next--image");

      currentCardEl.style.zIndex = "50";
      currentBgImageEl.style.zIndex = "-2";

      if (direction === "right") {
        previousCardEl.style.zIndex = "20";
        nextCardEl.style.zIndex = "30";

        nextBgImageEl.style.zIndex = "-1";

        currentCardEl.classList.add("previous--card");
        previousCardEl.classList.add("next--card");
        nextCardEl.classList.add("current--card");

        currentBgImageEl.classList.add("previous--image");
        previousBgImageEl.classList.add("next--image");
        nextBgImageEl.classList.add("current--image");
      } else if (direction === "left") {
        previousCardEl.style.zIndex = "30";
        nextCardEl.style.zIndex = "20";

        previousBgImageEl.style.zIndex = "-1";

        currentCardEl.classList.add("next--card");
        previousCardEl.classList.add("current--card");
        nextCardEl.classList.add("previous--card");

        currentBgImageEl.classList.add("next--image");
        previousBgImageEl.classList.add("current--image");
        nextBgImageEl.classList.add("previous--image");
      }
    }
  }

  changeInfo(direction) {
    let currentInfoEl = this.state.cardInfosContainerEl.current.querySelector(
      ".current--info"
    );
    let previousInfoEl = this.state.cardInfosContainerEl.current.querySelector(
      ".previous--info"
    );
    let nextInfoEl = this.state.cardInfosContainerEl.current.querySelector(
      ".next--info"
    );
    let self = this;

    gsap
      .timeline()
      .to([this.state.buttons.prev.current, this.state.buttons.next.current], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: "none",
      })
      .to(
        currentInfoEl.querySelectorAll(".text"),
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "-120px",
          opacity: 0,
        },
        "-="
      )
      .call(() => {
        swapInfosClass(direction);
      })
      .call(() => self.initCardEvents())
      .fromTo(
        direction === "right"
          ? nextInfoEl.querySelectorAll(".text")
          : previousInfoEl.querySelectorAll(".text"),
        {
          opacity: 0,
          translateY: "40px",
        },
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        }
      )
      .to([this.state.buttons.prev.current, this.state.buttons.next.current], {
        duration: 0.2,
        opacity: 1,
        pointerEvents: "all",
      });

    function swapInfosClass() {
      currentInfoEl.classList.remove("current--info");
      previousInfoEl.classList.remove("previous--info");
      nextInfoEl.classList.remove("next--info");

      if (direction === "right") {
        currentInfoEl.classList.add("previous--info");
        nextInfoEl.classList.add("current--info");
        previousInfoEl.classList.add("next--info");
      } else if (direction === "left") {
        currentInfoEl.classList.add("next--info");
        nextInfoEl.classList.add("previous--info");
        previousInfoEl.classList.add("current--info");
      }
    }
  }

  updateCard(e) {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerPosition = {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
    };
    let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
    gsap.set(card, {
      "--current-card-rotation-offset": `${angle}deg`,
    });
    const currentInfoEl = this.state.cardInfosContainerEl.current.querySelector(
      ".current--info"
    );
    gsap.set(currentInfoEl, {
      rotateY: `${angle}deg`,
    });
  }

  resetCardTransforms(e) {
    const card = e.currentTarget;
    const currentInfoEl = this.state.cardInfosContainerEl.current.querySelector(
      ".current--info"
    );
    gsap.set(card, {
      "--current-card-rotation-offset": 0,
    });
    gsap.set(currentInfoEl, {
      rotateY: 0,
    });
  }

  initCardEvents() {
    const currentCardEl = this.state.cardsContainerEl.current.querySelector(
      ".current--card"
    );
    currentCardEl.addEventListener("pointermove", this.updateCard);
    currentCardEl.addEventListener("pointerout", (e) => {
      this.resetCardTransforms(e);
    });
  }

  removeCardEvents(card) {
    card.removeEventListener("pointermove", this.updateCard);
  }

  init() {
    let tl = gsap.timeline();
    if(this.state.cardsContainerEl.current != null){
      tl.to(this.state.cardsContainerEl.current.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
          ease: "power4.inOut",
          from: "right",
          amount: 0.1,
        },
        "--card-translateY-offset": "0%",
      })
        .to(
          this.state.cardInfosContainerEl.current
            .querySelector(".current--info")
            .querySelectorAll(".text"),
          {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
          }
        )
        .to(
          [this.state.buttons.prev.current, this.state.buttons.next.current],
          {
            duration: 0.4,
            opacity: 1,
            pointerEvents: "all",
          },
          "-=0.4"
        );  
    }
  }

  waitForImages() {
    const images = [...this.state.app.current.querySelectorAll("img")];
    const totalImages = images.length;
    let loadedImages = 0;
    //const loaderEl = document.querySelector(".loader span");

    gsap.set(this.state.cardsContainerEl.current.children, {
      "--card-translateY-offset": "100vh",
    });
    gsap.set(
      this.state.cardInfosContainerEl.current
        .querySelector(".current--info")
        .querySelectorAll(".text"),
      {
        translateY: "40px",
        opacity: 0,
      }
    );
    gsap.set(
      [this.state.buttons.prev.current, this.state.buttons.next.current],
      {
        pointerEvents: "none",
        opacity: "0",
      }
    );

    images.forEach((image) => {
      this.state.imagesLoaded(image, (instance) => {
        if (instance.isComplete) {
          loadedImages++;
          //let loadProgress = loadedImages / totalImages;

          /* gsap.to(loaderEl, {
                        duration: 1,
                        scaleX: loadProgress,
                        backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
                    });*/

          if (totalImages == loadedImages) {
            gsap
              .timeline()
              .to(".loading__wrapper", {
                duration: 0.8,
                opacity: 0,
                pointerEvents: "none",
              })
              .call(() => this.init());
          }
        }
      });
    });
  }

  componentDidMount() {
    const initCardEventPromise = new Promise((resolve) => {
      resolve(this.initCardEvents());
    });
    initCardEventPromise.then((response) => {
      this.waitForImages();
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="cuerpoimperdible">
          <div className="tituloImperdibles">
            <span className="imp-t-sub2">Recomendaciones del mes</span>
          </div>
          <div class="app" ref={this.state.app}>
            <div class="cardList">
              <button
                class="cardList__btn btn btn--left"
                ref={this.state.buttons.prev}
                onClick={() => this.swapCards("left")}
              >
                <div class="icon">
                  <i
                    class="fas fa-arrow-left"
                    style={{ color: "white" }}
                    id="arrow-left"
                  ></i>
                </div>
              </button>
              <div class="cards__wrapper" ref={this.state.cardsContainerEl}>
                <Link to={`/atractivo/27`} class="cardImp current--card">
                  <div class="cardImp__image">
                    <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/piscuyaco.jpg" alt="" />
                  </div>
                </Link>
                <Link to={`/atractivo/109`} class="cardImp next--card">
                  <div class="cardImp__image">
                    <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/potrero.jpg" alt="" />
                  </div>
                </Link>
                <Link to={`/atractivo/144`} class="cardImp previous--card">
                  <div class="cardImp__image">
                    <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/rutaNogoliCarolina.jpg" alt="" />
                  </div>
                </Link>
              </div>
              <button
                class="cardList__btn btn btn--right"
                ref={this.state.buttons.next}
                onClick={() => this.swapCards("right")}
              >
                <div class="icon">
                  <i
                    class="fas fa-arrow-right"
                    style={{ color: "white" }}
                    id="arrow-right"
                  ></i>
                </div>
              </button>
            </div>

            <div class="infoList">          
              <div class="info__wrapper" ref={this.state.cardInfosContainerEl}>
                <div class="info current--info">
                  <h1 class="text name">Dique Piscu Yaco</h1>
                  <h4 class="text location">Cortaderas</h4>
                  <p class="text description">Hermoso embalse de playas blancas a la orilla de las sierras.</p>
                </div>

                <div class="info next--info">
                  <h1 class="text name">Embalse</h1>
                  <h4 class="text location">Nogolí</h4>
                  <p class="text description">Rodeado en un marco natural ideal, con varias islas que lo hacen único en nuestra provincia.</p>
                </div>

                <div class="info previous--info">
                  <h1 class="text name">Salto Escondido</h1>
                  <h4 class="text location">San Francisco</h4>
                  <p class="text description">En plena Sierras de San Luis y con 70mtrs de altura te espera para una aventura única.</p>
                </div>
              </div>
            </div>
            <div class="loading__wrapper">
                <div class="loader--text"></div>
                <div class="loader">
                  <span><Loading margins="150px" /></span>
                </div>
             </div>
            <div class="app__bg" ref={this.state.appBgContainerEl}>
              <div class="app__bg__image current--image">
                <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/piscuyaco.jpg" alt="" />
              </div>
              <div class="app__bg__image next--image">
                <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/potrero.jpg" alt="" />
              </div>
              <div class="app__bg__image previous--image">
                <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/imperdiblesHome/rutaNogoliCarolina.jpg" alt="" />
              </div>
            </div>
          </div>
          <svg class="icons" style={{ display: "none" }}>
            <symbol
              id="arrow-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polyline
                points="328 112 184 256 328 400"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokelinecap: "round",
                  strokelinejoin: "round",
                  strokewidth: "48px",
                }}
              />
            </symbol>
            <symbol
              id="arrow-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polyline
                points="184 112 328 256 184 400"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokelinecap: "round",
                  strokelinejoin: "round",
                  strokewidth: "48px",
                }}
              />
            </symbol>
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

CardImperdibles.contextType = Consumer;

export default CardImperdibles;
