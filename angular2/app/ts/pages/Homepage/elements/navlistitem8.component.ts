import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navlistitem8',
	templateUrl: '/app/html/pages/Homepage/elements/navlistitem8.html',
})

export class Navlistitem8 {


	navlistitem8 = { 
		href : 'rewards',
		name : 'Gallery',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navlistitem8', this.navlistitem8);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}