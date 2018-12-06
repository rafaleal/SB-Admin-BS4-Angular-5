import { Point } from './point';
import { TaxaDistancia } from './taxa';

export class Route {
    id?: number;
    points: Point[] = [];
    totalDistance: number;
    totalDue: number = 0;
    taxaDistancia: TaxaDistancia;

    addPoint(point: Point) {
        this.points.push(point);
    }

    removePoint(index: number) {
        this.points.splice(index, 1);
    }

}
