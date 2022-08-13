import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, params: object = {}, customHeaders: {} = {}) {
    return this.http.get<any>(url);
  }
}
