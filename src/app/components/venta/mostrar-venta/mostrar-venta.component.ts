import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-mostrar-venta',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css'],
})
export class MostrarVentaComponent implements OnInit {
  public ventas: VentaI[] = [];
  public displayedColumns: string[] = [
    'id',
    'fechaVenta',
    'subTotal',
    'impuesto',
    'decuento',
    'total',
  ];
  constructor(private ventaService: VentaService, private router: Router) {}

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
}
