import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tipoProductoI } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css'],
})
export class CrearTipoProductoComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: tipoProductoI = this.form.value;
    console.log(formValue);
    this.tipoProductoService.createtipoProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'tipoProducto Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('tipoProductos');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/tipoProductos');
  }

  get nombretipoProducto() {
    return this.form.get('nombre');
  }
}
