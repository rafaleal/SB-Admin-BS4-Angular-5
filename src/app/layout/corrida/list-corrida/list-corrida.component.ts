import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CorridaService } from '../corrida.service';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-list-corrida',
  templateUrl: './list-corrida.component.html',
  styleUrls: ['./list-corrida.component.scss'],
  animations: [routerTransition()]
})
export class ListCorridaComponent implements OnInit {

    corrida: any[];
    rowGroupMetadata: any;
    sales: any[];
    pagamento: any[];
    formaSelecionada: any;
    statusEntrega: any[];
    selectedStatusEntrega: any;

    constructor(private router: Router,
                private service: CorridaService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.corrida = [
          {id: 1, data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
          itinerario: {ponto: [{endereco: 'Praca Alfredo Andersen', responsavel: 'Adilson', tempoEspera: '30min'},
          {endereco: 'Banco do Brasil - Praca Escramulhao', responsavel: 'Jadir', tempoEspera: ''}]},
          cliente: 'Mueller', biker: 'Rodrigo', preco: '35'},
          // {id: 2, data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
          // itinerario: {ponto: [{endereco: 'Praca Alfredo Andersen', responsavel: 'Adilson', tempoEspera: '30min'},
          // {endereco: 'Banco do Brasil - Praca Escramulhao', responsavel: 'Jadir', tempoEspera: ''}]},
          // cliente: 'Mueller', biker: 'Rodrigo', preco: '35'}
        ];

        this.pagamento = [
            {name: 'Dinheiro', id: 1},
            {name: 'Transferência', id: 2},
            {name: 'Faturado', id: 3}
        ];

        this.statusEntrega = [
            {name: 'Registrado', id: 1},
            {name: 'Iniciado', id: 2},
            {name: 'Concluido', id: 3}
        ];
    }

      onClickAdd(): void {
          //
      }

      onClickEdit(): Promise<boolean> {
          return this.router.navigate(['update-corrida'], { relativeTo: this.route });
      }

      onClickDelete(): void {
          //
      }

}
