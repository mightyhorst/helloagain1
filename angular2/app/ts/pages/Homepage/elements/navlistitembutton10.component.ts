import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitembutton10',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitembutton10.html',
})

export class Navlistitembutton10 {


	navlistitembutton10 = { 
		href : 'reservations',
		name : 'Reservations',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitembutton10', this.navlistitembutton10);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}