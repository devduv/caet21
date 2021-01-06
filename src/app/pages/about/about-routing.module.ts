import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { HistoryComponent } from 'src/app/shared/about/history/history/history.component';
import { OrganigramComponent } from 'src/app/shared/about/organigram/organigram/organigram.component';
import { PurposeComponent } from 'src/app/shared/about/purpose/purpose/purpose.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'historia', component: HistoryComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'proposito', component: PurposeComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'organigrama', component: OrganigramComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
