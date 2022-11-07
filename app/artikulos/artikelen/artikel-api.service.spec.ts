import { TestBed } from '@angular/core/testing';

import { ArtikelApiService } from './artikel-api.service';

describe('ArtikelApiService', () => {
  let service: ArtikelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
