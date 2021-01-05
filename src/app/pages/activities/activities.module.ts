import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { LayoutModule } from 'src/app/layout/layout.module';



@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
