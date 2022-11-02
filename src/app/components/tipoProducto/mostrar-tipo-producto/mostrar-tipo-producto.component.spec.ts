import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoProductoComponent } from './mostrar-tipo-producto.component';

describe('MostrarTipoProductoComponent', () => {
  let component: MostrarTipoProductoComponent;
  let fixture: ComponentFixture<MostrarTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTipoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
