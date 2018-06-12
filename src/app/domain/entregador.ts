import { PessoaFisica } from './pessoaFisica';
import { SalarioCalculavel } from './salario-calculavel';
import { Endereco } from './endereco';

export class Entregador extends PessoaFisica implements SalarioCalculavel {
    id: number;
    totalKm: number;
    numeroCorridas: number;
    endereco: Endereco;

    calcularSalario() {
        throw new Error('Method not implemented.');
    }
}
