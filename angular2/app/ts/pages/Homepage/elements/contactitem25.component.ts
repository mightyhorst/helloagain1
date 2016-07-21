import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem25',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem25.html',
})

export class Contactitem25 {


	contactitem25 = { 
		iconClass : 'fa fa-envelope',
		title : 'email',
		desc : 'info@longroom.co.nz',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem25', this.contactitem25);
		}





}