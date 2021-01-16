import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ActivitiesListComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule],
  exports: [ActivitiesListComponent]
})
export class ActivitiesListModule {


}
