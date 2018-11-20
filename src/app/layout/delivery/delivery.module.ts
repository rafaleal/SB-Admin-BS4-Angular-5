import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';
import { AddDeliveryService } from './add-delivery/add-delivery.service';
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
    })
  ],
  declarations: [
      DeliveryComponent,
      AddDeliveryComponent,
      UpdateDeliveryComponent,
      ListDeliveryComponent,
      AddRouteComponent
  ],
  providers: [
      AddDeliveryService,
      DeliveryService,
  ]
})
export class DeliveryModule { }
