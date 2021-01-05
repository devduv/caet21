import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.changeMenu(Menu.home);
  }

}
