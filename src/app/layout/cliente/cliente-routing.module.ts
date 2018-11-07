import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';

const routes: Routes = [
    {
        path: '',
        component: ClienteComponent,
        children: [
            {
                path: '',
                component: ListClienteComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
