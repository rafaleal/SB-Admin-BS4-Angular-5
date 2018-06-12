import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../../domain/corrida';

@Injectable()
export class AddCorridaService {

  constructor(private http: HttpClient) { }

  postCorrida(corrida: Corrida) {
      //
  }

}
