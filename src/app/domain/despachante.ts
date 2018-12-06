import { PessoaFisica } from './pessoaFisica';

export class Despachante extends PessoaFisica {
    id: number;
    valorSalario: number;

    calcularSalario() {
        throw new Error('Method not implemented.');
    }
}
