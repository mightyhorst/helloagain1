import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'herotitle2',
	templateUrl: '/app/html/pages/Homepage/elements/herotitle2.html',
})

export class HeroTitle2 {


	herotitle2 = { 
		companyName : 'helloagain',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('herotitle2', this.herotitle2);
		}





}