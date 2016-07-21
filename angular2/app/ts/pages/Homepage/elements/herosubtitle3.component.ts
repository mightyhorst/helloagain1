import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'herosubtitle3',
	templateUrl: '/app/html/pages/Homepage/elements/herosubtitle3.html',
})

export class HeroSubtitle3 {


	herosubtitle3 = { 
		desc : 'Welcome to ',
		companyName : 'helloagain',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('herosubtitle3', this.herosubtitle3);
		}





}