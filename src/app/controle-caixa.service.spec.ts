import { TestBed } from '@angular/core/testing';

import { ControleCaixaService } from './controle-caixa.service';

describe('ControleCaixaService', () => {
  let service: ControleCaixaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleCaixaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
