import { Pessoa } from './pessoa';

export class PessoaJuridica implements Pessoa {
    telefone: string;
    email: string;
    razaoSocial: string;
    cnpj: string;
}
