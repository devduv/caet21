import { Conference } from '../../../core/models/Conference';
import { Workshop } from '../../../core/models/Workshop';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
declare var showStatic: any;

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit, AfterViewInit {

  @Input()
  activities: any;

  workshops: Workshop[];
  conferences: Conference[];

  ngOnInit() {
    this.getActivities();
  }

  ngAfterViewInit() {
    showStatic();
  }

  constructor(
  ) {
   
  }

  public getActivities() {
    this.setWorkshops();
    this.setConferences();
  }

  private setWorkshops() {
    this.workshops = this.activities?.workshops;
  }

  private setConferences() {
    this.conferences = this.activities?.conferences;
  }
}
