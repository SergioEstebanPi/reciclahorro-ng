import { TestBed } from '@angular/core/testing';

import { ResiduosService } from './residuos.service';

describe('ResiduosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResiduosService = TestBed.get(ResiduosService);
    expect(service).toBeTruthy();
  });
});
