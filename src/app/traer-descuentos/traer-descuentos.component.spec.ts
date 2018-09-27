import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerDescuentosComponent } from './traer-descuentos.component';

describe('TraerDescuentosComponent', () => {
  let component: TraerDescuentosComponent;
  let fixture: ComponentFixture<TraerDescuentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerDescuentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
