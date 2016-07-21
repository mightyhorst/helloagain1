import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbtn23',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbtn23.html',
})

export class Bannerbtn23 {


	bannerbtn23 = { 
		title : 'Reserve a table',
		href : '/reservations',
		class : 'class="btn btn-mod btn-w btn-medium btn-round"',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbtn23', this.bannerbtn23);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}