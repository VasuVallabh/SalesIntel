import { TestBed } from '@angular/core/testing';

import { BounceIntelService } from './bounce-intel.service';

describe('BounceIntelService', () => {
  let service: BounceIntelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BounceIntelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
