import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ActivitiesListModule } from 'src/app/shared/activities-list/activities-list.module';



@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ActivitiesRoutingModule,
    ActivitiesListModule
  ]
})
export class ActivitiesModule { }
