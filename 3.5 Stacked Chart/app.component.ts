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
      text: 'Total hours studies in a week'
    },
    xAxis: {
      categories: ['Maths', 'Science', 'History', 'Social Science', 'English']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total Hour studied'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'red'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Rocy',
      data: [4, 2, 1, 8, 9]
    },
    {
      name: 'Luies',
      data: [1, 5, 1, 4, 2]
    },
    {
      name: 'Simon',
      data: [7, 2, 3, 1, 4]
    }]
  }
}

