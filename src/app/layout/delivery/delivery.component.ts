import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  template: `<router-outlet></router-outlet>`,
})
export class DeliveryComponent implements OnInit {

    constructor() {
        console.log('Dentro do componente Delivery');
    }

    ngOnInit() {
        console.log('Dentro do componente Delivery');
    }
}
