import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-venta',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css'],
})
export class MostrarVentaComponent implements OnInit {
  public ventas: VentaI[] = [];

  constructor(
    private ventaService: VentaService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.mostrarVentas();
  }

  mostrarVentas() {
    this.ventaService.getAllventa().subscribe({
      next: (data) => {
        this.ventas = data.venta;
        console.log(this.ventas);
      },
    });
  }

  eliminar(id: number): void {
    this.router.navigateByUrl('/ventas');
    this.ventaService.deleteventa(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Notificación',
          detail: 'Venta Eliminado',
          life: 5000,
        });
        this.mostrarVentas();
      },
      (err) => {
        console.log('error');
        this.router.navigateByUrl('/ventas');
      }
    );
  }

  imprimir(id: number) {}
}
