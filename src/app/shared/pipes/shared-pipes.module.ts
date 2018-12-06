import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { EnumPipe, LooseCurrencyPipe } from './pipes';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [EnumPipe, LooseCurrencyPipe],
    exports: [EnumPipe, LooseCurrencyPipe],
    providers: [CurrencyPipe]
})
export class SharedPipesModule { }
