import { TestBed } from '@angular/core/testing';

import { GatitosService } from './gatitos.service';

describe('GatitosService', () => {
  let service: GatitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
