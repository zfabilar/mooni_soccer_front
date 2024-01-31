import { TestBed } from '@angular/core/testing';

import { WPService } from './wp.service';

describe('LoginService', () => {
  let service: WPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
