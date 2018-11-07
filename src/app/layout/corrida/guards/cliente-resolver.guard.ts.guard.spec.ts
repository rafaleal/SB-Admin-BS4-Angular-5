import { TestBed, async, inject } from '@angular/core/testing';

import { ClienteResolver } from './cliente-resolver.guard';

describe('ClienteResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteResolver]
    });
  });

  it('should ...', inject([ClienteResolver], (guard: ClienteResolver) => {
    expect(guard).toBeTruthy();
  }));
});
