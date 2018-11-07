import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';

const routes: Routes = [
    {
        path: '', component: FluxoDeCaixaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluxoDeCaixaRoutingModule { }
