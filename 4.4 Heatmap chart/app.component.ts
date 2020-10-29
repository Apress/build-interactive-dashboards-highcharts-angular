import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);



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
      type: 'heatmap',
      plotBorderWidth: 1
    },
    title: {
      text: 'Daily marks obtained per student per weekday'
    },
    xAxis: {
      categories: ['John', 'Dale', 'Jacob', 'Johnson', 'Thomas', 'James', 'Mike', 'Jaeffry', 'Ben', 'Jack']
    },
    yAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280
    },
    series: [{
      name: 'Marks per student',
      borderWidth: 1,
      data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24],
      [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 94],
      [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 84], [2, 3, 64],
      [2, 4, 52], [3, 0, 72], [3, 1, 78], [3, 2, 98], [3, 3, 19],
      [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 75],
      [4, 4, 55], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6],
      [5, 4, 50], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98],
      [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32],
      [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64],
      [8, 4, 84], [9, 0, 47], [9, 1, 24], [9, 2, 31],
      [9, 3, 48], [9, 4, 91]],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }]
  }
}