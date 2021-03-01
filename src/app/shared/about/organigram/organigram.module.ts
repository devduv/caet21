import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganigramComponent } from './organigram/organigram.component';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { ChartComponent } from './chart/chart.component';
import { FooterModule } from '../../footer/footer.module';


@NgModule({
  declarations: [OrganigramComponent, ChartComponent],
  imports: [CommonModule, NgxOrgChartModule, FooterModule],
  exports: [OrganigramComponent]
})
export class OrganigramModule { }
