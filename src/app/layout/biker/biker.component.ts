import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Biker } from '../../domain/biker';
import { BikerService } from './biker.service';

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

        bikers: Biker[];

        cols: any[];

        constructor(private bikerService: BikerService) { }

        ngOnInit() {
            // this.bikerService.getBikers().then(bikers => this.bikers = bikers);

            this.cols = [
                { field: 'id', header: 'Id' },
                { field: 'nome', header: 'Nome' },
                { field: 'cpf', header: 'CPF' },
                { field: 'telefone', header: 'Telefone' },
                { field: 'email', header: 'Email' },
                { field: 'numero', header: 'Numero de Corridas'},
                { field: 'distancia', header: 'Distancia Total' }
            ];
        }

        showDialogToAdd() {
            this.newBiker = true;
            this.biker = {} as Biker;
            this.displayDialog = true;
        }

        save() {
            const bikers = [...this.bikers];
            if (this.newBiker) {
                bikers.push(this.biker);
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
            const biker = {} as Biker;
            // for (let prop in b) {
            //     biker[prop] = b[prop];
            // }
            return biker;
        }
}
