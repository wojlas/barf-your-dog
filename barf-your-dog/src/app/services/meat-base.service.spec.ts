import { TestBed } from '@angular/core/testing';

import { MeatBaseService } from './meat-base.service';

describe('MeatBaseService', () => {
  let service: MeatBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeatBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
