import { TestBed, async, inject } from '@angular/core/testing';

import { DeliveryResolverGuard } from './delivery-resolver.guard';

describe('DeliveryResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryResolverGuard]
    });
  });

  it('should ...', inject([DeliveryResolverGuard], (guard: DeliveryResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
