import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
