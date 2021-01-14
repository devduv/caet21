import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { HistoryComponent } from 'src/app/shared/about/history/history/history.component';
import { AboutComponent } from './about/about.component';
import { PurposeComponent } from './../../shared/about/purpose/purpose/purpose.component';
import { OrganigramComponent } from 'src/app/shared/about/organigram/organigram/organigram.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'Historia',
    component: LayoutComponent,
    children: [{ path: '', component: HistoryComponent }]
  },
  {
    path: 'Proposito',
    component: LayoutComponent,
    children: [{ path: '', component: PurposeComponent }]
  },
  {
    path: 'Organigrama',
    component: LayoutComponent,
    children: [{ path: '', component: OrganigramComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AboutRoutingModule {}
