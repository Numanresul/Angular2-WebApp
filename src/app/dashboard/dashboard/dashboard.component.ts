import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
  }


  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Project PMS Members Count' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgb(219, 122, 10)',
      backgroundColor: '#007bff63',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType= 'line';


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartColors: Color[] = [
    {
      backgroundColor: 'rgb(219, 122, 10)'
    },
  ];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Securify Id Ranks' }
  ];


  doughnutChartLabels: Label[] = ['PMS', 'SecurifyId', 'WhiteBox'];
  doughnutChartData = [
    [55, 25, 20]
  ];
  doughnutChartType : ChartType= 'doughnut';
  doughnutChartColors: Color[] = [

    { // dark grey
      backgroundColor: ['rgb(219, 122, 10)','#007bff99','#6faf1a'],
      
    }
  ];

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';
  radarChartColors: Color[] = [
    {
      borderColor: 'rgb(219, 122, 10)',
      backgroundColor: '#007bff63',
    },
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 25 },
        { x: 36, y: 12, r: 33 },
        { x: 10, y: 18, r: 18 },
      ],
      label: 'Investment Equities',
    },
  ];
  bubbleChartColors: Color[] = [
    {
      borderColor: 'rgb(219, 122, 10)',
      backgroundColor: ['#007bff99','rgb(219, 122, 10)','#6faf1a','rgb(219, 122, 10)'],
    }
  ];
}
