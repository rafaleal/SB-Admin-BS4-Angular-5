import { TestBed, inject } from '@angular/core/testing';

import { UpdateCorridaService } from './update-corrida.service';

describe('UpdateCorridaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateCorridaService]
    });
  });

  it('should be created', inject([UpdateCorridaService], (service: UpdateCorridaService) => {
    expect(service).toBeTruthy();
  }));
});
