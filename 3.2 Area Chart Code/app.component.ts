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
      type: 'area'
    },
    title: {
      text: 'Average scored by students in Computer Science'
    },
    xAxis: {
      categories: ['Quarterly', 'Six Monthly', 'Final Year'],
    },
    yAxis: {
      title: {
        text: 'Average Scores'
      }
    },
    series: [{
      name: 'Computer Science Score',
      data: [45, 75, 80]
    }],
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  }
}