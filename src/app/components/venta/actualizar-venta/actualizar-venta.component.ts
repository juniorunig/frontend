import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css'],
})
export class ActualizarVentaComponent implements OnInit {
  public id: number = 0;
  public form: FormGroup = this.formBuilder.group({
    id: [''],
    fechaVenta: ['', [Validators.required]],
    subTotal: ['', [Validators.required]],
    impuesto: ['', [Validators.required]],
    descuento: ['', [Validators.required]],
    total: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // let idventa = this.route.snapshot.paramMap.get("id");
    this.getventa(this.id);
  }

  getventa(id: number) {
    this.ventaService.getOneventa(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
        // console.log(data.venta)
      },
    });
  }

  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    const id: number = this.form.value.id;
    this.ventaService.updateventa(id, formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Notificación',
            detail: 'venta Actualizado',
            life: 5000,
          });
        }, 0);
        this.router.navigateByUrl('ventas');
      },
      (err) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get fechaVenta() {
    return this.form.get('fechaVenta');
  }

  get subTotal() {
    return this.form.get('subTotal');
  }
  get impuesto() {
    return this.form.get('impuesto');
  }
  get descuento() {
    return this.form.get('descuento');
  }
  get total() {
    return this.form.get('total');
  }
}
