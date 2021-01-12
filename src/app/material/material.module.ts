import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
  CommonModule,

  ],
  exports: [
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
