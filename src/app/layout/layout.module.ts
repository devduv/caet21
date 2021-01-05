import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuModule } from '../shared/menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [LayoutComponent],
})
export class LayoutModule { }
