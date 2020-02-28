import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getData() {
    return this.http.get('http://api.shadnetwork.com/rubrik');
  }
  getDataLogin() {
    return this.http.get('http://api.shadnetwork.com/login/spangat/g7142/');
  }

}
