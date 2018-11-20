import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Delivery } from '../../../domain/delivery';

@Injectable()
export class UpdateDeliveryService {

  constructor(private http: HttpClient) { }

  putDelivery(delivery: Delivery) {
      //
  }

}
