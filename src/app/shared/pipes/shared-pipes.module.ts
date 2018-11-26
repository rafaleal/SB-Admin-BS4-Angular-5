import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumPipe } from './pipes';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [EnumPipe],
    exports: [EnumPipe]
})
export class SharedPipesModule { }
