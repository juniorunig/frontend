import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tipoProductoI } from 'src/app/models/tipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-actualizar-tipo-producto',
  templateUrl: './actualizar-tipo-producto.component.html',
  styleUrls: ['./actualizar-tipo-producto.component.css'],
})
export class ActualizarTipoProductoComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    // createdAt: [''],
    // updateAt: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoservice: TipoProductoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // let idtipoProducto = this.route.snapshot.paramMap.get("id");
    this.gettipoProducto(this.id);
  }

  gettipoProducto(id: number) {
    this.tipoProductoservice.getOnetipoProducto(id).subscribe((data) => {
      this.form.setValue(data.tipoproducto);
      // console.log(data.tipoProducto)
    });
  }

  onSubmit(): void {
    const formValue: tipoProductoI = this.form.value;
    const id: number = this.form.value.id;
    this.tipoProductoservice.updatetipoProducto(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'tipoProducto Actualizado',
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
    return this.form.get('nombretipoProducto');
  }
}
