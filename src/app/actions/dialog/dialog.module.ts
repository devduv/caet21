import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[DialogComponent]
})
export class DialogModule { }
