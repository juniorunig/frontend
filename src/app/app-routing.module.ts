import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'clientes',
    component: MostrarClienteComponent,
  },
  {
    path: 'addclientes',
    component: CrearClienteComponent,
  },
  {
    path: 'clientes/edit/:id',
    component: ActualizarClienteComponent,
  },
  {
    path: 'tipoproductos',
    component: MostrarTipoProductoComponent,
  },

  {
    path: 'productos',
    component: MostrarProductoComponent,
  },

  {
    path: 'ventas',
    component: MostrarVentaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
