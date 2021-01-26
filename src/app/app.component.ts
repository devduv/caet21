import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
    }, 1500);
  }

  changeMenu(menu) {
    this.router.navigateByUrl(menu);
  }
}
