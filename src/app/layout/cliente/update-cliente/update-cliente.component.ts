import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss'],
  animations: [routerTransition()]
})
export class UpdateClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
