import { Payment } from './payment';
import { PaymentTypeEnum } from './enums';
import { Point } from './point';

export class MoneyPayment extends Payment {
    coinChange: number | boolean;
    pointToPay: Point;
    type = PaymentTypeEnum.Money;
}
