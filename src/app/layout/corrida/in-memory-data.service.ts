import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const corridas = [
            {id: 1, data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
            itinerario: {ponto: [{endereco: 'Praca Alfredo Andersen', responsavel: 'Adilson', tempoEspera: '30min'},
            {endereco: 'Banco do Brasil - Praca Escramulhao', responsavel: 'Jadir', tempoEspera: ''}]},
            cliente: 'Mueller', biker: 'Rodrigo', preco: '35'},
            {id: 2, data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
            itinerario: {ponto: [{endereco: 'Praca Tiradentes', responsavel: 'Adilson', tempoEspera: '30min'},
            {endereco: 'Banco Itau - XV Novembro', responsavel: 'Moacir', tempoEspera: '15min'}]},
            cliente: 'Otavio', biker: 'Lincoln', preco: '16'}
        ];

        return {corridas};
    }
}
