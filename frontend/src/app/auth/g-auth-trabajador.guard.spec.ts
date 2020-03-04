import { TestBed, async, inject } from '@angular/core/testing';

import { GAuthTrabajadorGuard } from './g-auth-trabajador.guard';

describe('GAuthTrabajadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GAuthTrabajadorGuard]
    });
  });

  it('should ...', inject([GAuthTrabajadorGuard], (guard: GAuthTrabajadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
