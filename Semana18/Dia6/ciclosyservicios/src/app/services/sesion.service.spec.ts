import { TestBed } from '@angular/core/testing';

import { SesionService } from './sesion.service';

describe('SesionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesionService = TestBed.get(SesionService);
    expect(service).toBeTruthy();
  });
});
