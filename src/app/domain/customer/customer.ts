import { Address } from '../address';
import { Phone } from '../phone';
import { Email } from '../email';
import { CustomerTypeEnum, ContractTypeEnum } from '../enums';

export abstract class Customer {
    id: number;
    name: string;
    address: Address;
    phone: string;
    email: string;
    contractType: ContractTypeEnum;
    customerType: CustomerTypeEnum;
    createdAt: Date;
}
