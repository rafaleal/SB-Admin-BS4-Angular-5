import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Endereco } from '../../../../../domain/endereco';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';
import {} from '@types/googlemaps';


@Component({
  selector: 'app-add-rota',
  templateUrl: './add-rota.component.html',
  styleUrls: ['./add-rota.component.scss']
})
export class AddRotaComponent implements OnInit {

    autoComplete: google.maps.places.Autocomplete;

    directionsService: google.maps.DirectionsService;
    directionsRequest: google.maps.DirectionsRequest;
    directionsDisplay: google.maps.DirectionsRenderer;

    distancia: number;

    enderecos: Endereco[];

    // google maps zoom level
    zoom: number = 12;

    // initial center position for the map
    lat: number = -25.420459;
    lng: number = -49.269688;

    searchControl: FormControl;

    markers: any[] = [
        {
            lat: -25.420459,
            lng: -49.269688,
            // label: 'A'
        }
    ];

    @ViewChild('search') public searchElement: ElementRef;
    @ViewChild(AgmMap) public maps: AgmMap;

    constructor(
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
    ) {}

    ngOnInit() {

        console.log('SEARCH ELEMENT IS ', this.searchElement);
        this.searchControl = new FormControl();
        this.enderecos = [];
        this.maps.mapReady.subscribe(
            mapReady => this.directionsDisplay.setMap(mapReady),
            e => console.log('Erro no mapReady')
        );
        if (this.directionsDisplay) {
            console.log('Map is ready: ', this.directionsDisplay);
        }
        this.mapsApiLoader
            .load()
            .then(() => {
                // services have to be initiliazed within MapsApiLoader to work
                this.directionsService = new google.maps.DirectionsService();
                this.directionsRequest = {} as google.maps.DirectionsRequest;
                this.directionsDisplay = new google.maps.DirectionsRenderer();
                this.autoComplete = new google.maps.places.Autocomplete(
                    this.searchElement.nativeElement,
                    {
                        types: ['address'],
                        componentRestrictions: {country: 'br'}
                    }
                );
                this.setupPlaceChangedListener(this.autoComplete);
            })
            .catch(e => console.log('SUPER ERRO', e));

    }

    setupPlaceChangedListener(autocomplete: google.maps.places.Autocomplete): void {
        this.autoComplete.addListener('place_changed', () => {
            console.log('Inside listener');
            this.ngZone.run(() => {
                const place = this.autoComplete.getPlace();

                if (place.geometry === undefined || place.geometry === null) {
                    console.log('Nothing found');
                    return;
                }

                if (!place.place_id) {
                    console.log('Selecione uma opção da lista dropdown.');
                    return;
                }

                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();

                this.enderecos.push({
                    logradouro: place.formatted_address,
                    complemento: '',
                    latitude: latitude,
                    longitude: longitude
                });

                this.markers.push({
                    lat: latitude,
                    lng: longitude
                    // label: 'B'
                });
                console.log('Lista de markers: ', JSON.stringify(this.markers));
                this.searchControl.reset();
                this.getRoute();
            });
        });
    }

    getRoute(): void {
        const length = this.markers.length;
        if (!(length >= 2)) {
            return;
        }
        this.directionsRequest.origin = _.first(this.markers);
        this.directionsRequest.destination = _.last(this.markers);
        if (length > 2) {
            if (length >= 12) {
                console.log('Google taxes for more than 10 waypoints. Be careful');
                return;
            }
            const waypoints: google.maps.DirectionsWaypoint[] = [];
            this.markers.slice(1, this.markers.length - 1)
                .forEach(coordinates => {
                    const way: google.maps.DirectionsWaypoint = {location: coordinates, stopover: null};
                    waypoints.push(way);
                });
            this.directionsRequest.waypoints = waypoints;
            console.log('Waypoints: ', JSON.stringify(waypoints));
        }
        this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsRequest.optimizeWaypoints = true;

        this.directionsService.route(
            this.directionsRequest,
            (
                response: google.maps.DirectionsResult,
                status: google.maps.DirectionsStatus
            ) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                    this.calcDistance(response);
                } else {
                    console.log('Failed to display directions');
                }
            }
        );
    }

    calcDistance(response: google.maps.DirectionsResult) {
        const rota: google.maps.DirectionsRoute = response.routes[0];
        let distancia: number = 0;
        for (let i = 0; i < rota.legs.length; i++) {
            distancia += rota.legs[i].distance.value;
        }
        this.distancia = parseFloat((distancia / 1000).toFixed(2));
        console.log('Distancia total: ', this.distancia);
    }
}
