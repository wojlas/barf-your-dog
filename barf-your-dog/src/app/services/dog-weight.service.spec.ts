import { TestBed } from '@angular/core/testing';

import { DogWeightService } from './dog-weight.service';

describe('DogWeightService', () => {
  let service: DogWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
