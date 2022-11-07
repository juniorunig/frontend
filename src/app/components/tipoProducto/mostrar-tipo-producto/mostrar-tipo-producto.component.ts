import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tipoProductoI } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-tipo-producto',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css'],
})
export class MostrarTipoProductoComponent implements OnInit {
  public tipoProductos: tipoProductoI[] = [];

  constructor(
    private tipoproductoService: TipoProductoService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarTipoProducto();
  }

  mostrarTipoProducto() {
    // let tipo: any;
    this.tipoproductoService.getAlltipoProducto().subscribe((data) => {
      this.tipoProductos = data.tipoProductos;
      // console.log(this.clientes)
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/tipoProductos');
    this.tipoproductoService.deletetipoProducto(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'tipoProducto Eliminado',
          life: 5000,
        });
        this.mostrarTipoProducto();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/tipoProductos');
      }
    );
  }

  imprimir(id: number) {}
}
