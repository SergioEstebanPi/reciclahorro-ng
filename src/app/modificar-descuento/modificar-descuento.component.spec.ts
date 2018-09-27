import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDescuentoComponent } from './modificar-descuento.component';

describe('ModificarDescuentoComponent', () => {
  let component: ModificarDescuentoComponent;
  let fixture: ComponentFixture<ModificarDescuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDescuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
