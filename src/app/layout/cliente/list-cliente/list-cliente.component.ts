import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
  animations: [routerTransition()]
})
export class ListClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
