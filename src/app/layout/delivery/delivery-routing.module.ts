import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { UpdateDeliveryComponent } from './update-delivery/update-delivery.component';
import { ListDeliveryComponent } from './list-delivery/list-delivery.component';
import { DeliveryResolverGuard } from './update-delivery/delivery-resolver.guard';

const routes: Routes = [
    {
        path: '',
        component: DeliveryComponent,
        children: [
            {
                path: '',
                component: ListDeliveryComponent
            },
            {
                path: 'add-delivery',
                component: AddDeliveryComponent,
            },
            {
                path: 'update-delivery/:id',
                component: UpdateDeliveryComponent,
                resolve: {
                    delivery: DeliveryResolverGuard
                }
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
      DeliveryResolverGuard
  ]
})
export class DeliveryRoutingModule { }
