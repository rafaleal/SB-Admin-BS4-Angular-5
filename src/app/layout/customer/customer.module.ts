import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { PageHeaderModule } from '../../shared';
import { CustomerService } from './customer.service';
import { LegalCustomerComponent } from './legal-customer/legal-customer.component';
import { NaturalCustomerComponent } from './natural-customer/natural-customer.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { LegalCustomerService } from './legal-customer/legal-customer.service';
import { NaturalCustomerService } from './natural-customer/natural-customer.service';

@NgModule({
  imports: [
    TableModule,
    DialogModule,
    ButtonModule,
    CommonModule,
    CustomerRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [CustomerComponent, LegalCustomerComponent, NaturalCustomerComponent],
  providers: [
    CustomerService,
    LegalCustomerService,
    NaturalCustomerService
  ]
})
export class CustomerModule { }
