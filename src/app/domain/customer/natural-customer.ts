import { Customer } from './customer';
import { CustomerTypeEnum } from '../enums';

export class NaturalCustomer extends Customer {
    cpf: string;
    customerType = CustomerTypeEnum.Natural;
}
