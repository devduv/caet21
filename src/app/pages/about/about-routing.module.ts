import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from 'src/app/shared/about/history/history/history.component';
import { AboutComponent } from './about/about.component';
import { PurposeComponent } from './../../shared/about/purpose/purpose/purpose.component';
import { OrganigramComponent } from 'src/app/shared/about/organigram/organigram/organigram.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'historia',
    component: HistoryComponent,
  },
  {
    path: 'proposito',
    component: PurposeComponent,
  },
  {
    path: 'organigrama',
    component: OrganigramComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule { }
