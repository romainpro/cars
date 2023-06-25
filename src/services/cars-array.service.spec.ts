import { TestBed } from '@angular/core/testing';
import { CarsArrayService } from './cars-array.service';

describe('CarsArrayService', () => {
  let service: CarsArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
