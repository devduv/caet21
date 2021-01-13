import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  public images: any[];
  constructor() {
    this.initImages();
  }

  ngOnInit() {
  }

  private initImages() {
    this.images = [
      { path: './assets/images/portada.png' },
      { path: './assets/images/fisi.jpg' },
      { path: './assets/images/xd.png' },
      { path: './assets/images/bigdata.jpg' },
      
    ];
  }

  public handleCarouselEvents($event) {
    console.log($event);
  }

}
