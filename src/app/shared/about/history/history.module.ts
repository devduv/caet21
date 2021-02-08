import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { FooterModule } from '../../footer/footer.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
  CommonModule,
  FooterModule
  ]
})
export class HistoryModule { }
