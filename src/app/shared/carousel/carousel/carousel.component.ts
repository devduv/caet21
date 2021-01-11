import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('myCarousel', {static: false}) myCarousel;
  
  public images: any[];
  constructor() {
    this.initImages();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.myCarousel);
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
