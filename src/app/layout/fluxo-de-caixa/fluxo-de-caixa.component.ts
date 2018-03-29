import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-fluxo-de-caixa',
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrls: ['./fluxo-de-caixa.component.scss'],
  animations: [routerTransition()]
})
export class FluxoDeCaixaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
