import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
  CommonModule,
  LayoutModule,
  ]
})
export class HistoryModule { }
