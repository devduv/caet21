import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganigramComponent } from './organigram/organigram.component';

import { NgxOrgChartModule } from 'ngx-org-chart';


@NgModule({
  declarations: [OrganigramComponent],
  imports: [CommonModule, NgxOrgChartModule ],
  exports: [OrganigramComponent]
})
export class OrganigramModule { }
