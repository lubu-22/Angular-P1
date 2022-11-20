import { TestBed } from '@angular/core/testing';

import { ApiSrviceService } from './api-srvice.service';

describe('ApiSrviceService', () => {
  let service: ApiSrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
