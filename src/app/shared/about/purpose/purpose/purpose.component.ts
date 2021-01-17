import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var showStatic: any;
@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit, AfterViewInit {

  constructor()
  { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    showStatic();
  }

}
