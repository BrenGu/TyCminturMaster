import React, { Component} from "react";
import axios from "axios";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      boxWeather: React.createRef(),
      locationWeather: React.createRef(),
      tempWeather: React.createRef(),
      dateWeather: React.createRef(),
      weathercon: React.createRef()
    };

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.weather = this.weather.bind(this);
    this.display = this.display.bind(this);
  }

  error() {
    console.log("There was an error");
  }

  display(data) {
    var city = data.name.toUpperCase();
    var temp = Math.round(data.main.temp_max) + " °C";
    var date = new Date();

    var months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ];

    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miercoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sabado";

    var font_color;
    var bg_color;
    if (Math.round(data.main.temp_max) > 25) {
      font_color = "#d36326";
      bg_color = "#f3f5d2";
    } else {
      font_color = "#44c3de";
      bg_color = "#eff3f9";
    }

    if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
        this.state.weathercon.current.appendChild = <i class='fas fa-sun' style={{color: "#d36326"}}></i>;
    } else {
        this.state.weathercon.current.appendChild = <i class='fas fa-cloud' style={{color: "#44c3de"}}></i>;
    }

    var minutes =   date.getMinutes() < 11 ?( "0" + date.getMinutes() ): date.getMinutes();
    var date =  weekday[date.getDay()].toUpperCase() + " | " + months[date.getMonth()].toUpperCase().substring(0, 3) + " " + date.getDate() + " | " + date.getHours() + " : " + minutes;
    
    this.state.locationWeather.current.innerText = city;
    this.state.dateWeather.current.innerText = date;
    this.state.tempWeather.current.innerText = temp;

    this.state.boxWeather.current.background = bg_color;
    this.state.locationWeather.current.color = font_color;
    this.state.tempWeather.current.color = font_color;
      
  }

  weather(lat, long) {
    axios({
        method: "get",
        headers: {
          Authorization: "token",
        },
        url: `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`,
        responseType: "json",
      })
        .then((response) => {
            console.log(response.data);
            this.display(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
    success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        this.weather(lat, long);
    }

	componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }

	render() {
		return(
			<React.Fragment>
                <div class='boxWeather' ref={this.state.boxWeather}>
                    <div class='wave -one'></div>
                    <div class='wave -two'></div>
                    <div class='wave -three'></div>
                    <div class="weathercon" ref={this.state.weathercon}>
                        <i class='fas fa-sun' style={{color: "#d36326"}}></i>
                    </div>
                    <div class="infoWeather">
                        <h2 class="locationWeather" ref={this.state.locationWeather}>SAN LUIS</h2>
                        <p class="dateWeather" ref={this.state.dateWeather}>LUNES | SEP 12 | 12:00</p>
                        <h1 class="tempWeather" ref={this.state.tempWeather}>25 °C</h1>
                    </div>
                </div>
			</React.Fragment>
		);
	}
}


//CardCiudades.contextType = Consumer;

export default WeatherCard;