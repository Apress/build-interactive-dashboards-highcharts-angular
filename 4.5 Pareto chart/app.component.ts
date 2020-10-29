import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import Pareto from 'highcharts/modules/pareto.src';
Pareto(Highcharts);
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
      type: 'column'
    },
    title: {
      text: 'Haifall Reasons for Men',
    },
    tooltip: {
      shared: true,
    },
    xAxis: {
      categories: [
        'Genetically',
        'Cosmetic damage',
        'Stress',
        'Smoke',
        'Vitamin Defficiency',
        'Infections',
      ],
    },
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
        format: "{value}%"
      }
    }],
    series: [{
      type: 'pareto',
      name: 'Pareto',
      yAxis: 1, //number of declared yAxis
      baseSeries: 1 //index of column series
    }, {
      name: 'Frequency',
      type: 'column',
      data: [50, 15, 11, 6, 3, 2],
      color: '#FF0000'
    }]
  };
}