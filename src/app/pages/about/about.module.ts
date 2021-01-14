import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { HistoryModule } from './../../shared/about/history/history.module';
import { PurposeModule } from 'src/app/shared/about/purpose/purpose.module';
import { OrganigramModule } from 'src/app/shared/about/organigram/organigram.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
  CommonModule,
    LayoutModule,
    AboutRoutingModule,
    HistoryModule,
    PurposeModule,
    OrganigramModule
  ]
})
export class AboutModule { }
