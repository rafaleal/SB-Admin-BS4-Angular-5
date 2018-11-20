import { TestBed, inject } from '@angular/core/testing';

import { LegalCustomerService } from './legal-customer.service';

describe('LegalCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegalCustomerService]
    });
  });

  it('should be created', inject([LegalCustomerService], (service: LegalCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
