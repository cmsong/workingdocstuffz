import { TestBed } from '@angular/core/testing';

import { GamesserviceService } from './gamesservice.service';

describe('GamesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesserviceService = TestBed.get(GamesserviceService);
    expect(service).toBeTruthy();
  });
});
