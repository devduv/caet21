import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'actividades',
    loadChildren: () =>
      import('./pages/activities/activities.module').then((m) => m.ActivitiesModule),
  },
  {
    path: 'contáctenos',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
