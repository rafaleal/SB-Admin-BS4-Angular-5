import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Cliente } from '../../../domain/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Corrida } from '../../../domain/corrida';
import { StatusEntregaEnum, TipoClienteEnum } from '../../../domain/enums';
import { PessoaFisica } from '../../../domain/pessoaFisica';
import { MapsAPILoader, MouseEvent, GoogleMapsAPIWrapper } from '@agm/core';

// just an interface for type safety.
// interface Marker {
//     lat: number;
//     lng: number;
//     label?: string;
//     draggable: boolean;
// }
@Component({
  selector: 'app-add-corrida',
  templateUrl: './add-corrida.component.html',
  styleUrls: ['./add-corrida.component.scss'],
  animations: [routerTransition()]
})
export class AddCorridaComponent implements OnInit {

  allClientes: Cliente[];
  selectedCliente: Cliente;
  corrida: Corrida;

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: any[] ;
//   = [
//     {
//         lat: 51.673858,
//         lng: 7.815982,
//         label: 'A',
//         draggable: true
//     },
//     {
//         lat: 51.373858,
//         lng: 7.215982,
//         label: 'B',
//         draggable: false
//     },
//     {
//         lat: 51.723858,
//         lng: 7.895982,
//         label: 'C',
//         draggable: true
//     }
// ]

  @ViewChild('search') public searchElement: ElementRef;

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
        this.mapsApiLoader
        .load()
        .then(
            () => {
                console.log('In autocomplete');
                const autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {
                    types: ['address']
                });
                console.log('Starting listener');
                autoComplete.addListener('place_changed', () => {
                    console.log('Inside listener');
                    this.ngZone.run(() => {
                        const place = autoComplete.getPlace();
                        this.markers = [
                            {
                                lat: place.geometry.location.lat,
                                lng: place.geometry.location.lng,
                                label: 'D'
                            }
                        ];
                        if (place.geometry === undefined || place.geometry === null) {
                            console.log('Nothing found');
                            return;
                        }
                    });
                });
                console.log('After listener');
            }
        );

        const pessoaFisica: PessoaFisica = new PessoaFisica();
        pessoaFisica.cpf = '999999999';
        pessoaFisica.nome = 'Alberto João';
        pessoaFisica.email = 'ajoao@gmail.com';
        pessoaFisica.telefone = '(41)9696969696';

        this.selectedCliente = new Cliente(pessoaFisica);
        this.selectedCliente.tipoCliente = TipoClienteEnum.FATURADO.toString();

    //   this.allClientes = [
    //       {
    //           id: 1,
    //           telefone: '35558955',
    //           email: 'mueller@email.com',
    //           tipoCliente: 'Faturado',
    //           tipoPessoa:
    //       }
    //   ]
  }

//   loadClientes () {
//     //
//   }

//   newCorridaEsporadico() {
//       this.corrida.statusEntrega = StatusEntregaEnum.REGISTRADO.toString();
//     //   this.corrida.pagamento =
//       this.corrida.tipo = this.selectedCliente.tipoCliente.toString();
//   }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: any, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

