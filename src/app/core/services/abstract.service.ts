import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(
    private http: HttpClient
  ) { }

  async getAbstract() {
    return await this.http.get<any>('./configuration/abstract.json').toPromise();
  }
}
