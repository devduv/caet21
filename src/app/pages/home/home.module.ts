import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { DescriptionGroupComponent } from './description-group/description-group.component';

@NgModule({
  declarations: [HomeComponent, DescriptionGroupComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
