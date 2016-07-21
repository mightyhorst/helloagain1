import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'scrolldown4',
	templateUrl: '/app/html/pages/Homepage/elements/scrolldown4.html',
})

export class Scrolldown4 {


	scrolldown4 = { 
		href : '#about',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('scrolldown4', this.scrolldown4);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}