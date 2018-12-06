import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Delivery } from '../../../domain/delivery';
import { DeliveryService } from '../delivery.service';

@Injectable()
export class DeliveryResolverGuard implements Resolve<Delivery> {

    constructor(
        private service: DeliveryService
    ) {
        console.log('Dentro do DeliveryResolverGuard');
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Delivery> | any {
        console.log('Dentro do DeliveryResolverGuard', JSON.stringify(route.paramMap.get('id')));
        const id = route.paramMap.get('id');
        return this.service.getDeliveryById(+id);
    }

}
