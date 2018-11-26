import { Payment } from './payment';
import { PaymentTypeEnum } from './enums';
import { Point } from './point';

export class MoneyPayment extends Payment {
    coinChange: number;
    pointToPay: Point;

    constructor(amount: number) {
        super(amount);
        this.paymentType = 'MONEY';
    }
}
