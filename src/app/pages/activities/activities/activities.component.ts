import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.changeMenu(Menu.activities);
  }

}
