import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../../../domain/delivery';
import { BikerService } from '../../biker/biker.service';
import { CustomerService } from '../../customer/customer.service';
import { Observable } from 'rxjs/Observable';
import { Biker } from '../../../domain/biker';
import { Customer } from '../../../domain/customer/customer';

@Injectable()
export class AddDeliveryService {

  constructor(private http: HttpClient,
    private bikerService: BikerService,
    private customerService: CustomerService) { }

  getAllBikers(): Observable<Biker[]> {
      return this.bikerService.getAllBikers();
  }

  getAllCustomers(): Observable<Customer[]> {
      return this.customerService.getAllCustomers();
  }

  postDelivery(delivery: Delivery) {
    //   return this.customerService.
  }

}
