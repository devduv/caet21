import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  URL_API = 'https://caet21-backend-test.herokuapp.com/contacto'

  constructor(
    private http: HttpClient,
  ) { }

  sendContactoData(data: any) {
    return this.http.post(this.URL_API, data);
  }
}
