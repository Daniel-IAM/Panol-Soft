import { TestBed, inject } from '@angular/core/testing';

import { MaterialesService } from './materiales.service';

describe('MaterialesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialesService]
    });
  });

  it('should be created', inject([MaterialesService], (service: MaterialesService) => {
    expect(service).toBeTruthy();
  }));
});
