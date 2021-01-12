import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.scss']
})
export class PurposeComponent implements OnInit {

  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(

  ) { }
  ;
  ngOnInit() {
  }

  closeAllPanels(){
    this.accordion.closeAll();
  }
  openAllPanels(){
    this.accordion.openAll();
  }

}
