import React, { Component } from "react";
import Graficos from "../components/Graficos"
import { Consumer } from "../context";
import axios from "axios";

class Estadistica extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        id: 0 ,
        flag: false,
        dataFinal: []
      };
      this.getData = this.getData.bind(this);
    }

    async getData() {
        let data1 = [];
        let token = this.context.token;
        let self = this;
        
        await axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/graficos/${this.state.id}`,
            responseType: "json"
        })
        .then((response) => {
          response.data.data.registros.forEach(element => {
            if(element.valores.length != 0){
              data1.push({
                title: element.tipoNombre,
                data: element.valores
              });  
            }else{
              data1.push({
                title: element.tipoNombre,
                data: [{etiqueta: "", valor: "0"}]
              });
            }
          });
        
          this.setState({
            data: response.data.data.registros,
            dataFinal: data1
          })
        })
        .catch((error) => {
            console.log(error);
        });
      }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id || this.props.updateOnOpen !== prevProps.updateOnOpen) {
      this.setState(
        {
          id: this.props.id,
          flag: this.props.updateOnOpen
        },
        () => {
          if(this.state.flag == this.state.id){
            this.getData(0);
          }
        }
      );
    }
  }
    
  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        id: this.props.id,
        flag: this.props.updateOnOpen
      },
      () => {
        if(this.state.flag){
          this.getData(0);
        }
      }
    );
  }
    render() {
        var pos = -1;
        const graph = this.state.data.map((element) => {
        pos++;
        var año = element.fechaDesde.toString().substring(0, 4)
        var fechDesde = element.fechaDesde.toString().substring(8, 10);
        var fechHasta = element.fechaHasta.toString().substring(8, 10);

        if(element.tipoGrafico == "bar" || element.tipoGrafico == "bar-withouty"){
            return(
            <div className="sub-chart-wrapper">
                <div className="sub-chart-wrapper-titulo">{`${element.titulo} del ${fechDesde} al ${fechHasta} de ${año}`}</div>
                <div className="sub-chart-wrapper-subtitulo">{element.tipoNombre}</div>
                <Graficos
                tipo={element.tipoGrafico}
                data={this.state.dataFinal[pos].data}
                title={this.state.dataFinal[pos].title}
                color="#46BFBD"
            />
            </div>
            );
        }else{
            return(
                <div className="sub-chart-wrapper">
                    <div className="sub-chart-wrapper-titulo">{`${element.titulo} del ${fechDesde} al ${fechHasta} de ${año}`}</div>
                    <div className="sub-chart-wrapper-subtitulo">{element.tipoNombre}</div>
                    <Graficos
                    tipo={element.tipoGrafico}
                    data={this.state.dataFinal[pos].data}
                    title={this.state.dataFinal[pos].title}
                    color={["#F7464A", "#46BFBD", "#FDB45C", '#3e517a', '#b08ea2', '#BBB6DF', '#20E000', '#8032BF', '#FF8B09', '#D5FF42', '#F77373', '#66FFEE', '#F0F57D']}
                />
                </div>
            );
        }
    });
        return (
            <React.Fragment>     
            <div className="main-chart-wrapper" >
                {graph}
            </div>                       
           </React.Fragment>                    
        );
    }
  }

  Estadistica.contextType = Consumer;

  export default Estadistica;

