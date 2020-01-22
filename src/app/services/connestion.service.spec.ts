import { TestBed } from '@angular/core/testing';

import { ConnestionService } from './connestion.service';

describe('ConnestionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnestionService = TestBed.get(ConnestionService);
    expect(service).toBeTruthy();
  });
});
