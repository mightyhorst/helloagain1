import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'bannertitle22',
	templateUrl: '/app/html/pages/Homepage/elements/bannertitle22.html',
})

export class Bannertitle22 {


	bannertitle22 = { 
		title : 'Enjoy an unforgettable food & service',
		class : 'banner-heading font-alt mb-40',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('bannertitle22', this.bannertitle22);
		}





}