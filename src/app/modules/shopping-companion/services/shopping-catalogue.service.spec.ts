import { TestBed } from '@angular/core/testing';

import { ShoppingCatalogueService } from './shopping-catalogue.service';

describe('ShoppingCatalogueService', () => {
  let service: ShoppingCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
