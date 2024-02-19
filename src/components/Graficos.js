import React, { Component } from "react";
import Chart from "chart.js"
import { MDBFormInline } from "mdbreact";

class Graficos extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.getData = this.getData.bind(this);
  }

  getData(){
    Chart.pluginService.register({
      beforeRender: function (chart) {
        if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function (dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });
    
            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },
      afterDraw: function (chart, easing) {
        if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }
    
            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
      }
    });

    this.myChart = new Chart(this.canvasRef.current, {
      type: this.props.tipo == "bar-withouty" ? "bar" : this.props.tipo,
      options: {
        //showAllTooltips: this.props.tipo == "bar-withouty" || this.props.tipo == "bar" ? false: true,
        plugins: {
          tooltip: {
            enabled: false
          },
        },
        tooltips:{
          enabled: true,
          mode: 'single',
          callbacks: this.props.tipo == "bar-withouty" || this.props.tipo == "bar" ? {
              title: function (tooltipItem, data) { 
                  return data.labels[tooltipItem[0].index]; 
              },
              label: function(tooltipItems, data) {
                  return tooltipItems.yLabel;
              }
          }: {
            title: function (tooltipItem, data) { 
              return data.labels[tooltipItem[0].index]; 
            },
            label: function(tooltipItems, data) {
                return data.datasets[0].data[tooltipItems.index];
            }
          }
        },
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutElastic",
          duration: 1300,
        },
        scales: this.props.tipo == "bar" ? {
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ],
        } : this.props.tipo == "bar-withouty" ? {
          yAxes: [
            {
              display: false,
              ticks: {
                min: 0
              }
            }
          ],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }]
        }
          :
          ""
      },
      data: {
        labels: this.props.tipo == "bar" || this.props.tipo == "bar-withouty" ? this.props.data.map(d => d.etiqueta) : this.props.data.map(d => d.etiqueta + " - " + d.valor + "%"),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.valor),
          backgroundColor: this.props.color,
        }]
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.myChart.data.labels = this.props.tipo == "bar" || this.props.tipo == "bar-withouty" ? this.props.data.map(d => d.etiqueta) : this.props.data.map(d => d.etiqueta + " - " + d.valor + "%");
      this.myChart.data.datasets[0].label = this.props.title;
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.valor);
      this.myChart.update();
      this.getData();
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
}

export default Graficos;