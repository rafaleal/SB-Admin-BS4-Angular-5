import { Component, OnInit } from '@angular/core';
import { NaturalCustomer } from '../../../domain/customer/natural-customer';
import { NaturalCustomerService } from './natural-customer.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { ContractTypeEnum } from '../../../domain/enums';
import { DropdownObject } from '../../../shared/pipes/pipes';

@Component({
  selector: 'app-natural-customer',
  templateUrl: './natural-customer.component.html',
  styleUrls: ['./natural-customer.component.scss']
})
export class NaturalCustomerComponent implements OnInit {

  displayDialog: boolean;

  naturalCustomer: NaturalCustomer = new NaturalCustomer();

  selectedNaturalCustomer: NaturalCustomer;

  newNaturalCustomer: boolean;

  naturalCustomers: NaturalCustomer[] = [];

  cols: any[];

  summaryCols: any[];

  summaryNaturalCustomers: NaturalCustomer[] = [];

  contractTypes = ContractTypeEnum;

  constructor(private naturalCustomerService: NaturalCustomerService) { }

  ngOnInit() {
      this.populateNaturalCustomersDetailsTable();
      this.naturalCustomerService.getAllNaturalCustomers().subscribe(data => {
          this.naturalCustomers = data;
          console.log(JSON.stringify(this.naturalCustomer));
        });
  }

  showDialogToAdd() {
      this.newNaturalCustomer = true;
      this.naturalCustomer = new NaturalCustomer();
      this.displayDialog = true;
  }

  save() {
      const naturalCustomers = [...this.naturalCustomers];
      if (this.newNaturalCustomer) {
          // TODO add logger
          console.log(JSON.stringify(this.naturalCustomer));
          this.naturalCustomerService.postNaturalCustomer(this.naturalCustomer).subscribe(
            newNaturalCustomer => this.naturalCustomers.push(newNaturalCustomer)
          );
      } else {
          console.log(JSON.stringify(this.naturalCustomer));
          this.naturalCustomerService.editNaturalCustomer(this.naturalCustomer).subscribe();
          naturalCustomers[this.naturalCustomers.indexOf(this.selectedNaturalCustomer)] = this.naturalCustomer;
      }

      this.naturalCustomers = naturalCustomers;
      this.naturalCustomer = null;
      this.displayDialog = false;
  }

  delete() {
      this.naturalCustomerService.deleteNaturalCustomer(this.selectedNaturalCustomer).subscribe();

      const index = this.naturalCustomers.indexOf(this.selectedNaturalCustomer);
      this.naturalCustomers = this.naturalCustomers.filter((val, i) => i != index);
      this.naturalCustomer = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newNaturalCustomer = false;
      this.naturalCustomer = this.cloneNaturalCustomer(event.data);
      this.displayDialog = true;
  }

  cloneNaturalCustomer(b: NaturalCustomer): NaturalCustomer {
      return cloneDeep(b);
  }

  populateNaturalCustomersDetailsTable(): void {
      this.cols = [
          { field: 'id', header: 'Id' },
          { field: 'name', header: 'Nome' },
          { field: 'cpf', header: 'CPF' },
          { field: 'phone', header: 'Telefone' },
          { field: 'email', header: 'Email' },
          { field: 'address', header: 'Endereço' },
          { field: 'contractType', header: 'Tipo Contrato' },
          { field: 'createdAt', header: 'Data de Registro' }
      ];
  }

  setContractType(value: DropdownObject) {
    this.naturalCustomer.contractType = value.name.toUpperCase();
  }

}
