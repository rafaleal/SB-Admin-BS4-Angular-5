import { Injectable } from '@angular/core';
import * as CONFIG from '../../constants';
import { Biker } from '../../domain/biker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class BikerService {

  bikersSummaryURL: string = CONFIG.BIKER_SUMMARY_API_URL;
  bikerPostURL: string = CONFIG.BIKER_POST_API_URL;
  bikerGetAllURL: string = CONFIG.BIKER_GET_ALL_API_URL;
  bikerDefaultURL: string = CONFIG.BIKER_DEFAULT_API_URL;

  regex: string = '{id}';

  constructor(
    private http: HttpClient) {}

  getAllBikers(): Observable<Biker[]> {
    return this.http.get<Biker[]>(this.bikerGetAllURL);
  }

  getBikersSummary(): Observable<Biker[]> {
      return this.http.get<Biker[]>(this.bikersSummaryURL);
  }

  postBiker(biker: Biker): Observable<Biker> {
      return this.http.post<Biker>(this.bikerPostURL, biker, httpOptions);
  }

  deleteBiker(biker: Biker) {
    return this.http.delete(this.bikerDefaultURL.replace(this.regex, biker.id.toString()), httpOptions);
  }

  editBiker(biker: Biker) {
    return this.http.put(this.bikerDefaultURL.replace(this.regex, biker.id.toString()), biker, httpOptions);
  }

}
