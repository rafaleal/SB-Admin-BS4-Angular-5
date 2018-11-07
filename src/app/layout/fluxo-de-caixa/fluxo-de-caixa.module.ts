import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluxoDeCaixaRoutingModule } from './fluxo-de-caixa-routing.module';
import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';

import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    FluxoDeCaixaRoutingModule,
    PageHeaderModule
  ],
  declarations: [FluxoDeCaixaComponent]
})
export class FluxoDeCaixaModule { }
