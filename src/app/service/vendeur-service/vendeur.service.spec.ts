import { TestBed } from '@angular/core/testing';

import { VendeurService } from './vendeur.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendeurService = TestBed.get(VendeurService);
    expect(service).toBeTruthy();
  });
});
