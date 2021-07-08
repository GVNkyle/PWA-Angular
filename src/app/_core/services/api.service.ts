
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/response-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  fetch(): Observable<ResponseData[]> {
    return this.http.get<ResponseData[]>(this.baseURL);
  }
}
