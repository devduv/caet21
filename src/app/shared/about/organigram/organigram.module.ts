import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganigramComponent } from './organigram/organigram.component';



@NgModule({
  declarations: [OrganigramComponent],
  imports: [CommonModule],
  exports: [OrganigramComponent]
})
export class OrganigramModule { }
