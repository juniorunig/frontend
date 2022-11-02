import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/clientes';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css'],
})
export class MostrarClienteComponent implements OnInit {
  public clientes: ClienteI[] = [];
  public displayedColumns: string[] = [
    'id',
    'nombreCliente',
    'direccionCliente',
    'telefonoCliente',
    'correoCliente',
    'Acciones',
  ];
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.mostrarClientes();
  }

  mostrarClientes() {
    this.clienteService.getAllCliente().subscribe({
      next: (data) => {
        this.clientes = data.cliente;
        console.log(this.clientes);
      },
    });
  }
}
