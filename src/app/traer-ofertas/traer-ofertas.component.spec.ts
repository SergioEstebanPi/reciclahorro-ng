import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerOfertasComponent } from './traer-ofertas.component';

describe('TraerOfertasComponent', () => {
  let component: TraerOfertasComponent;
  let fixture: ComponentFixture<TraerOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
