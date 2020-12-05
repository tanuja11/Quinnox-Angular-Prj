import { TestBed } from '@angular/core/testing';

import { FlightdetailService } from './flightdetail.service';

describe('FlightdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightdetailService = TestBed.get(FlightdetailService);
    expect(service).toBeTruthy();
  });
});
