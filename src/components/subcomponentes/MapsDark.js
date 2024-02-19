import React, { Component } from "react";
import { Link } from "react-router-dom";

class MapsDark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: "ec94e128ca41ccaf",
      lat: 0,
      lng: 0,
      zoom: 13,
      gwidth: "100%",
      gheight: "100%",
      marker: null,
      maptype: "roadmap",
      data: [

      ],
    };
    this.setMap = this.setMap.bind(this);
    this.initMap = this.initMap.bind(this);
  }
  initMap(id) {
    console.log(this.props.data);
    this.setState(
      {
        id: id,
        lat: this.props.lat,
        lng: this.props.lng,
        zoom: parseInt(this.props.zoom, 10),
        gwidth: this.props.gwidth,
        gheight: this.props.gheight,
        data: this.props.data,
      },
      () => {
        console.log(this.state.data);

        let { lat, zoom, data } = this.state;
        if (data.length !== 0) {
          let x = 0;
          let locations = [];
          data.forEach((data1) => {
            console.log();
            var lng = parseFloat(this.state.lng[x], 10);
            var lat = parseFloat(this.state.lat[x], 10);
            var nombre = data1.nombre;
            locations.push({ lat, lng, nombre });
            x++;
          });
        
          

          console.log(this.state.data);

          var latNew = locations[0].lat;
          var lngNew = locations[0].lng;

          const map = new window.google.maps.Map(
            document.getElementById(this.state.id),
            {
              zoom: zoom,
              mapTypeId: "roadmap",
              center: { lat: latNew, lng: lngNew },
            }
          );

          map.addListener("zoom_changed", () => {
            this.setState({
              zoom: map.getZoom(),
            });
          });

          map.addListener("maptypeid_changed", () => {
            this.setState({
              maptype: map.getMapTypeId(),
            });
            console.log(this.state.data);
          });

          //Lineas flotantes
          /*const flightPath = new window.google.maps.Polyline({
                    path: locations,
                    strokeColor: "#FF0000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                flightPath.setMap(map);*/

          const markers = locations.map((location, i) => {
            var descripcion = "";
            if (data[i].descripcion.length > 395) {
              descripcion = data[i].descripcion.substr(0, 395) + "...";
            } else {
              descripcion = data[i].descripcion;
            }

            var contentString;
            if (data[i].tipo === "Ciudades") {
              console.log(this.state.data);

              contentString =
                '<div id="containerBoxMap">' +
                '<div id="success-box">' +
                '<div class="radar"></div>' +
                "</div>" +
                '<div class="shadow scale"></div>' +
                `<div class="messageBoxMap"><h1 class="alertBoxMap">${data[i].tipo}</h1></div>` +
                `<a class="button-boxMap" href='#/localidad/${data[i].idciudad}' target='_blank'><h1 class="green alertBoxButtonMap">Conossscer mas</h1></a>` +
                "</div>" +
                "</div>";

              /*contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        `<h3 id="firstHeading" class="firstHeading">${data[i].nombre}</h3>` +
                        '<div id="bodyContent">' +
                        `<p>${descripcion} </p>` +
                        `<a href='#/localidad/${data[i].idciudad}'>
                            Clickea aca si queres saber mas de la localidad !!
                        </a>` +
                        `<br/>`+
                        `<a href='http://maps.google.co.uk/maps?q=${location.lat},${location.lng}' target='_blank'>
                            Ver en google maps
                        </a>` +
                        "</div>" +
                        "</div>";*/
            } else {
              console.log(data[i] + i);

              contentString =
                '<div id="containerBoxMap">' +
                '<div id="success-box">' +
                '<div class="radar"></div>' +
                "</div>" +
                '<div class="shadow scale"></div>' +
                `<div class="messageBoxMap"><h1 class="alertBoxMap">${location.nombre} </h1></div>` +

                `<a class="button-boxMap" href='http://maps.google.co.uk/maps?q=${location.lat},${location.lng}' target='_blank'><h1 class="green alertBoxButtonMap">Ver Ubicación</h1></a>` +
                "</div>" +
                "</div>";

              /*contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        `<h3 id="firstHeading" class="firstHeading">${data[i].nombre}</h3>` +
                        '<div id="bodyContent">' +
                        `<p>${descripcion} </p>` +
                        `<a href='#/atractivo/${data[i].id}'>
                            Clickea aca si queres saber mas del atractivo!!
                        </a>` +
                        `<br/>`+
                        `<a href='http://maps.google.co.uk/maps?q=${location.lat},${location.lng}' target='_blank'>
                            Ver en google maps
                        </a>` +
                        "</div>" +
                        "</div>";*/
            }

            const infowindow = new window.google.maps.InfoWindow({
              content: contentString,
            });

            var marker = new window.google.maps.Marker({
              map: map,
              position: { lat: location.lat, lng: location.lng },
            });
            marker.addListener("click", () => {
              infowindow.open(map, marker);
            });
          });

          this.setState({
            marker: markers,
          });
        }
      }
    );
  }

  setMap(id) {
    this.setState(
      {
        id: id,
        lat: parseFloat(this.props.lat, 10),
        lng: parseFloat(this.props.lng, 10),
        zoom: parseInt(this.props.zoom, 10),
        gwidth: this.props.gwidth,
        gheight: this.props.gheight,
      },
      () => {
        let { lat, lng, zoom } = this.state;

        let map = new window.google.maps.Map(
          document.getElementById(this.state.id),
          {
            center: { lat: lat, lng: lng },
            zoom: zoom,
            mapTypeId: "roadmap",
          }
        );

        map.addListener("zoom_changed", () => {
          this.setState({
            zoom: map.getZoom(),
          });
        });

        map.addListener("maptypeid_changed", () => {
          this.setState({
            maptype: map.getMapTypeId(),
          });
        });

        let marker = new window.google.maps.Marker({
          map: map,
          position: { lat: lat, lng: lng },
        });

        this.setState({
          marker: marker,
        });
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
      if (Object.prototype.toString.call(this.props.lat) === "[object Array]") {
        this.initMap(this.state.id);
      } else {
        this.setMap(this.state.id);
      }
    }
  }

  componentDidMount() {
    this.setState(
      {
        id:
          "map-" +
          Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substr(0, 5),
      },
      () => {
        if (
          Object.prototype.toString.call(this.props.lat) === "[object Array]"
        ) {
          if (this.props.lat.length != 0) {
            this.initMap(this.state.id);
          } else {
          }
        } else {
          this.setMap(this.state.id);
        }
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div id={`${this.state.id}`} className="gmapa" />

        <style jsx="true">{`
          .gmapa {
            width: ${this.state.gwidth};
            height: ${this.state.gheight};
            border-radius: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MapsDark;
