import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitem6',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitem6.html',
})

export class Navlistitem6 {


	navlistitem6 = { 
		href : 'about',
		name : 'About',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitem6', this.navlistitem6);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}