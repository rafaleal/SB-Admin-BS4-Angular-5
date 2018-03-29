import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorridaRoutingModule } from './corrida-routing.module';
import { CorridaComponent } from './corrida.component';

@NgModule({
  imports: [
    CommonModule,
    CorridaRoutingModule
  ],
  declarations: [CorridaComponent]
})
export class CorridaModule { }
