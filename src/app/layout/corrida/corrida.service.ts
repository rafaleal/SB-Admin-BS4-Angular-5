import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Corrida } from '../../domain/corrida';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CorridaService {

  private corridasUrl = 'api/corridas';

  constructor(private http: HttpClient) { }

  getSingleCorrida(id: number): any {
      //
      return {};
  }

  getAllCorridas(): Observable<any[]> {
      return this.http.get<any[]>(this.corridasUrl);
  }

}
