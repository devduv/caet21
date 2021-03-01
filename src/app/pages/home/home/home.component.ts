import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractService } from 'src/app/core/services/abstract.service';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

declare var showStatic: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public abstractList: any[];
  constructor(
    private menuService: MenuService,
    private abstractService: AbstractService
  ) {
  }

  ngOnInit() {
    this.menuService.changeMenu(Menu.home);
    
  }
  ngAfterViewInit() {
    showStatic();
    this.getAbstract();
  }

  async getAbstract() {
    this.abstractList = await this.abstractService.getAbstract();
  }

}
