import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductoI } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css'],
})
export class ActualizarProductoComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    nombre: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stockMin: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idproducto = this.route.snapshot.paramMap.get("id");
    this.getproducto(this.id);
  }

  getproducto(id: number) {
    this.productoService
      .getOneproducto(id)
      .subscribe((data) => this.form.setValue(data));
  }

  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    const id: number = this.form.value.id;
    this.productoService.updateproducto(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'producto Actualizado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('productos');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/productos');
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get marca() {
    return this.form.get('marca');
  }
  get precio() {
    return this.form.get('precio');
  }
  get stockMin() {
    return this.form.get('stockMin');
  }
  get cantidad() {
    return this.form.get('cantidad');
  }
}
