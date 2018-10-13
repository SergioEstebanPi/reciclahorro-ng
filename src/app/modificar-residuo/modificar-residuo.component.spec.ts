import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarResiduoComponent } from './modificar-residuo.component';

describe('ModificarResiduoComponent', () => {
  let component: ModificarResiduoComponent;
  let fixture: ComponentFixture<ModificarResiduoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarResiduoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarResiduoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
