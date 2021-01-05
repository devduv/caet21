import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
