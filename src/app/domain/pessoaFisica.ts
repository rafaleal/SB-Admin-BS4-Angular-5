import { Pessoa } from './pessoa';

export class PessoaFisica implements Pessoa {
    phone: string;
    email?: string;
    fullName: string;
    cpf: string;
    address: string;
}
