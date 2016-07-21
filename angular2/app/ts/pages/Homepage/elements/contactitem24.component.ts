import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem24',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem24.html',
})

export class Contactitem24 {


	contactitem24 = { 
		iconClass : 'fa fa-phone',
		title : 'Call us',
		desc : '09 360 8803',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem24', this.contactitem24);
		}





}