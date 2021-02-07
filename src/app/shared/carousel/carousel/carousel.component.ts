import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselService } from 'src/app/core/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public images: any[];
  constructor(
    private carouselService: CarouselService
  ) {
  }

  ngOnInit() {
    this.getCarousel();
  }

  async getCarousel() {
    this.images = await this.carouselService.getCarousel();
  }

  public handleCarouselEvents($event) {
    console.log($event);
  }

}
