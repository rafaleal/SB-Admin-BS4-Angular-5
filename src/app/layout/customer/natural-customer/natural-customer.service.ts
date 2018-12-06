import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NaturalCustomer } from '../../../domain/customer/natural-customer';
import { Observable } from 'rxjs/Observable';
import * as CONFIG from '../../../constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class NaturalCustomerService {

  naturalCustomerPostURL: string = CONFIG.NATURAL_CUSTOMER_POST_API_URL;
  naturalCustomerGetAllURL: string = CONFIG.NATURAL_CUSTOMER_GET_ALL_API_URL;
  naturalCustomerDefaultURL: string = CONFIG.NATURAL_CUSTOMER_DEFAULT_API_URL;

  regex: string = '{id}';

  constructor(private http: HttpClient) { }

  postNaturalCustomer(naturalCustomer: NaturalCustomer): Observable<NaturalCustomer> {
    return this.http.post<NaturalCustomer>(this.naturalCustomerPostURL, naturalCustomer, httpOptions);
  }

  getAllNaturalCustomers(): Observable<NaturalCustomer[]> {
    return this.http.get<NaturalCustomer[]>(this.naturalCustomerGetAllURL);
  }

  deleteNaturalCustomer(naturalCustomer: NaturalCustomer) {
    return this.http.delete(this.naturalCustomerDefaultURL.replace(this.regex, naturalCustomer.id.toString()), httpOptions);
  }

  editNaturalCustomer(naturalCustomer: NaturalCustomer) {
    return this.http.put(this.naturalCustomerDefaultURL.replace(this.regex, naturalCustomer.id.toString()), naturalCustomer, httpOptions);
  }

}
