import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallinkitem28',
	templateUrl: '/app/html/pages/Homepage/elements/sociallinkitem28.html',
})

export class Sociallinkitem28 {


	sociallinkitem28 = { 
		href : '#',
		title : 'Facebook',
		iconClass : 'fa fa-facebook',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallinkitem28', this.sociallinkitem28);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}