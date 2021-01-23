import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './../../shared/contact-form/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
  {
    path: 'form',
    component: ContactFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
