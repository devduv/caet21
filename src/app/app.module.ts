import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import es from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es_ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
