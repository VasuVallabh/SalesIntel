import { TestBed } from '@angular/core/testing';

import { IcpService } from './icp.service';

describe('IcpService', () => {
  let service: IcpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
