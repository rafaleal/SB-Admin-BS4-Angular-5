import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorridaRoutingModule } from './corrida-routing.module';
import { CorridaComponent } from './corrida.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    CorridaRoutingModule,
    PageHeaderModule
  ],
  declarations: [CorridaComponent]
})
export class CorridaModule { }
