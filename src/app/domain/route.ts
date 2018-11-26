import { Point } from './point';
import { TaxaDistancia } from './taxa';
import { SumAmount } from './sum-amount';

export class Route implements SumAmount {
    id?: number;
    points: Point[] = [];
    totalDistance: number;
    totalDue: number = 0;
    valorDistancia: number = 0;
    taxaDistancia: TaxaDistancia;
    valorEsperaTotal: number = 0;

    sumTotalAmount(): number {
        this.totalDue += this.valorDistancia + this.valorEsperaTotal;
        return this.totalDue;
    }

    calcularValorDistancia(): void {
        this.valorDistancia += this.totalDistance * this.taxaDistancia.valorTaxa;
    }

    somarValoresTempoEspera(waitingTax: number): void {
        this.points.forEach(points => {
            this.valorEsperaTotal += points.waitingTime * waitingTax ;
        });
    }

    addPoint(points: Point) {
        this.points.push(points);
    }
}
