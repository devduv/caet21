import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
  }

  changeMenu(menu) {
    this.router.navigateByUrl(menu);
  }
}
