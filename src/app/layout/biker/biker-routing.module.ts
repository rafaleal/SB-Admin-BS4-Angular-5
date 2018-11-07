import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikerComponent } from './biker.component';

const routes: Routes = [
    {
        path: '', component: BikerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikerRoutingModule { }
