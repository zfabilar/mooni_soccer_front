import { TestBed } from '@angular/core/testing';

import { ArbitrosService } from './arbitros.service';

describe('ConfigService', () => {
  let service: ArbitrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbitrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
