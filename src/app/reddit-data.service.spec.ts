import { TestBed, inject } from '@angular/core/testing';

import { RedditDataService } from './my-data.service';

describe('MyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditDataService]
    });
  });

  it('should ...', inject([RedditDataService], (service: RedditDataService) => {
    expect(service).toBeTruthy();
  }));
});
