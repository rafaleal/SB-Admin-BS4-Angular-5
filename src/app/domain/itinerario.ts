import { Ponto } from './ponto';
import { ValorCalculavel } from './valor-calculavel';
import { TaxaDistancia } from './taxa';

export class Itinerario implements ValorCalculavel {
    id: number;
    ponto = {} as Ponto[];
    totalKm: number;
    valorTotal: number = 0;
    valorDistancia: number = 0;
    taxaDistancia: TaxaDistancia;
    valorEsperaTotal: number = 0;

    calcularValorTotal(): number {
        this.valorTotal += this.valorDistancia + this.valorEsperaTotal;
        return this.valorTotal;
    }

    calcularValorDistancia(): void {
        this.valorDistancia += this.totalKm * this.taxaDistancia.valorTaxa;
    }

    somarValoresTempoEspera(): void {
        this.ponto.forEach(ponto => {
            this.valorEsperaTotal += ponto.calcularValorTotal();
        });
    }

    adicionarPonto(ponto: Ponto) {
        this.ponto.push(ponto);
    }
}
