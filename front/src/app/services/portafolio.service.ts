import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url = "api/products/";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Products[]>(this.url);
  }

  getAllProduction() {
    return this.http.get<Products[]>("https://api.colchoneslondonbeds.com/api/products");
  }

  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.url + id);
  }

}
