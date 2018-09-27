import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerProductosComponent } from './traer-productos.component';

describe('TraerProductosComponent', () => {
  let component: TraerProductosComponent;
  let fixture: ComponentFixture<TraerProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
