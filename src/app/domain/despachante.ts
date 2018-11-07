import { PessoaFisica } from './pessoaFisica';
import { SalarioCalculavel } from './salario-calculavel';

export class Despachante extends PessoaFisica implements SalarioCalculavel {
    id: number;
    valorSalario: number;

    calcularSalario() {
        throw new Error('Method not implemented.');
    }
}
