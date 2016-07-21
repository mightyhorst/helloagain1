import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem27',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem27.html',
})

export class Contactitem27 {


	contactitem27 = { 
		iconClass : 'fa fa-clock-o',
		title : 'We are opened',
		desc : 'Monday-Friday: 11am to 3am <br/>Saturday: 10am to 3am <br/>Sunday: 10am to 11pm',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem27', this.contactitem27);
		}





}