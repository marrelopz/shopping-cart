import { TestBed } from '@angular/core/testing';

import { InitialCartService } from './initial-cart.service';

describe('InitialCartService', () => {
  let service: InitialCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
