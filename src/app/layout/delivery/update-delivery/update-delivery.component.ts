import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.scss'],
  animations: [routerTransition()]
})
export class UpdateDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
