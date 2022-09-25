import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor(private http: HttpClient) { }

  getAllProduction() {
    return this.http.get<Products[]>("https://api.colchoneslondonbeds.com/api/products");
  }

  getProductById(id: any) {
    return this.http.get<Products[]>("https://api.colchoneslondonbeds.com/api/products/"+id);
  }

}
