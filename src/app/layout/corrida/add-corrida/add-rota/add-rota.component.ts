import { Component, OnInit, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';
import {} from '@types/googlemaps';
import { Endereco } from '../../../../domain/endereco';


@Component({
  selector: 'app-add-rota',
  templateUrl: './add-rota.component.html',
  styleUrls: ['./add-rota.component.scss']
})
export class AddRotaComponent implements OnInit, OnDestroy {

    autoComplete: google.maps.places.Autocomplete;

    directionsService: google.maps.DirectionsService;
    directionsRequest: google.maps.DirectionsRequest;
    directionsDisplay: google.maps.DirectionsRenderer;

    distance: number;
    distancePrice: number;
    taxPrice: number;

    addresses: Endereco[];

    alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    labelIndex: number;

    // google maps zoom level
    zoom: number = 11;

    // initial center position for the map
    lat: number = -25.420459;
    lng: number = -49.269688;

    searchControl: FormControl;

    headquarterMarker: any = {
        lat: -25.420459,
        lng: -49.269688
    };

    markers: any[] = [];

    readonly TAX = 4;

    idListener: google.maps.MapsEventListener;

    @ViewChild('search') public searchElement: ElementRef;
    @ViewChild(AgmMap) public maps: AgmMap;

    constructor(
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
    ) {}

    ngOnInit() {

        this.searchControl = new FormControl();
        this.addresses = [];
        this.maps.mapReady.subscribe(
            mapReady => this.directionsDisplay.setMap(mapReady),
            e => console.log('Error setting map in DirectionRenderer')
        );

        this.labelIndex = 0;

        this.mapsApiLoader
            .load()
            .then(() => {
                // services have to be initialized inside MapsApiLoader to work
                this.directionsService = new google.maps.DirectionsService();
                this.directionsRequest = {} as google.maps.DirectionsRequest;
                this.directionsDisplay = new google.maps.DirectionsRenderer();

                // set Places Autocomplete
                this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
                this.autoComplete.setTypes(['address']);
                this.autoComplete.setComponentRestrictions({country: 'br'});

                // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
                this.maps.boundsChange.subscribe(bounds => this.autoComplete.setBounds(bounds));

                this.setupPlaceChangedListener();
            })
            .catch(e => console.log('Error loading MapsApi', e));

    }

    setupPlaceChangedListener(): void {
        this.idListener = this.autoComplete.addListener('place_changed', () => {
            console.log('Setting listener');
            this.ngZone.run(() => {
                const place = this.autoComplete.getPlace();

                if (!place.place_id || place.geometry === undefined || place.geometry === null) {
                    console.log('Place not found');
                    return;
                }

                const latitude = place.geometry.location.lat();
                const longitude = place.geometry.location.lng();

                this.addresses.push({
                    logradouro: place.formatted_address,
                    complemento: '',
                    latitude: latitude,
                    longitude: longitude
                });

                this.markers.push({
                    lat: latitude,
                    lng: longitude,
                    label: this.alphabeticLabels[this.labelIndex++ % this.alphabeticLabels.length]
                });
                console.log('Markers list: ', JSON.stringify(this.markers));
                this.searchControl.reset();
                this.drawRoute();
            });
        });
    }

    drawRoute(): void {
        const length = this.markers.length;
        if (!(length >= 2)) {
            return;
        }

        this.directionsRequest.origin = _.first(this.markers);
        this.directionsRequest.destination = _.last(this.markers);
        this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsRequest.optimizeWaypoints = true;

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

        this.directionsService.route(
            this.directionsRequest,
            (
                response: google.maps.DirectionsResult,
                status: google.maps.DirectionsStatus
            ) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                    this.calcDistance(response);
                    this.calcDistancePrice();
                } else {
                    console.log('Failed to display directions');
                }
            }
        );
    }

    calcDistance(response: google.maps.DirectionsResult) {
        const route: google.maps.DirectionsRoute = response.routes[0];
        let distance: number = 0;
        for (let i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
        }
        this.distance = parseFloat((distance / 1000).toFixed(2));
        console.log('Distance total: ', this.distance);
    }

    calcDistancePrice(): void {
        this.distancePrice = 12;
        if (this.distance > 2) {
            this.distancePrice = this.distance * 4;
        }
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    ngOnDestroy() {
        google.maps.event.removeListener(this.idListener);
    }
}
