import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesListModule } from 'src/app/shared/activities-list/activities-list.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';



@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ActivitiesListModule,
    FooterModule
  ]
})
export class ActivitiesModule { }
