import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/clientes';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    nombreCliente: ['', [Validators.required]],
    direccionCliente: ['', [Validators.required]],
    telefonoCliente: ['', [Validators.required]],
    correoCliente: ['', [Validators.required]],
    passwordCliente: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'Cliente Creado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('clientes');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/clientes');
  }

  get nombreCliente() {
    return this.form.get('nombreCliente');
  }

  get direccionCliente() {
    return this.form.get('direccionCliente');
  }
  get telefonoCliente() {
    return this.form.get('telefonoCliente');
  }
  get correoCliente() {
    return this.form.get('correoCliente');
  }
  get passwordCliente() {
    return this.form.get('passwordCliente');
  }
}
