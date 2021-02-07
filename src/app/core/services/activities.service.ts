import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private http: HttpClient
  ) { }

  async getActivities() {
    return await this.http.get<any>('./configuration/activities.json').toPromise();
  }
}
