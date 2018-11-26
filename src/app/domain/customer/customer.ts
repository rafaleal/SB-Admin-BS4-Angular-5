import { Address } from '../address';
import { DropdownObject } from '../../shared/pipes/pipes';

export abstract class Customer {
    id: number;
    name: string;
    address: Address;
    phone: string;
    email: string;
    contractType: string | DropdownObject;
    customerType: string;
    createdAt: Date;
}
