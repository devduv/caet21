import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './core/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
  }

  changeMenu(menu) {
    this.router.navigateByUrl(menu);
  }
}
