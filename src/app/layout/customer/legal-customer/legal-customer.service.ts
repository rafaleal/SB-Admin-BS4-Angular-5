import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LegalCustomer } from '../../../domain/customer/legal-customer';
import { Observable } from 'rxjs/Observable';
import * as CONFIG from '../../../constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class LegalCustomerService {

  legalCustomerPostURL: string = CONFIG.LEGAL_CUSTOMER_POST_API_URL;
  legalCustomerGetAllURL: string = CONFIG.LEGAL_CUSTOMER_GET_ALL_API_URL;
  legalCustomerDefaultURL: string = CONFIG.LEGAL_CUSTOMER_DEFAULT_API_URL;

  regex: string = '{id}';

  constructor(private http: HttpClient) { }

  postLegalCustomer(legalCustomer: LegalCustomer): Observable<LegalCustomer> {
    return this.http.post<LegalCustomer>(this.legalCustomerPostURL, legalCustomer, httpOptions);
  }

  getAllLegalCustomers(): Observable<LegalCustomer[]> {
    return this.http.get<LegalCustomer[]>(this.legalCustomerGetAllURL);
  }

  deleteLegalCustomer(legalCustomer: LegalCustomer) {
    return this.http.delete(this.legalCustomerDefaultURL.replace(this.regex, legalCustomer.id.toString()), httpOptions);
  }

  editLegalCustomer(legalCustomer: LegalCustomer) {
    return this.http.put(this.legalCustomerDefaultURL.replace(this.regex, legalCustomer.id.toString()), legalCustomer, httpOptions);
  }

}
