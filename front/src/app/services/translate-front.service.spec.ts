import { TestBed } from '@angular/core/testing';

import { TranslateFrontService } from './translate-front.service';

describe('TranslateFrontService', () => {
  let service: TranslateFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
