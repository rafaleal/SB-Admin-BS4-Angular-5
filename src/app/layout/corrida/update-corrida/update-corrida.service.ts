import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../../domain/corrida';

@Injectable()
export class UpdateCorridaService {

  constructor(private http: HttpClient) { }

  putCorrida(corrida: Corrida) {
      //
  }

}
