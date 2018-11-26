import { Customer } from './customer';
import { CustomerTypeEnum } from '../enums';
import { Address } from '../address';

export class LegalCustomer extends Customer {
    socialReason: string;
    cnpj: string;

    constructor() {
        super();
        this.address = new Address();
    }

    public validateCNPJ() {
        console.log('Validate CNPJ');
        const cnpj = this.cnpj;

        if (cnpj == '') {
            return false;
        }

        if (cnpj.length != 14) {
            return false;
        }

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == '00000000000000' ||
            cnpj == '11111111111111' ||
            cnpj == '22222222222222' ||
            cnpj == '33333333333333' ||
            cnpj == '44444444444444' ||
            cnpj == '55555555555555' ||
            cnpj == '66666666666666' ||
            cnpj == '77777777777777' ||
            cnpj == '88888888888888' ||
            cnpj == '99999999999999') {
                return false;
            }

        // Valida DVs
        let size = cnpj.length - 2;
        let numbers: any = cnpj.substring(0, size);
        const digits = cnpj.substring(size);
        let sum = 0;
        let position = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * position--;
            if (position < 2) {
                position = 9;
            }
        }
        let result: any = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0)) {
            return false;
        }

        size = size + 1;
        numbers = cnpj.substring(0, size);
        sum = 0;
        position = size - 7;
        for (let i = size; i >= 1; i--) {
            sum += numbers.charAt(size - i) * position--;
            if (position < 2) {
                position = 9;
            }
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1)) {
            return false;
        }

        return true;
    }
}
