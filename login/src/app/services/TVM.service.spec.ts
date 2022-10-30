/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TVMService } from './TVM.service';

describe('Service: TVM', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TVMService]
    });
  });

  it('should ...', inject([TVMService], (service: TVMService) => {
    expect(service).toBeTruthy();
  }));
});
