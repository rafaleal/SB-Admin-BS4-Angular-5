import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorridaRoutingModule } from './corrida-routing.module';
import { CorridaComponent } from './corrida.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CorridaRoutingModule,
    PageHeaderModule,
    TableModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [CorridaComponent]
})
export class CorridaModule { }
