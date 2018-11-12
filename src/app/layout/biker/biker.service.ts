import { Injectable } from '@angular/core';
import * as CONFIG from '../../constants';
import { Biker } from '../../domain/biker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class BikerService {

  bikersSummaryURL: string = CONFIG.BIKER_SUMMARY_API_URL;
  bikerPostURL: string = CONFIG.BIKER_POST_API_URL;

  constructor(
    private http: HttpClient) {}

  getBikersSummary(): Observable<Biker[]> {
      return this.http.get<Biker[]>(this.bikersSummaryURL);
  }

  postBiker(biker: Biker): Observable<Biker> {
      return this.http.post<Biker>(this.bikerPostURL, biker, httpOptions);
  }

}
