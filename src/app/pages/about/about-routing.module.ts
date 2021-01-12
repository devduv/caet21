import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout/layout.component';
import { HistoryComponent } from 'src/app/shared/about/history/history/history.component';
import { AboutComponent } from './about/about.component';
import { PurposeComponent } from './../../shared/about/purpose/purpose/purpose.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'historia',
    component: HistoryComponent
  },
  {
    path: 'proposito',
    component: PurposeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AboutRoutingModule {}
