import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitem7',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitem7.html',
})

export class Navlistitem7 {


	navlistitem7 = { 
		href : 'menu',
		name : 'Menu',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitem7', this.navlistitem7);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}