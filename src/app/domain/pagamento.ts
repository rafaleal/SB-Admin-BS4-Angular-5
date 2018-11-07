import { StatusPagamento } from './status-pagamento';

export interface Pagamento {
    status: StatusPagamento;
    valor: number;
    dataPagamento: Date;

    pagar(): void;
}
