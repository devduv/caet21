import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormModule } from 'src/app/shared/contact-form/contact-form.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
  CommonModule,
    ContactRoutingModule,
    ContactFormModule,
    FooterModule
  ]
})
export class ContactModule { }
