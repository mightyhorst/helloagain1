import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitem5',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitem5.html',
})

export class Navlistitem5 {


	navlistitem5 = { 
		class : 'active',
		href : '#',
		name : 'Home',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitem5', this.navlistitem5);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}