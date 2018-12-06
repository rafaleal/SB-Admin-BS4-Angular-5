import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Customer } from '../../domain/customer/customer';
import { Observable } from 'rxjs/Observable';
import * as CONFIG from '../../constants';

@Injectable()
export class CustomerService {

    customerGetAllURL: string = CONFIG.CUSTOMER_GET_ALL_API_URL;

    constructor(private http: HttpClient) {
      // empty
    }

    getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerGetAllURL);
    }

}
