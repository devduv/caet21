import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.menuService.subscribe(() => {});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeMenu(menu) {
    this.router.navigateByUrl(menu);
  }

    
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
