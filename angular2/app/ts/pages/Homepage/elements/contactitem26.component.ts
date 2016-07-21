import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'contactitem26',
	templateUrl: '/app/html/pages/Homepage/elements/contactitem26.html',
})

export class Contactitem26 {


	contactitem26 = { 
		iconClass : 'fa fa-map-marker',
		title : 'Address',
		desc : '114 Ponsonby Rd, Auckland 1011',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('contactitem26', this.contactitem26);
		}





}