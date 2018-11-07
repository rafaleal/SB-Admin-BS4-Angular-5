import { Pagamento } from './pagamento';
import { ContaBancaria } from './conta-bancaria';
import { StatusPagamento } from './status-pagamento';

export class Transferencia implements Pagamento {
    id: number;
    status: StatusPagamento;
    valor: number;
    dataPagamento: Date;
    conta: ContaBancaria;

    pagar(): void {
        throw new Error('Method not implemented.');
    }
}
