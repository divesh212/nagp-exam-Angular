import { TestBed } from '@angular/core/testing';

import { InMemoryProductsService } from './in-memory-products.service';

describe('InMemoryProductsService', () => {
  let service: InMemoryProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
