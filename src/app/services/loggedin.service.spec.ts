import { TestBed } from '@angular/core/testing';

import { LoggedinService } from './loggedin.service';

describe('LoggedinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggedinService = TestBed.get(LoggedinService);
    expect(service).toBeTruthy();
  });
});
