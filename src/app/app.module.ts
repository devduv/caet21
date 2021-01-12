import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import es from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es_ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
