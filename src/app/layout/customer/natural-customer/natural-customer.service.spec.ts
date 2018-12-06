import { TestBed, inject } from '@angular/core/testing';

import { NaturalCustomerService } from './natural-customer.service';

describe('NaturalCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaturalCustomerService]
    });
  });

  it('should be created', inject([NaturalCustomerService], (service: NaturalCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
