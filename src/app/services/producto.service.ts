import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  api_uri_nodejs = 'http://localhost:3001';
  api_uri_django = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/productos/`;
  constructor(private http: HttpClient) {}

  getAllproducto(): Observable<{ producto: ProductoI[] }> {
    return this.http.get<{ producto: ProductoI[] }>(this.base_path);
  }

  getOneproducto(): Observable<{ producto: ProductoI[] }> {
    return this.http.get<{ producto: ProductoI[] }>(this.base_path);
  }

  createproducto(data: any): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.base_path, data);
  }

  updateproducto(id: number, data: any): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.base_path}/${id}`, data);
  }

  deleteproducto(id: number): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.base_path}/${id}`);
  }
}
