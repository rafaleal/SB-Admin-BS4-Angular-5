import { TestBed, inject } from '@angular/core/testing';

import { AddDeliveryService } from './add-delivery.service';

describe('AddDeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDeliveryService]
    });
  });

  it('should be created', inject([AddDeliveryService], (service: AddDeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
