import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallinkitem29',
	templateUrl: '/app/html/pages/Homepage/elements/sociallinkitem29.html',
})

export class Sociallinkitem29 {


	sociallinkitem29 = { 
		href : '#',
		title : 'Twitter',
		iconClass : 'fa fa-twitter',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallinkitem29', this.sociallinkitem29);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}