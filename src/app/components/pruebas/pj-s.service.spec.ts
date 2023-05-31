import { TestBed } from '@angular/core/testing';

import { PjSService } from './pj-s.service';

describe('PjSService', () => {
  let service: PjSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PjSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
