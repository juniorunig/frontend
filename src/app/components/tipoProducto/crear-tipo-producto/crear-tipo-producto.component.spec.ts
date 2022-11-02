import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoProductoComponent } from './crear-tipo-producto.component';

describe('CrearTipoProductoComponent', () => {
  let component: CrearTipoProductoComponent;
  let fixture: ComponentFixture<CrearTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
