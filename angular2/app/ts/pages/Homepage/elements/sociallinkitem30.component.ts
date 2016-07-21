import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallinkitem30',
	templateUrl: '/app/html/pages/Homepage/elements/sociallinkitem30.html',
})

export class Sociallinkitem30 {


	sociallinkitem30 = { 
		href : '#',
		title : 'Pinterest',
		iconClass : 'fa fa-pinterest',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallinkitem30', this.sociallinkitem30);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}