import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHighChartsApp';
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'scatter',
      zoomType: 'xy'
    },
    title: {
      text: 'Height V/s Weight of S.T. Thomas Collage by Gender'
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Height (cm)'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Weight (kg)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 40,
      floating: true,
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: 'black'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: true
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x} cm, {point.y} kg'
        }
      }
    },
    series: [{
      name: 'Female',
      color: 'red',
      data: [[151.2, 53.1], [157.3, 51.0], [169.5, 69.2], [147.0, 50.0], [175.8, 83.6], [150.0, 51.0], [151.1, 57.9], [156.0, 79.8], [146.2, 46.8], [158.1, 74.9],
      ]
    }, {
      name: 'Male',
      color: 'blue',
      data: [[172.0, 63.7], [165.3, 72.7], [183.5, 79.2],
      [176.5, 75.7], [177.2, 85.8],
      [171.5, 64.8], [181, 82.4], [174.5, 77.4], [177.0, 61.0], [174.0, 83.7],
      ]
    }]
  }
}