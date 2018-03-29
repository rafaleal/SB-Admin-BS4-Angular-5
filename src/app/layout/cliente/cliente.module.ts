import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PageHeaderModule
  ],
  declarations: [ClienteComponent]
})
export class ClienteModule { }
