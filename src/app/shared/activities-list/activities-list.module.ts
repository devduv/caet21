import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';



@NgModule({
  declarations: [ActivitiesListComponent],
  imports: [CommonModule],
  exports: [ActivitiesListComponent]
})
export class ActivitiesListModule { }
