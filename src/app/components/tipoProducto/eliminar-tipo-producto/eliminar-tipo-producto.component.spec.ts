import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoProductoComponent } from './eliminar-tipo-producto.component';

describe('EliminarTipoProductoComponent', () => {
  let component: EliminarTipoProductoComponent;
  let fixture: ComponentFixture<EliminarTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
