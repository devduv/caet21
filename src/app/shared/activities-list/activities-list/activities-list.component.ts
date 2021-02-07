import { Conference } from '../../../core/models/Conference';
import { Workshop } from '../../../core/models/Workshop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { Activity } from 'src/app/core/models/Activity';
declare var showStatic: any;

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit, AfterViewInit {

  breakpoint: any;

  activities: any;
  workshops: Workshop[];
  conferences: Conference[];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
  }

  ngAfterViewInit() {
    showStatic();
  }

  constructor(
    private activitiesService: ActivitiesService
  ) {
    this.getActivities();
  }

  async getActivities() {
    this.activities = await this.activitiesService.getActivities();
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
