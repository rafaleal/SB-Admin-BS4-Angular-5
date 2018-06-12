import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorridaRoutingModule } from './corrida-routing.module';
import { CorridaComponent } from './corrida.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AddCorridaComponent } from './add-corrida/add-corrida.component';
import { AddCorridaService } from './add-corrida/add-corrida.service';
import { HttpClientModule } from '@angular/common/http';
import { CorridaService } from './corrida.service';
import { UpdateCorridaComponent } from './update-corrida/update-corrida.component';
import { ListCorridaComponent } from './list-corrida/list-corrida.component';

@NgModule({
  imports: [
    CommonModule,
    CorridaRoutingModule,
    PageHeaderModule,
    TableModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
      CorridaComponent,
      AddCorridaComponent,
      UpdateCorridaComponent,
      ListCorridaComponent
  ],
  providers: [
      AddCorridaService,
      CorridaService
  ]
})
export class CorridaModule { }
