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
      type: 'column'
    },
    title: {
      text: 'Histogram for Rainfall'
    },
    xAxis: {
      categories: [
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    
    },
    yAxis: {
      title: { text: 'Rain in mm' },
      min: 0,
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        shadow: false
      }
    },
    series: [{
      name: 'Month',
      data: [49.9, 71.5, 106.4, 129.2, 144.0]
    }]
  }
}