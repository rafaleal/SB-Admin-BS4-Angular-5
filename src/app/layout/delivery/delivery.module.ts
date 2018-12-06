import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDeliveryComponent } from './update-delivery/update-delivery.component';
import { ListDeliveryComponent } from './list-delivery/list-delivery.component';
import { ButtonModule } from 'primeng/button';
import { DeliveryService } from './delivery.service';
import { AgmCoreModule } from '@agm/core';
import { CONFIG } from '../../../../config/config';
import { AddRouteComponent } from './add-delivery/add-route/add-route.component';
import { CustomerModule } from '../customer/customer.module';
import { BikerModule } from '../biker/biker.module';
import { InputMaskModule } from 'primeng/inputmask';
import { DeliveryResolverGuard } from './update-delivery/delivery-resolver.guard';
import { UpdateRouteComponent } from './update-delivery/update-route/update-route.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    PageHeaderModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    CustomerModule,
    BikerModule,
    AgmCoreModule.forRoot({
        apiKey: CONFIG.GOOGLE_API_KEY,
        libraries: ['places', 'geometry']
    }),
    SharedPipesModule,
    InputMaskModule
  ],
  declarations: [
      DeliveryComponent,
      AddDeliveryComponent,
      UpdateDeliveryComponent,
      ListDeliveryComponent,
      AddRouteComponent,
      UpdateRouteComponent
  ],
  providers: [
      DeliveryService,
      DeliveryResolverGuard
  ]
})
export class DeliveryModule { }
