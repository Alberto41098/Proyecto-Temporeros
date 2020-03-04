import { TestBed, async, inject } from '@angular/core/testing';

import { GAuthEmpresaGuard } from './g-auth-empresa.guard';

describe('GAuthEmpresaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GAuthEmpresaGuard]
    });
  });

  it('should ...', inject([GAuthEmpresaGuard], (guard: GAuthEmpresaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
