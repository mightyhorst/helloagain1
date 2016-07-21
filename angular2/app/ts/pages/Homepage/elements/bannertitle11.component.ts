import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'bannertitle11',
	templateUrl: '/app/html/pages/Homepage/elements/bannertitle11.html',
})

export class Bannertitle11 {


	bannertitle11 = { 
		title : 'We provide food that customers love, day after day after day. It is not a big secret. People just want more of it.',
		class : 'lead',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('bannertitle11', this.bannertitle11);
		}





}