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
    statusDelivery: string;
    registeredTime: string;
    collectUpTime: string;
    handoverTime: string;
    route: Route;
    payment: Payment | MoneyPayment;
    customer: Customer;
    biker: Biker;

    constructor() {
        this.statusDelivery = 'REGISTERED';
        this.route = new Route();
        this.customer = {} as Customer;
        this.biker = new Biker();
    }

    isReadyToBeAdded(): boolean {
        return _.isEmpty(this.customer)
            || _.isEmpty(this.biker)
            || _.isEmpty(this.payment)
            || this.route.points.length < 2;
    }

}
