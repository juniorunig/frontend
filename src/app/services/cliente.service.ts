import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  api_uri_nodejs = 'http://localhost:3001';
  api_uri_django = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/clientes`;
  constructor(private http: HttpClient) {}

  getAllCliente(): Observable<{ cliente: ClienteI[] }> {
    return this.http.get<{ cliente: ClienteI[] }>(this.base_path);
  }

  getOneCliente(): Observable<{ cliente: ClienteI[] }> {
    return this.http.get<{ cliente: ClienteI[] }>(this.base_path);
  }

  createCliente(data: any): Observable<ClienteI> {
    return this.http.post<ClienteI>(this.base_path, data);
  }

  updateCliente(id: number, data: any): Observable<ClienteI> {
    return this.http.put<ClienteI>(`${this.base_path}/${id}`, data);
  }

  deleteCliente(id: number): Observable<ClienteI> {
    return this.http.delete<ClienteI>(`${this.base_path}/${id}`);
  }
}
