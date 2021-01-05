import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Menu {
  home = 0,
  about = 1,
  activities = 2,
  contact = 3
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu = new BehaviorSubject<number>(Menu.home);

  constructor() {}

  changeMenu(menu: Menu) {
    this.menu.next(menu);
  }

  subscribe(work: any) {
    return this.menu.subscribe(work);
  }
}
