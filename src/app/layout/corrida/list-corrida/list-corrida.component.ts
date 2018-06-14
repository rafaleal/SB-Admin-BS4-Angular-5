import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CorridaService } from '../corrida.service';
import { routerTransition } from '../../../router.animations';
import * as _ from 'lodash';
import { Itinerario } from '../../../domain/itinerario';
import { StatusEntregaEnum } from '../../../domain/enums';

@Component({
  selector: 'app-list-corrida',
  templateUrl: './list-corrida.component.html',
  styleUrls: ['./list-corrida.component.scss'],
  animations: [routerTransition()]
})
export class ListCorridaComponent implements OnInit {

    corrida: any[];
    corrida2: any[];
    rowGroupMetadata: any;
    sales: any[];
    pagamento: any[];
    formaSelecionada: any;
    statusEntrega: any[];
    selectedStatusEntrega: any;
    valorTotal: number;
    distanciaTotal: number;
    selectedCorrida: any;

    constructor(private router: Router,
                private service: CorridaService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.corrida = [
            {id: 1, status: 'REGISTRADO', data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
            itinerario: {ponto: [{endereco: 'Praca Alfredo Andersen', responsavel: 'Adilson', tempoEspera: '30min'},
            {endereco: 'Banco do Brasil - Praca Toaldo', responsavel: 'Jadir', tempoEspera: ''}]}, km: '15',
            cliente: 'Mueller', biker: 'Rodrigo', preco: '35', formaPagamento: {nome: 'Dinheiro', troco: '50'}, tipo: 'Esporadico'},
            {id: 2, status: 'INICIADO', data: '07/06/2018', horarios: {horaEntrada: '9:00', horaColeta: '9:15', horaEntrega: ''},
            itinerario: {ponto: [{endereco: 'Praca Tiradentes', responsavel: 'Adilson', tempoEspera: '30min'},
            {endereco: 'Banco Itau - XV Novembro', responsavel: 'Moacir', tempoEspera: '15min'}]}, km: '6',
            cliente: 'Otavio', biker: 'Lincoln', preco: '16', formaPagamento: {nome: 'Transferencia'}, tipo: 'Faturado'}
        ];
        // this.getCorridas();
        this.getTotalPrice();
        this.getTotalDistance();
        this.corrida2 = [];
        this.explodeCorridas();

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
        this.updateRowGroupMetaData();
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

      onSort() {
        this.updateRowGroupMetaData();
      }

      getTotalPrice(): void {
        this.valorTotal = 0;
        if (this.corrida) {
            this.corrida.forEach(c => this.valorTotal += parseFloat(c.preco));
        }
      }

      getTotalDistance(): void {
          this.distanciaTotal = 0;
          if (this.corrida) {
            this.corrida.forEach(c => this.distanciaTotal += parseFloat(c.km));
        }
      }

      updateRowGroupMetaData() {
        this.rowGroupMetadata = {};
        if (this.corrida2) {
            for (let i = 0; i < this.corrida2.length; i++) {
                const rowData = this.corrida2[i];
                const id = rowData.id;
                if (i == 0) {
                    this.rowGroupMetadata[id] = { index: 0, size: 1 };
                } else {
                    const previousRowData = this.corrida2[i - 1];
                    const previousRowGroup = previousRowData.id;
                    if (id === previousRowGroup) {
                        this.rowGroupMetadata[id].size++;
                    } else {
                        this.rowGroupMetadata[id] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    getCorridas(): void {
        this.service.getAllCorridas()
        .subscribe(corridas => this.corrida = corridas);
    }

    explodeCorridas(): void {
        this.corrida.forEach(cor => {
            cor.itinerario.ponto.forEach(p => {
                this.corrida2.push({
                    id: cor.id,
                    status: cor.status,
                    data: cor.data,
                    horarios: cor.horarios,
                    itinerario: {
                        endereco: p.endereco,
                        responsavel: p.responsavel,
                        tempoEspera: p.tempoEspera,
                    },
                    km: cor.km,
                    cliente: cor.cliente,
                    biker: cor.biker,
                    preco: cor.preco,
                    formaPagamento: cor.formaPagamento,
                    tipo: cor.tipo,
                });
            });
        });
    }

    checkIfHaveMoneyEnvolved(): boolean {
        return this.corrida.some(this.money);
    }

    money(element): boolean {
        return element.formaPagamento.nome === 'Dinheiro';
    }
}
