import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({name: 'enum'})
export class EnumPipe implements PipeTransform {
    transform(value, args: string[]): any {
        const names: string[] = Object.keys(value)
            .filter(k => typeof value[k] === 'number');
        const dropObjects: DropdownObject[] = [];
        names.forEach((item, index, array) => {
            dropObjects.push(new DropdownObject(index, item));
        });

        console.log('Pipe:', JSON.stringify(dropObjects));
        return dropObjects;
    }
}

const _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

@Pipe({name: 'looseCurrency'})
export class LooseCurrencyPipe implements PipeTransform {
  constructor(private _currencyPipe: CurrencyPipe) {}

  transform(value: any, currencyCode: string, symbolDisplay: boolean, digits: string): string {
    if (typeof value === 'number' || _NUMBER_FORMAT_REGEXP.test(value)) {
      return this._currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
    } else {
      return value;
    }
  }
}

export class DropdownObject {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
