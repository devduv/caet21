import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurposeComponent } from './purpose/purpose.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [PurposeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
  ]
})
export class PurposeModule {
  showFiller = false;
}
