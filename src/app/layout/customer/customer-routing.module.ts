import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { LegalCustomerComponent } from './legal-customer/legal-customer.component';
import { NaturalCustomerComponent } from './natural-customer/natural-customer.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: 'legal-customer',
                component: LegalCustomerComponent,
            },
            {
                path: 'natural-customer',
                component: NaturalCustomerComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
