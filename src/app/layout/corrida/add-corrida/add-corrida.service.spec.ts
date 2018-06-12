import { TestBed, inject } from '@angular/core/testing';

import { AddCorridaService } from './add-corrida.service';

describe('AddCorridaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCorridaService]
    });
  });

  it('should be created', inject([AddCorridaService], (service: AddCorridaService) => {
    expect(service).toBeTruthy();
  }));
});
