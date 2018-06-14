import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Cliente } from '../../../domain/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Corrida } from '../../../domain/corrida';
import { StatusEntrega } from '../../../domain/status-entrega';
import { StatusEntregaEnum, StatusPagamentoEnum } from '../../../domain/enums';

@Component({
  selector: 'app-add-corrida',
  templateUrl: './add-corrida.component.html',
  styleUrls: ['./add-corrida.component.scss'],
  animations: [routerTransition()]
})
export class AddCorridaComponent implements OnInit {

  allClientes: Cliente[];
  selectedCliente: Cliente;
  corrida: Corrida;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  loadClientes() {
    //
  }

  newCorridaEsporadico() {
      this.corrida.statusEntrega = StatusEntregaEnum.REGISTRADO.toString();
      this.corrida.pagamento = StatusPagamentoEnum.PENDENTE.toString();
  }

}
