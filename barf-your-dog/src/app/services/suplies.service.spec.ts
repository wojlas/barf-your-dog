import { TestBed } from '@angular/core/testing';

import { SupliesService } from './suplies.service';

describe('SupliesService', () => {
  let service: SupliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
