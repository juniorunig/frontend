import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/clientes';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css'],
})
export class MostrarClienteComponent implements OnInit {
  public clientes: ClienteI[] = [];
  public msgs1: Message[] = [];
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarClientes();
  }

  mostrarClientes() {
    this.clienteService.getAllCliente().subscribe({
      next: (data) => {
        this.clientes = data.cliente;
        // console.log(this.clientes)
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/clientes');
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'Cliente Eliminado',
          life: 5000,
        });
        this.mostrarClientes();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/clientes');
      }
    );
  }

  imprimir(id: number) {}
}
