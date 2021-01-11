import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { IgxCarouselModule } from 'igniteui-angular';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    IgxCarouselModule,
    IvyCarouselModule,
    MatIconModule,
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }
