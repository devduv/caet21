import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }

  async getCarousel() {
    return await this.http.get<any>('./configuration/carousel.json').toPromise();
  }
}
