export class Payment {
    id: number;
    amount: number;
    payedOn: Date;
    status: string;
    paymentType: string;

    constructor(amount: number) {
        this.amount = amount;
        this.status = 'PENDING';
    }
}
