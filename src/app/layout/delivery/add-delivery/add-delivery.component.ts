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
import { DeliveryStatusEnum } from '../../../domain/enums';
import { AddDeliveryService } from './add-delivery.service';
import { Biker } from '../../../domain/biker';
import { AddRouteComponent } from './add-route/add-route.component';
import { Route } from '../../../domain/route';

@Component({
    selector: 'app-add-delivery',
    templateUrl: './add-delivery.component.html',
    styleUrls: ['./add-delivery.component.scss'],
    animations: [routerTransition()]
})
export class AddDeliveryComponent implements OnInit {
    allCustomers: Customer[] = [];
    allBikers: Biker[] = [];
    // selectedCustomer: Customer;
    // selectedBiker: Biker;
    delivery: Delivery;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private addDeliveryService: AddDeliveryService
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
        this.delivery.route = new Route();
        this.delivery.biker = new Biker();
        this.delivery.customer = {} as Customer;
    }

}
