import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, IvyCarouselModule],
  exports: [CarouselComponent]
})
export class CarouselModule { }
