import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbtn12',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbtn12.html',
})

export class Bannerbtn12 {


	bannerbtn12 = { 
		title : 'Discover our menu',
		href : '/menu',
		class : 'btn btn-mod btn-medium btn-round',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbtn12', this.bannerbtn12);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}