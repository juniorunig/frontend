import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';
import { tipoProductoI } from '../models/tipoProducto';

@Injectable({
  providedIn: 'root',
})
export class TipoProductoService {
  api_uri_nodejs = 'http://localhost:3008';
  api_uri_django = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/tipoProductos/`;
  // base_path = 'localhost:3001/tipoProductos/';
  constructor(private http: HttpClient) {}

  getAlltipoProducto(): Observable<{ tipoProducto: tipoProductoI[] }> {
    return this.http.get<{ tipoProducto: tipoProductoI[] }>(this.base_path);
  }
  getAlltipoProducto2() {
    return this.http.get<any>(this.base_path).subscribe((data) => {
      return <ProductoI[]>data;
    });
  }

  getOnetipoProducto(
    id: number
  ): Observable<{ tipoProducto: tipoProductoI[] }> {
    return this.http.get<{ tipoProducto: tipoProductoI[] }>(
      `${this.base_path}${id}`
    );
  }

  createtipoProducto(data: any): Observable<tipoProductoI> {
    return this.http.post<tipoProductoI>(this.base_path, data);
  }

  updatetipoProducto(id: number, data: any): Observable<tipoProductoI> {
    return this.http.put<tipoProductoI>(`${this.base_path}${id}`, data);
  }

  deletetipoProducto(id: number): Observable<tipoProductoI> {
    return this.http.delete<tipoProductoI>(`${this.base_path}${id}`);
  }
}
