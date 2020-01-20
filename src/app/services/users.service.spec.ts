import { TestBed } from '@angular/core/testing';

import { Userprofileservice } from './userprofile.service';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Userprofileservice = TestBed.get(Userprofileservice);
    expect(service).toBeTruthy();
  });
});