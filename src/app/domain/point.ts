import { Address } from './address';
import { Responsavel } from './responsavel';
import { TaxaEspera } from './taxa';
import { SumAmount } from './sum-amount';

export class Point implements SumAmount {
    id: number;
    amount: number = 0;
    waitingTime: number;
    arrivalTime: string;
    address: Address;
    responsible?: Responsavel;
    waitingTax: TaxaEspera;

    sumTotalAmount(): number {
        if (this.waitingTime) {
            this.amount = this.waitingTime * this.waitingTax.valorTaxa;
        }
        return this.amount;
    }
}
