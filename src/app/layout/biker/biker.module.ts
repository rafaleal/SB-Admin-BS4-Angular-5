import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikerRoutingModule } from './biker-routing.module';
import { BikerComponent } from './biker.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    BikerRoutingModule,
    PageHeaderModule
  ],
  declarations: [BikerComponent]
})
export class BikerModule { }
