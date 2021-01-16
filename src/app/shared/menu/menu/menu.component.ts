import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeMenu(menu) {
    this.router.navigate([menu]);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
