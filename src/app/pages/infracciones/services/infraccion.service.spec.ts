import { TestBed } from '@angular/core/testing';

import { InfraccionService } from './infraccion.service';

describe('InfraccionService', () => {
  let service: InfraccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfraccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
