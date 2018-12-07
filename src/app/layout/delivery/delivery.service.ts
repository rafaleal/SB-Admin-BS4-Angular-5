import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Delivery } from '../../domain/delivery';
import { Observable } from 'rxjs/Observable';
import * as CONFIG from '../../constants';
import { BikerService } from '../biker/biker.service';
import { CustomerService } from '../customer/customer.service';
import { Biker } from '../../domain/biker';
import { Customer } from '../../domain/customer/customer';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class DeliveryService {

    deliveryDefaultURL: string = CONFIG.DELIVERY_DEFAULT_API_URL;
    deliveryGetAllURL: string = CONFIG.DELIVERY_GET_ALL_API_URL;
    deliveryPostURL: string = CONFIG.DELIVERY_POST_API_URL;

    regex: string = '{id}';

    constructor(
        private http: HttpClient,
        private bikerService: BikerService,
        private customerService: CustomerService) { }

    getDeliveryById(id: number): Observable<Delivery> {
        return this.http.get<Delivery>(this.deliveryDefaultURL.replace(this.regex, id.toString()), httpOptions);
    }

    getAllDeliveries(): Observable<Delivery[]> {
        return this.http.get<Delivery[]>(this.deliveryGetAllURL);
    }

    getAllBikers(): Observable<Biker[]> {
        return this.bikerService.getAllBikers();
    }

    getAllCustomers(): Observable<Customer[]> {
        return this.customerService.getAllCustomers();
    }

    postDelivery(delivery: Delivery) {
        return this.http.post<Delivery>(this.deliveryPostURL, delivery, httpOptions);
    }

    putDelivery(delivery: Delivery) {
        return this.http.put<Delivery>(this.deliveryDefaultURL.replace(this.regex, delivery.id.toString()), delivery, httpOptions);
    }

    deleteDelivery(id: number) {
        return this.http.delete(this.deliveryDefaultURL.replace(this.regex, id.toString()), httpOptions);
    }

}
