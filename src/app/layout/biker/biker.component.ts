import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Biker } from '../../domain/biker';
import { BikerService } from './biker.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { PessoaFisica } from '../../domain/pessoaFisica';

@Component({
  selector: 'app-biker',
  templateUrl: './biker.component.html',
  styleUrls: ['./biker.component.scss'],
  animations: [routerTransition()]
})

export class BikerComponent implements OnInit {
    displayDialog: boolean;

        biker: Biker = {} as Biker;

        selectedBiker: Biker;

        newBiker: boolean;

        bikers: Biker[] = [];

        cols: any[];

        summaryCols: any[];

        constructor(private bikerService: BikerService) { }

        ngOnInit() {
            this.bikerService.getBikersSummary().subscribe(bikers => this.bikers = bikers);

            this.populateBikersDetailsTable();
            this.populateBikerSummaryTable();
        }

        showDialogToAdd() {
            this.newBiker = true;
            this.biker = {} as Biker;
            this.displayDialog = true;
        }

        save() {
            const bikers = [...this.bikers];
            if (this.newBiker) {
                // TODO add logger
                console.log(JSON.stringify(this.biker));
                this.bikerService.postBiker(this.biker).subscribe(newBiker => this.bikers.push(newBiker));
            } else {
                bikers[this.bikers.indexOf(this.selectedBiker)] = this.biker;
            }

            this.bikers = bikers;
            this.biker = null;
            this.displayDialog = false;
        }

        delete() {
            const index = this.bikers.indexOf(this.selectedBiker);
            this.bikers = this.bikers.filter((val, i) => i != index);
            this.biker = null;
            this.displayDialog = false;
        }

        onRowSelect(event) {
            this.newBiker = false;
            this.biker = this.cloneBiker(event.data);
            this.displayDialog = true;
        }

        cloneBiker(b: Biker): Biker {
            return cloneDeep(b);
        }

        populateBikersDetailsTable(): void {
            this.cols = [
                { field: 'id', header: 'Id' },
                { field: 'fullname', header: 'Nome' },
                { field: 'cpf', header: 'CPF' },
                { field: 'phone', header: 'Telefone' },
                { field: 'email', header: 'Email' },
                { field: 'address', header: 'Endereço' },
                { field: 'createdAt', header: 'Data de Registro' }
            ];
        }

        populateBikerSummaryTable(): void {
            this.summaryCols = [
                { field: 'id', header: 'Id' },
                { field: 'name', header: 'Nome' },
                { field: 'totalDeliveries', header: 'Nº Total de Corridas'},
                { field: 'totalDistance', header: 'Distancia Total' },
                { field: 'totalDue', header: 'R$ Total' },
            ];
        }
}
