import { TestBed, inject } from '@angular/core/testing';

import { UpdateDeliveryService } from './update-delivery.service';

describe('UpdateDeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDeliveryService]
    });
  });

  it('should be created', inject([UpdateDeliveryService], (service: UpdateDeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
