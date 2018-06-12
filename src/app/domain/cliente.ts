import { Pessoa } from './pessoa';
import { Pagamento } from './pagamento';
import { Responsavel } from './responsavel';
import { TipoCliente } from './tipo-cliente';

export class Cliente implements Pessoa {
    id?: number;
    telefone: string;
    email: string;
    tipoCliente: TipoCliente;
    tipoPessoa: Pessoa;
    pagamento: Pagamento;
    responsavel: Responsavel[];

    constructor(tipoPessoa?: Pessoa) {
        this.tipoPessoa = tipoPessoa;
    }
}
