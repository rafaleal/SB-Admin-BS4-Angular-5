import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from '../../../domain/delivery';
import * as _ from 'lodash';
import { DeliveryService } from '../delivery.service';
import { Biker } from '../../../domain/biker';
import { DeliveryStatusEnum, PaymentStatusEnum } from '../../../domain/enums';
import { DropdownObject } from '../../../shared/pipes/pipes';
import * as moment from 'moment';

@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.scss'],
  animations: [routerTransition()]
})
export class UpdateDeliveryComponent implements OnInit, OnChanges, AfterViewInit {

    delivery: Delivery;
    clonedDelivery: Delivery;
    allBikers: Biker[];
    deliveryStatus = DeliveryStatusEnum;
    paymentStatus = PaymentStatusEnum;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: DeliveryService,
        ) { }

    ngOnInit() {
        this.loadBikers();
        this.loadDelivery();
        this.cloneDelivery();
    }

    loadDelivery(): void {
        this.route.data.subscribe(data => {
            console.log(JSON.stringify(data));
            this.delivery = data.delivery;
        });
    }

    cloneDelivery(): void {
        this.clonedDelivery = _.cloneDeep(this.delivery);
    }

    loadBikers(): void {
        this.service.getAllBikers().subscribe(data => this.allBikers = data);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Change:');
    }

    ngAfterViewInit(): void {
        // this.paymentStatus = this.delivery.statusDelivery;
        console.log('ViewInit');
    }

    setDeliveryStatus(value: DropdownObject) {
        this.delivery.statusDelivery = value.name.toUpperCase();
        console.log(JSON.stringify(this.delivery, null, 2));
    }

    setPaymentStatus(value: DropdownObject) {
        this.delivery.payment.status = value.name.toUpperCase();
    }

    onClickSave(): void {
        //
    }

    setCollectUpTime(): void {
        this.delivery.collectUpTime = moment().format('HH:mm:ss');
    }

    setHandOverTime(): void {
        this.delivery.handoverTime = moment().format('HH:mm:ss');
    }

}
