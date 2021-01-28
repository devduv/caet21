import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  async getHistory() {
    return await this.http.get<any>('./configuration/history.json').toPromise();
  }
}
