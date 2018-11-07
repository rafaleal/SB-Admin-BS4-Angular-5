import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Cliente } from '../../domain/cliente';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ClienteService {

    private configUrl = 'assets/clientes.json';

    constructor(private http: HttpClient) {
      // empty
    }

    getAllClientes() {
        //
    }

}
