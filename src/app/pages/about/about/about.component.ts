import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.changeMenu(Menu.about);
  }

}
