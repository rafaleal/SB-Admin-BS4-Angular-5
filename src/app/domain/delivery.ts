import { Route } from './route';
import { SumAmount } from './sum-amount';
import { Payment } from './payment';
import { HorarioRegistravel } from './horario-registravel';
import { Time } from '@angular/common';
import { DeliveryStatusEnum } from './enums';
import { Customer } from './customer/customer';
import { Biker } from './biker';
import * as _ from 'lodash';
import { MoneyPayment } from './money-payment';

export class Delivery implements HorarioRegistravel {
    id: number;
    createdAt: Date;
    statusDelivery: DeliveryStatusEnum;
    registeredTime: Time;
    collectUpTime: Time;
    handoverTime: Time;
    route: Route;
    payment: Payment | MoneyPayment;
    customer: Customer;
    biker: Biker;

    constructor() {
        this.statusDelivery = DeliveryStatusEnum.Registered;
        this.route = new Route();
        this.customer = {} as Customer;
        this.biker = new Biker();
    }

}
