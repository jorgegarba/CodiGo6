import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.service';

describe('CarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarritoService = TestBed.get(CarritoService);
    expect(service).toBeTruthy();
  });
});
