import { TestBed, inject } from '@angular/core/testing';

import { BikerService } from './biker.service';

describe('BikerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikerService]
    });
  });

  it('should be created', inject([BikerService], (service: BikerService) => {
    expect(service).toBeTruthy();
  }));
});
