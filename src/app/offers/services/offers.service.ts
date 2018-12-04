import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OffersService {

  constructor(private http: HttpClient) {
  }

  getOffers() {

  }

  getCities() {
    return this.http.get( 'http://localhost:3000/stateAndCity');
  }
}
