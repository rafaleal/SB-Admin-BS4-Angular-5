import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-corrida',
  templateUrl: './corrida.component.html',
  styleUrls: ['./corrida.component.scss'],
  animations: [routerTransition()]
})
export class CorridaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
