import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.menuService.changeMenu(Menu.contact);
  }

}
