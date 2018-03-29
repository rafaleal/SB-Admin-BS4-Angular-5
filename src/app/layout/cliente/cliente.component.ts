import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  animations: [routerTransition()]
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
