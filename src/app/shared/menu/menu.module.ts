import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatMenuModule } from "@angular/material";



@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule,  MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule],
  exports: [MenuComponent],
})
export class MenuModule { }
