import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  
  @Output() sidenavClose = new EventEmitter();

  constructor(
    private menuService: MenuService,
    private router: Router) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  changeMenu(menu) {
    this.sidenavClose.emit();
    this.router.navigateByUrl(menu);
  }


}
