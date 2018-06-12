import { Endereco } from './endereco';
import { Responsavel } from './responsavel';
import { ValorCalculavel } from './valor-calculavel';
import { TaxaEspera } from './taxa';

export class Ponto implements ValorCalculavel {
    id: number;
    valor: number = 0;
    tempoEspera: number;
    horaChegada: string;
    endereco: Endereco;
    responsavel: Responsavel;
    taxaEspera: TaxaEspera;

    calcularValorTotal(): number {
        if (this.tempoEspera) {
            this.valor = this.tempoEspera * this.taxaEspera.valorTaxa;
        }
        return this.valor;
    }
}
