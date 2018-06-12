import { TipoPessoaEnum } from './enums';

export interface ContaBancaria {
    agencia: string;
    contaCorrente: string;
    nomeResponsavel: string;
    tipoConta: TipoPessoaEnum;
    cp: string; // CPF ou CNPJ
}
