import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikerRoutingModule } from './biker-routing.module';
import { BikerComponent } from './biker.component';

@NgModule({
  imports: [
    CommonModule,
    BikerRoutingModule
  ],
  declarations: [BikerComponent]
})
export class BikerModule { }
