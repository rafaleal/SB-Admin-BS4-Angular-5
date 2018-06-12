import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../domain/corrida';

@Injectable()
export class CorridaService {

  constructor(private http: HttpClient) { }

  getSingleCorrida(id: number): Corrida {
      //
      return {} as Corrida;
  }

  getAllCorridas(): Corrida {
      //
      return {} as Corrida;
  }

}
