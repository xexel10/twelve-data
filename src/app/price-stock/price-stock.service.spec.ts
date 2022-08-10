import { TestBed } from '@angular/core/testing';

import { PriceStockService } from './price-stock.service';

describe('PriceStockService', () => {
  let service: PriceStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
