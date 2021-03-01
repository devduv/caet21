import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { DescriptionGroupComponent } from './description-group/description-group.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  declarations: [HomeComponent, DescriptionGroupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    FooterModule
  ]
})
export class HomeModule { }
