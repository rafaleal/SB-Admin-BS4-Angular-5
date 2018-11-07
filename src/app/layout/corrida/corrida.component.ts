import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrida',
  template: `<router-outlet></router-outlet>`,
})
export class CorridaComponent implements OnInit {

    constructor() {
        console.log('Dentro do componente Corrida');
    }

    ngOnInit() {
        console.log('Dentro do componente Corrida');
    }
}
