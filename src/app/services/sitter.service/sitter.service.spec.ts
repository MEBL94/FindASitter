import { TestBed, inject } from '@angular/core/testing';

import { SitterApiService } from './sitter.service';

describe('SitterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitterApiService]
    });
  });

  it('should be created', inject([SitterApiService], (service: SitterApiService) => {
    expect(service).toBeTruthy();
  }));
});
