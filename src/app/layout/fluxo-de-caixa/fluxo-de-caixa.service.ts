import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CONFIG from '../../constants';
import { CustomerCashFlow } from '../../domain/cash-flow/customer-cash-flow';
import { Observable } from 'rxjs/Observable';
import { Biker } from '../../domain/biker';
import { map } from 'rxjs/operators';

@Injectable()
export class FluxoDeCaixaService {

    bikersCashFlowURL: string = CONFIG.BIKER_SUMMARY_API_URL;
    customerCashFlowURL: string = CONFIG.CASH_FLOW_CUSTOMERS_API_URL;

    constructor(private http: HttpClient) { }

    getCustomersCashFlow(): Observable<CustomerCashFlow[]> {
        return this.http.get<CustomerCashFlow[]>(this.customerCashFlowURL);
    }

    getBikersCashFlow(): Observable<Biker[]> {
        return this.http.get<Biker[]>(this.bikersCashFlowURL);
    }

}
