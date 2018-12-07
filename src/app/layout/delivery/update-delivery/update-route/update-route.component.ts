import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Delivery } from '../../../../domain/delivery';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import * as _ from 'lodash';
import { Address } from '../../../../domain/address';
import { Point } from '../../../../domain/point';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.scss']
})
export class UpdateRouteComponent implements OnInit, OnDestroy {
    @Input()
    delivery: Delivery;
    @Output()
    deliveryChange: EventEmitter<Delivery> = new EventEmitter<Delivery>();

    @ViewChild('search') public searchElement: ElementRef;
    @ViewChild(AgmMap) public maps: AgmMap;

    autoComplete: google.maps.places.Autocomplete;
    directionsService: google.maps.DirectionsService;
    directionsRequest: google.maps.DirectionsRequest;
    directionsDisplay: google.maps.DirectionsRenderer;
    idListener: google.maps.MapsEventListener;

    markers: any[] = [];

    distance: number;
    distancePrice: number;

    addresses: Address[];

    alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    labelIndex: number;

    // google maps zoom level
    zoom: number = 11;

    // initial center position for the map
    lat: number = -25.420459;
    lng: number = -49.269688;

    searchControl: FormControl;

    readonly TAX_DISTANCE = 4;
    readonly TAX_WAITING = 0.5;

    constructor(
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
    ) { }

    ngOnInit() {
        this.searchControl = new FormControl();
        this.initializeRouteAndComponents();
        this.loadMarkers();
        this.setGoogleMaps();
    }

    initializeRouteAndComponents(): void {
        this.addresses = [];
        this.markers = [];
    }

    loadMarkers() {
        this.delivery.route.points.forEach(point => {
            this.markers.push({
                lat: point.address.lat,
                lng: point.address.lng,
                label: this.alphabeticLabels[this.labelIndex]
            });
        });
    }

    setGoogleMaps(): void {
        this.maps.mapReady.subscribe(
            mapReady => {
                this.directionsDisplay.setMap(mapReady);
                this.drawRoute();
            },
            e => console.log('Error setting map in DirectionRenderer', e)
        );

        this.labelIndex = 0;

        this.mapsApiLoader
            .load()
            .then(() => {
                // services have to be initialized inside MapsApiLoader to work
                this.initializeGoogleMapsServices();

                this.setPlacesAutocomplete();

                // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
                this.maps.boundsChange.subscribe(bounds => this.autoComplete.setBounds(bounds));

                this.setupPlaceChangedListener();
            })
            .catch(e => console.log('Error loading MapsApi', e));
    }

    initializeGoogleMapsServices(): void {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRequest = {} as google.maps.DirectionsRequest;
        this.directionsDisplay = new google.maps.DirectionsRenderer();
    }

    setPlacesAutocomplete(): void {
        this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
        this.autoComplete.setTypes(['address']);
        this.autoComplete.setComponentRestrictions({country: 'br'});
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

                const address = {
                    street: place.formatted_address,
                    additionalInfo: '',
                    lat: latitude,
                    lng: longitude
                } as Address;

                this.addresses.push(address);

                const point: Point = new Point();
                point.address = address;

                this.addPointToRoute(point);

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

    addPointToRoute(point: Point): void {
        this.delivery.route.addPoint(point);
        console.log(JSON.stringify(this.delivery.route));
        this.deliveryChange.emit(this.delivery);
    }

    drawRoute(): void {
        const length = this.markers.length;
        if (!(length >= 2)) {
            return;
        }

        this.setDirectionsRequest();

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

        this.callDirectionServiceRoute();

    }

    setDirectionsRequest(): void {
        this.directionsRequest.origin = _.first(this.markers);
        this.directionsRequest.destination = _.last(this.markers);
        this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsRequest.optimizeWaypoints = true;
    }

    callDirectionServiceRoute(): void {
        this.directionsService.route(
            this.directionsRequest,
            (
                response: google.maps.DirectionsResult,
                status: google.maps.DirectionsStatus
            ) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                    this.calcDistance(response);
                    // this.calcDistancePrice();
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
        this.delivery.route.totalDistance = this.distance;
    }

    calcDistancePrice(): void {
        this.distancePrice = this.distance * 4;
        if (this.distancePrice < 12) {
            this.distancePrice = 12;
        }
        this.delivery.route.totalDue = this.distancePrice;

    }

    ngOnDestroy() {
        google.maps.event.removeListener(this.idListener);
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    updateFinalAmount(): void {
        console.log('Inside updateFinalAmount()');
        const distancePrice = this.delivery.route.totalDue;
        let extraAmount = 0;
        this.delivery.route.points.forEach(point => extraAmount += point.waitingTime * this.TAX_WAITING);
        this.delivery.finalAmount = distancePrice + extraAmount;
    }

}
