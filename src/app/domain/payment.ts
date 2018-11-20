import { PaymentStatusEnum, PaymentTypeEnum } from './enums';

export class Payment {
    id: number;
    amount: number;
    payedOn: Date;
    status: PaymentStatusEnum;
    type: PaymentTypeEnum;
}
