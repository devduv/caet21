import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import es from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuModule } from './shared/menu/menu.module';
import { SidenavListModule } from './shared/sidenav-list/sidenav-list.module';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule,
    MenuModule,
    MatSidenavModule,
    SidenavListModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AsyncPipe,
    { provide: LOCALE_ID, useValue: 'es_ES' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
