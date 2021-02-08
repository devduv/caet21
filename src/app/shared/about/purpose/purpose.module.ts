import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurposeComponent } from './purpose/purpose.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterModule } from '../../footer/footer.module';



@NgModule({
  declarations: [PurposeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    MatGridListModule,
    FooterModule
  ]
})
export class PurposeModule {
  showFiller = false;
}
