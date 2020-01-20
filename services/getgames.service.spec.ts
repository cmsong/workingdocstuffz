import { TestBed } from '@angular/core/testing';

import { GetgamesService } from './getgames.service';

describe('GetgamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetgamesService = TestBed.get(GetgamesService);
    expect(service).toBeTruthy();
  });
});
