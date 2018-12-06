import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CustomerCashFlow } from '../../domain/cash-flow/customer-cash-flow';
import { FluxoDeCaixaService } from './fluxo-de-caixa.service';
import { Biker } from '../../domain/biker';
import * as _ from 'lodash';

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

    expensesCols: any[];
    expenses: any[] = [];

    profit: number;

    constructor(private cashFlowService: FluxoDeCaixaService) { }

    ngOnInit() {
        this.populateCustomerCashFlowDetailsTable();
        this.populateBikersCashFlowDetailsTable();
        this.populateExpensesDetailsTable();

        this.cashFlowService.getBikersCashFlow().subscribe(data =>  {
            this.bikersCashFlow = data;
            this.bikersCashFlow.forEach((value) => value.totalDue *= 0.7);
        });
        this.cashFlowService.getCustomersCashFlow().subscribe(data => this.customersCashFlow = data);
        this.expenses = [
            { nature: 'Aluguel', amount: 800.00 },
            { nature: 'Telefone Fixo', amount: 30.00 },
            { nature: 'Internet', amount: 130.00 },
            { nature: 'Hospedagem Site', amount: 199.00}
        ];
        this.calculateProfit();
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

    populateExpensesDetailsTable(): void {
        this.expensesCols = [
            { field: 'nature', header: 'Natureza' },
            { field: 'amount', header: 'Valor' }
        ];
    }

    calculateProfit() {
        const expenses = _.sumBy(this.expenses, 'amount') + _.sumBy(this.bikersCashFlow, 'totalDue');
        console.log(expenses);
        const winnings = _.sumBy(this.customersCashFlow, 'totalAmount');
        this.profit = winnings - expenses;
    }

}
