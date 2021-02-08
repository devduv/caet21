import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public activities: any;
  constructor(
    private menuService: MenuService,
    private activitiesService: ActivitiesService
  ) {
   }

  async ngOnInit() {
    this.menuService.changeMenu(Menu.activities);
    await this.getActivities();
   
  }

  async getActivities() {
    this.activities = await this.activitiesService.getActivities();
  }

}
