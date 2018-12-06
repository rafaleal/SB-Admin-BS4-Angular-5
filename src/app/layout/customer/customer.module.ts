import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { CustomerService } from './customer.service';
import { LegalCustomerComponent } from './legal-customer/legal-customer.component';
import { NaturalCustomerComponent } from './natural-customer/natural-customer.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { LegalCustomerService } from './legal-customer/legal-customer.service';
import { NaturalCustomerService } from './natural-customer/natural-customer.service';
import {InputMaskModule} from 'primeng/inputmask';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  imports: [
    TableModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    CommonModule,
    CustomerRoutingModule,
    PageHeaderModule,
    FormsModule,
    SharedPipesModule,
    InputMaskModule,
    MessagesModule,
    MessageModule,
  ],
  declarations: [CustomerComponent, LegalCustomerComponent, NaturalCustomerComponent],
  providers: [
    CustomerService,
    LegalCustomerService,
    NaturalCustomerService
  ]
})
export class CustomerModule { }
