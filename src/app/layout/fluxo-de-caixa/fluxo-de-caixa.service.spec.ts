import { TestBed, inject } from '@angular/core/testing';

import { FluxoDeCaixaService } from './fluxo-de-caixa.service';

describe('FluxoDeCaixaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FluxoDeCaixaService]
    });
  });

  it('should be created', inject([FluxoDeCaixaService], (service: FluxoDeCaixaService) => {
    expect(service).toBeTruthy();
  }));
});
