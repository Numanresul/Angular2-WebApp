import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public items = [
    { id: 1, name: 'Evaluate', color: '#fb3064', status: 'open', user: 'Numan', priority: 1 },
    { id: 2, name: 'Call customer', color: '#71dd8f', status: 'working', user: 'Burak', priority: 1 },
    { id: 3, name: 'Fix bugs', color: '#29aa82', status: 'open', user: 'Berkay', priority: 1 },
    { id: 3, name: 'Create SCSS', color: '#e14a2f', status: 'open', user: 'Numan', priority: 1 },
    { id: 4, name: 'Boil water', color: '#209ab7', status: 'working', user: 'Numan', priority: 2 },
    { id: 4, name: 'Walking the doggo', color: '#b3f7dd', status: 'done', user: 'İlker', priority: 3 },
    { id: 4, name: 'Prepare for xmas', color: '#ea6562', status: '', user: '' },
    { id: 4, name: 'Birthday preps', color: '#b4ade5', status: 'test', user: 'Mustafa', priority: 5 }
  ];

  public vGroupKeys = ['open', 'working', 'test', 'done'];
  public hGroupKeys = ['İlker', 'Numan', 'Burak', 'Berkay', 'Mustafa'];

  public vGroupKey = 'status';
  public hGroupKey = 'user';
  public sortBy = 'priority';
}
