import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Customer } from '../../../domain/customer/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from '../../../domain/delivery';
import { PaymentTypeEnum } from '../../../domain/enums';
import { Biker } from '../../../domain/biker';
import * as _ from 'lodash';
import { DropdownObject } from '../../../shared/pipes/pipes';
import { MoneyPayment } from '../../../domain/money-payment';
import { Payment } from '../../../domain/payment';
import { DeliveryService } from '../delivery.service';

@Component({
    selector: 'app-add-delivery',
    templateUrl: './add-delivery.component.html',
    styleUrls: ['./add-delivery.component.scss'],
    animations: [routerTransition()]
})
export class AddDeliveryComponent implements OnInit {
    allCustomers: Customer[] = [];
    allBikers: Biker[] = [];
    delivery: Delivery;
    paymentOptions = PaymentTypeEnum;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private addDeliveryService: DeliveryService
    ) {}

    ngOnInit() {
        this.initializeDelivery();
        this.addDeliveryService.getAllCustomers().subscribe(data => this.allCustomers = data);
        this.addDeliveryService.getAllBikers().subscribe(data => this.allBikers = data);
    }

    loadCustomers () {
    //
    }

    initializeDelivery(): void {
        this.delivery = new Delivery();
    }

    isEmpty(object: Object) {
        return _.isEmpty(object);
    }

    onClickSave(): void {
        this.addDeliveryService.postDelivery(this.delivery)
            .subscribe((bla: any) => this.router.navigate(['../'], {relativeTo: this.route}));
    }

    isMoney(): boolean {
         return this.delivery.payment instanceof MoneyPayment;
    }

    setPaymentType(value: DropdownObject): void {
        console.log('Inide setPaymentType', value);
        const amount = this.delivery.route.totalDue;
        if (value.name === 'Money') {
            this.delivery.payment = new MoneyPayment(amount);
        } else {
            this.delivery.payment = new Payment(amount);
        }
    }

    isDeliveryReadyToBeAdded(): boolean {
        console.log(JSON.stringify(this.delivery));
        return this.delivery.isReadyToBeAdded();
    }

}
