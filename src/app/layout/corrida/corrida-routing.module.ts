import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorridaComponent } from './corrida.component';
import { AddCorridaComponent } from './add-corrida/add-corrida.component';
import { UpdateCorridaComponent } from './update-corrida/update-corrida.component';
import { ListCorridaComponent } from './list-corrida/list-corrida.component';
import { ClienteResolver } from './guards/cliente-resolver.guard';

const routes: Routes = [
    {
        path: '',
        component: CorridaComponent,
        children: [
            {
                path: '',
                component: ListCorridaComponent
            },
            {
                path: 'add-corrida',
                component: AddCorridaComponent,
            },
            {
                path: 'update-corrida',
                component: UpdateCorridaComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
      // provide guards here
      ClienteResolver
  ]
})
export class CorridaRoutingModule { }
