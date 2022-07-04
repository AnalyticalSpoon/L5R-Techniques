import { TestBed } from '@angular/core/testing';

import { TechniquesDataService } from './techniques-data.service';

describe('TechniquesDataService', () => {
  let service: TechniquesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechniquesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
