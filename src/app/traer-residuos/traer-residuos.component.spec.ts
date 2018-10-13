import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerResiduosComponent } from './traer-residuos.component';

describe('TraerResiduosComponent', () => {
  let component: TraerResiduosComponent;
  let fixture: ComponentFixture<TraerResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
