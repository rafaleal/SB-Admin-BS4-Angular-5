import { PessoaFisica } from './pessoaFisica';
import { SalarioCalculavel } from './salario-calculavel';

export class Biker extends PessoaFisica {
    id: number;
    totalDistance?: number;
    totalDeliveries?: number;
    totalDue?: number;
}
