import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
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
      type: 'pie',
    },
    title: {
      text: 'Pie Chart with drill down Feature'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
      name: 'JavaScript Frameworks',
      data: [
        {
          name: 'Angular',
          y: 62.12,
          drilldown: 'angular-versions'
        },
        ['VueJs', 9.35],
        ['ReactJs', 15.89],
        ['Jquery', 12.64]
      ]
    }],
    drilldown: {
      series: [{
        name: 'Angular versions',
        id: 'angular-versions',
        data: [
          ['Angular Js', 17.07],
          ['Angular 2', 25],
          ['Angular 5', 30],
          ['Angular 7', 20.58],
          ['Angular 8', 7.35]
        ]
      }]
    }
  }
}