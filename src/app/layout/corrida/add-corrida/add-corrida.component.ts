import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Cliente } from '../../../domain/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-corrida',
  templateUrl: './add-corrida.component.html',
  styleUrls: ['./add-corrida.component.scss'],
  animations: [routerTransition()]
})
export class AddCorridaComponent implements OnInit {

  allClientes: Cliente[];
  selectedCliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  loadCliente() {
    //
  }

}
