import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
