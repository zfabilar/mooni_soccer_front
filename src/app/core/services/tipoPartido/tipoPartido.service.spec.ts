import { TestBed } from '@angular/core/testing';

import { TipoPartidoService } from './tipoPartido.service';

describe('JornadaService', () => {
  let service: TipoPartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
