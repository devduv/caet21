import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuModule } from '../shared/menu/menu.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../shared/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { SidenavListModule } from '../shared/sidenav-list/sidenav-list.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, MenuModule,SidenavListModule, FooterModule, MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule],
  exports: [LayoutComponent],
})
export class LayoutModule { }
