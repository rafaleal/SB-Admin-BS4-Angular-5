import { Pessoa } from './pessoa';

export class PessoaFisica implements Pessoa {
    telefone: string;
    email: string;
    nomeCompleto: string;
    cpf: string;
}
