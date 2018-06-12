import { PessoaFisica } from './pessoaFisica';
import { SalarioCalculavel } from './salario-calculavel';

export class Biker extends PessoaFisica implements SalarioCalculavel {
    id: number;
    totalKm: number;
    numeroCorridas: number;
    endereco: string;

    calcularSalario() {
        throw new Error('Method not implemented.');
    }
}
