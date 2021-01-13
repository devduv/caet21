import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [SidenavListComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [SidenavListComponent],

})
export class SidenavListModule { }
