import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-update-corrida',
  templateUrl: './update-corrida.component.html',
  styleUrls: ['./update-corrida.component.scss'],
  animations: [routerTransition()]
})
export class UpdateCorridaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
