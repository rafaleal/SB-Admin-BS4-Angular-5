import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'enum'})
export class EnumPipe implements PipeTransform {
    transform(value, args: string[]): any {
        const names: string[] = Object.keys(value)
            .filter(k => typeof value[k] === 'number');
        const dropObjects: DropdownObject[] = [];
        names.forEach((item, index, array) => {
            dropObjects.push(new DropdownObject(index, item));
        });

        console.log(JSON.stringify(dropObjects));
        return dropObjects;
    }
}

@Pipe({name: 'cnpj'})
export class CNPJPipe implements PipeTransform {
    transform(value) {
        return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5")
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
