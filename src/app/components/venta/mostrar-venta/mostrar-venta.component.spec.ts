import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVentaComponent } from './mostrar-venta.component';

describe('MostrarVentaComponent', () => {
  let component: MostrarVentaComponent;
  let fixture: ComponentFixture<MostrarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
