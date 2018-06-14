import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss'],
  animations: [routerTransition()]
})
export class AddClienteComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
  }

}
