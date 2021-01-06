import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurposeComponent } from './purpose/purpose.component';



@NgModule({
  declarations: [PurposeComponent],
  imports: [CommonModule],
  exports: [PurposeComponent]
})
export class PurposeModule { }
