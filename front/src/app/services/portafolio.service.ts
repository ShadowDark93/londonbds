import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url: string ="https://api.colchoneslondonbeds.com/api/products/"

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Products[]>(this.url);
  }

  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(this.url + id);
  }
}
