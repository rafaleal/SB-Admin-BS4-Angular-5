import { Itinerario } from './itinerario';
import { ValorCalculavel } from './valor-calculavel';
import { Pagamento } from './pagamento';
import { HorarioRegistravel } from './horario-registravel';
import { Time } from '@angular/common';
import { StatusEntrega } from './status-entrega';

export class Corrida implements ValorCalculavel, HorarioRegistravel {
    id: number;
    data: Date;
    statusEntrega: string;
    horarioRegistro: Time;
    horarioInicio: Time;
    horarioFim: Time;
    itinerario: Itinerario;
    pagamento: string;
    valor: number = 0;
    tipo: string;
    km: number;

    calcularValorTotal(): void {
        this.valor += this.itinerario.calcularValorTotal() ;
    }
}
