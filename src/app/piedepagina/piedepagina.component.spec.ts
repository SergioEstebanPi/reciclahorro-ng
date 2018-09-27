import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepaginaComponent } from './piedepagina.component';

describe('PiedepaginaComponent', () => {
  let component: PiedepaginaComponent;
  let fixture: ComponentFixture<PiedepaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedepaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
