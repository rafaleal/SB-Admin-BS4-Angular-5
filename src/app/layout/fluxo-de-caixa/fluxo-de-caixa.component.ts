import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CustomerCashFlow } from '../../domain/cash-flow/customer-cash-flow';
import { FluxoDeCaixaService } from './fluxo-de-caixa.service';
import { Biker } from '../../domain/biker';

@Component({
  selector: 'app-fluxo-de-caixa',
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrls: ['./fluxo-de-caixa.component.scss'],
  animations: [routerTransition()]
})
export class FluxoDeCaixaComponent implements OnInit {

    customerCols: any[];
    customersCashFlow: CustomerCashFlow[] = [];

    bikerCols: any[];
    bikersCashFlow: Biker[] = [];

    constructor(private cashFlowService: FluxoDeCaixaService) { }

    ngOnInit() {
        this.populateCustomerCashFlowDetailsTable();
        this.populateBikersCashFlowDetailsTable();

        this.cashFlowService.getBikersCashFlow().subscribe(data =>  {
            this.bikersCashFlow = data;
            this.bikersCashFlow.forEach((value) => value.totalDue *= 0.7);
        });
        this.cashFlowService.getCustomersCashFlow().subscribe(data => this.customersCashFlow = data);
    }

    populateCustomerCashFlowDetailsTable(): void {
        this.customerCols = [
            { field: 'name', header: 'Cliente' },
            { field: 'totalAmount', header: 'R$ Total' },
            { field: 'paymentStatus', header: 'Status Pagamento' }
        ];
    }

    populateBikersCashFlowDetailsTable(): void {
        this.bikerCols = [
            { field: 'fullName', header: 'Biker' },
            { field: 'totalDue', header: 'Salário' }
        ];
    }

}
