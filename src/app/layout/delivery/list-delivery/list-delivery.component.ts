import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';
import { routerTransition } from '../../../router.animations';
import * as _ from 'lodash';
import { Route } from '../../../domain/route';
import { DeliveryStatusEnum } from '../../../domain/enums';
import { Delivery } from '../../../domain/delivery';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss'],
  animations: [routerTransition()]
})
export class ListDeliveryComponent implements OnInit {

    listDelivery: Delivery[];
    listDelivery2: any[];
    rowGroupMetadata: any;
    sales: any[];
    pagamento: any[];
    formaSelecionada: any;
    statusEntrega: any[];
    selectedStatusEntrega: any;
    totalDue: number;
    totalDistance: number;
    selectedDelivery: any;

    constructor(private router: Router,
                private service: DeliveryService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.listDelivery2 = [];
        this.getDeliveries();
    }

      onClickAdd(): void {
          //
      }

      onClickEdit(): Promise<boolean> {
          console.log('Dentro do onClickEdit()', JSON.stringify(this.selectedDelivery));
          return this.router.navigate(['update-delivery', this.selectedDelivery], { relativeTo: this.route });
      }

      onClickDelete(): void {
          //
      }

      onSort() {
        this.updateRowGroupMetaData();
      }

      getTotalPrice(): void {
        this.totalDue = 0;
        if (this.listDelivery) {
            this.listDelivery.forEach(c => this.totalDue += c.route.totalDue);
        }
      }

      getTotalDistance(): void {
          this.totalDistance = 0;
          if (this.listDelivery) {
            this.listDelivery.forEach(c => this.totalDistance += c.route.totalDistance);
            this.totalDistance = Number(this.totalDistance.toFixed(2));
        }
      }

      updateRowGroupMetaData() {
        this.rowGroupMetadata = {};
        if (this.listDelivery2) {
            for (let i = 0; i < this.listDelivery2.length; i++) {
                const rowData = this.listDelivery2[i];
                const id = rowData.id;
                if (i == 0) {
                    this.rowGroupMetadata[id] = { index: 0, size: 1 };
                } else {
                    const previousRowData = this.listDelivery2[i - 1];
                    const previousRowGroup = previousRowData.id;
                    if (id === previousRowGroup) {
                        this.rowGroupMetadata[id].size++;
                    } else {
                        this.rowGroupMetadata[id] = { index: i, size: 1 };
                    }
                }
            }
        }
    }

    getDeliveries(): void {
        this.service.getAllDeliveries().pipe(
            tap(data => console.log('Delivery list coming from server: ', JSON.stringify(data)))
        )
        .subscribe(data => {
            this.listDelivery = data;
            this.getTotalPrice();
            this.getTotalDistance();
            this.explodeDeliveries();
            this.updateRowGroupMetaData();
        });
    }

    explodeDeliveries(): void {
        this.listDelivery.forEach(cor => {
            cor.route.points.forEach(p => {
                this.listDelivery2.push({
                    id: cor.id,
                    statusDelivery: cor.statusDelivery,
                    createdAt: cor.createdAt,
                    registeredTime: cor.registeredTime,
                    collectUpTime: cor.collectUpTime,
                    handoverTime: cor.handoverTime,
                    route: {
                        address: p.address.street,
                        personResponsible: p.personResponsible,
                        waitingTime: p.waitingTime,
                    },
                    totalDistance: cor.route.totalDistance,
                    customer: cor.customer.name,
                    biker: cor.biker.fullName,
                    totalDue: cor.route.totalDue,
                    payment: cor.payment,
                    customerType: cor.customer.customerType,
                });
            });
        });
    }

    checkIfHaveMoneyEnvolved(): boolean {
        return this.listDelivery.some(this.money);
    }

    money(delivery: Delivery): boolean {
        return delivery.payment.paymentType === 'MONEY';
    }
}
