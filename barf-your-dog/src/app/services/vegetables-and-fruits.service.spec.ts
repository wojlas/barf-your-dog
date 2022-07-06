import { TestBed } from '@angular/core/testing';

import { VegetablesAndFruitsService } from './vegetables-and-fruits.service';

describe('VegetablesAndFruitsService', () => {
  let service: VegetablesAndFruitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetablesAndFruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
