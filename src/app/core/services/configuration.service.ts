import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    private http: HttpClient
  ) { }

  async getConfiguration() {
    return await this.http.get<any>('./configuration.json').toPromise();
  }
}
