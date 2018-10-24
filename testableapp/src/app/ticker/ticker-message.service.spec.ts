import { TestBed } from '@angular/core/testing';

import { TickerMessageService } from './ticker-message.service';

describe('TickerMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickerMessageService = TestBed.get(TickerMessageService);
    expect(service).toBeTruthy();
  });
});
