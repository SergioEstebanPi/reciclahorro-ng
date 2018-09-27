import { TestBed } from '@angular/core/testing';

import { DescuentosService } from './descuentos.service';

describe('DescuentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescuentosService = TestBed.get(DescuentosService);
    expect(service).toBeTruthy();
  });
});
