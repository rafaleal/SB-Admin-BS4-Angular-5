import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorridaComponent } from './corrida.component';

const routes: Routes = [
    {
        path: '', component: CorridaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorridaRoutingModule { }
