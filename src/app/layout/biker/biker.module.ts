import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikerRoutingModule } from './biker-routing.module';
import { BikerComponent } from './biker.component';
import { PageHeaderModule } from '../../shared';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BikerService } from './biker.service';

@NgModule({
  imports: [
    CommonModule,
    BikerRoutingModule,
    PageHeaderModule,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule
  ],
  declarations: [BikerComponent],
  providers: [
      BikerService
  ]
})
export class BikerModule { }
