import { StatusPagamento } from './status-pagamento';

export interface Pagamento {
    status: StatusPagamento;
    valor: number;
    data: Date;

    pagar(): void;
}
