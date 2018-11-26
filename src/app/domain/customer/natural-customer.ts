import { Customer } from './customer';
import { CustomerTypeEnum } from '../enums';
import { Address } from '../address';

export class NaturalCustomer extends Customer {
    cpf: string;

    constructor() {
        super();
        this.address = new Address();
    }
}
