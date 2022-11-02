import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tipoProductoI } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-mostrar-tipo-producto',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css'],
})
export class MostrarTipoProductoComponent implements OnInit {
  public tipoProductos: tipoProductoI[] = [];
  public displayedColumns: string[] = ['id', 'nombre'];
  constructor(
    private tipoproductoService: TipoProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarTipoProducto();
  }

  mostrarTipoProducto() {
    this.tipoproductoService.getAlltipoProducto().subscribe({
      next: (data) => {
        this.tipoProductos = data.tipoProducto;
        console.log(this.tipoProductos);
      },
    });
  }
}
