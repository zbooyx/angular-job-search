import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OffersService {

  constructor(private http: HttpClient) {
  }

  getOffers() {
    return this.http.get('http://localhost:3000/offers');
  }

  getCities() {
    return this.http.get('http://localhost:3000/stateAndCity');
  }

  getNumberOfOffers() {
    return this.http.get('http://localhost:3000/offersAmount');
  }
}

