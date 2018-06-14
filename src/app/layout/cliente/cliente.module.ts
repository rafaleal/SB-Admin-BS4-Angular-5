import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { PageHeaderModule } from '../../shared';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PageHeaderModule
  ],
  declarations: [ClienteComponent, AddClienteComponent, ListClienteComponent, UpdateClienteComponent]
})
export class ClienteModule { }
