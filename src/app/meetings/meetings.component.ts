import { Component, OnInit } from '@angular/core';
import { CalendarView,CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  viewDate: Date = new Date();

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]
}
