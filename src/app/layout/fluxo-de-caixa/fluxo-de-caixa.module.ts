import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoDeCaixaRoutingModule } from './fluxo-de-caixa-routing.module';
import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';

import { PageHeaderModule } from './../../shared';
import { FluxoDeCaixaService } from './fluxo-de-caixa.service';
import { BikerService } from '../biker/biker.service';
import { BikerModule } from '../biker/biker.module';

@NgModule({
  imports: [
    CommonModule,
    FluxoDeCaixaRoutingModule,
    PageHeaderModule,
  ],
  declarations: [FluxoDeCaixaComponent],
  providers: [FluxoDeCaixaService]
})
export class FluxoDeCaixaModule { }
