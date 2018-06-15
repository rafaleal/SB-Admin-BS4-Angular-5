import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorridaRoutingModule } from './corrida-routing.module';
import { CorridaComponent } from './corrida.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCorridaComponent } from './add-corrida/add-corrida.component';
import { AddCorridaService } from './add-corrida/add-corrida.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCorridaComponent } from './update-corrida/update-corrida.component';
import { ListCorridaComponent } from './list-corrida/list-corrida.component';
import { ButtonModule } from 'primeng/button';
import { CorridaService } from './corrida.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    CorridaRoutingModule,
    PageHeaderModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { passThruUnknownUrl: true, dataEncapsulation: false }
    ),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAUtZ2xXhiEOVBLBGEImAoO6WAFdHCqJqk',
        libraries: ['places', 'geometry']
    })
  ],
  declarations: [
      CorridaComponent,
      AddCorridaComponent,
      UpdateCorridaComponent,
      ListCorridaComponent
  ],
  providers: [
      AddCorridaService,
      CorridaService,
      InMemoryDataService
  ]
})
export class CorridaModule { }
