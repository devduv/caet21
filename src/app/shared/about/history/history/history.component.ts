import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var showStatic: any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    showStatic();
  }
}
