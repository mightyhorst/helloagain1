import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitem9',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitem9.html',
})

export class Navlistitem9 {


	navlistitem9 = { 
		href : 'campaings',
		name : 'Location',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitem9', this.navlistitem9);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}