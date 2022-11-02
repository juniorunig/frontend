import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VentaI } from '../models/venta';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  api_uri_nodejs = 'http://localhost:3001';
  api_uri_django = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/ventas/`;
  constructor(private http: HttpClient) {}

  getAllventa(): Observable<{ venta: VentaI[] }> {
    return this.http.get<{ venta: VentaI[] }>(this.base_path);
  }

  getOneventa(): Observable<{ venta: VentaI[] }> {
    return this.http.get<{ venta: VentaI[] }>(this.base_path);
  }

  createventa(data: any): Observable<VentaI> {
    return this.http.post<VentaI>(this.base_path, data);
  }

  updateventa(id: number, data: any): Observable<VentaI> {
    return this.http.put<VentaI>(`${this.base_path}/${id}`, data);
  }

  deleteventa(id: number): Observable<VentaI> {
    return this.http.delete<VentaI>(`${this.base_path}/${id}`);
  }
}
