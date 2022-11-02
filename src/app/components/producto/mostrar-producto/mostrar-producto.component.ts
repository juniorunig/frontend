import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoI } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css'],
})
export class MostrarProductoComponent implements OnInit {
  public productos: ProductoI[] = [];
  public displayedColumns: string[] = [
    'id',
    'nombre',
    'marca',
    'precio',
    'stockMin',
    'cantidad',
  ];
  constructor(
    private productoservice: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos() {
    this.productoservice.getAllproducto().subscribe({
      next: (data) => {
        this.productos = data.producto;
        console.log(this.productos);
      },
    });
  }
}
