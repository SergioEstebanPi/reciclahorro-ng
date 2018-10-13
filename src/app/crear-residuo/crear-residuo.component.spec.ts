import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResiduoComponent } from './crear-residuo.component';

describe('CrearResiduoComponent', () => {
  let component: CrearResiduoComponent;
  let fixture: ComponentFixture<CrearResiduoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearResiduoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearResiduoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
