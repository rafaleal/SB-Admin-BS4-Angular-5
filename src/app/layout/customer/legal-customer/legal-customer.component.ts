import { Component, OnInit } from '@angular/core';
import { LegalCustomer } from '../../../domain/customer/legal-customer';
import { LegalCustomerService } from './legal-customer.service';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-legal-customer',
  templateUrl: './legal-customer.component.html',
  styleUrls: ['./legal-customer.component.scss']
})
export class LegalCustomerComponent implements OnInit {

  displayDialog: boolean;

  legalCustomer: LegalCustomer = {} as LegalCustomer;

  selectedLegalCustomer: LegalCustomer;

  newLegalCustomer: boolean;

  legalCustomers: LegalCustomer[] = [];

  cols: any[];

  summaryCols: any[];

  summaryLegalCustomers: LegalCustomer[] = [];

  constructor(private legalCustomerService: LegalCustomerService) { }

  ngOnInit() {
      this.populateLegalCustomersDetailsTable();
      this.legalCustomerService.getAllLegalCustomers().subscribe(data => this.legalCustomers = data);
  }

  showDialogToAdd() {
      this.newLegalCustomer = true;
      this.legalCustomer = {} as LegalCustomer;
      this.displayDialog = true;
  }

  save() {
      const legalCustomers = [...this.legalCustomers];
      if (this.newLegalCustomer) {
          // TODO add logger
          console.log(JSON.stringify(this.legalCustomer));
          this.legalCustomerService.postLegalCustomer(this.legalCustomer).subscribe(
            newLegalCustomer => this.legalCustomers.push(newLegalCustomer)
          );
      } else {
          console.log(JSON.stringify(this.legalCustomer));
          this.legalCustomerService.editLegalCustomer(this.legalCustomer).subscribe();
          legalCustomers[this.legalCustomers.indexOf(this.selectedLegalCustomer)] = this.legalCustomer;
      }

      this.legalCustomers = legalCustomers;
      this.legalCustomer = null;
      this.displayDialog = false;
  }

  delete() {
      this.legalCustomerService.deleteLegalCustomer(this.selectedLegalCustomer).subscribe();

      const index = this.legalCustomers.indexOf(this.selectedLegalCustomer);
      this.legalCustomers = this.legalCustomers.filter((val, i) => i != index);
      this.legalCustomer = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newLegalCustomer = false;
      this.legalCustomer = this.cloneLegalCustomer(event.data);
      this.displayDialog = true;
  }

  cloneLegalCustomer(b: LegalCustomer): LegalCustomer {
      return cloneDeep(b);
  }

  populateLegalCustomersDetailsTable(): void {
      this.cols = [
          { field: 'id', header: 'Id' },
          { field: 'fantasyName', header: 'Nome Fantasia' },
          { field: 'socialReason', header: 'Razão Social' },
          { field: 'cnpj', header: 'CNPJ' },
          { field: 'phone', header: 'Telefone' },
          { field: 'email', header: 'Email' },
          { field: 'address', header: 'Endereço' },
          { field: 'contractType', header: 'Tipo Contrato' },
          { field: 'createdAt', header: 'Data de Registro' }
      ];
  }

}
