import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../../domain/cliente';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ClienteResolver implements Resolve<Cliente> {

    constructor(
        private service: ClienteService
    ) {
        // empty
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        throw new Error('Method not implemented.');
    }

    loadAllCliente() {
        //
    }

}
