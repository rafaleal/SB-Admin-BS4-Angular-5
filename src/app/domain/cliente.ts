import { Pessoa } from './pessoa';
import { Pagamento } from './pagamento';
import { Responsavel } from './responsavel';
import { TipoCliente } from './tipo-cliente';

export class Cliente extends Pessoa {
    id?: number;
    tipoCliente: string;
    pessoa: Pessoa;
    pagamento: Pagamento;
    responsavel: Responsavel[];

    constructor(pessoa?: Pessoa) {
        super();
        this.pessoa = pessoa;
    }
}
