import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-biker',
  templateUrl: './biker.component.html',
  styleUrls: ['./biker.component.scss'],
  animations: [routerTransition()]
})
export class BikerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
