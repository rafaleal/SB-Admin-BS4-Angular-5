import { Customer } from './customer';
import { CustomerTypeEnum } from '../enums';

export class LegalCustomer extends Customer {
    socialReason: string;
    cnpj: string;
    customerType = CustomerTypeEnum.Legal;
}
