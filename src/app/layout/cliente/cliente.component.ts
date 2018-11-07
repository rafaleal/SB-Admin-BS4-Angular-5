import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cliente',
  template: `<router-outlet></router-outlet>`,
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
