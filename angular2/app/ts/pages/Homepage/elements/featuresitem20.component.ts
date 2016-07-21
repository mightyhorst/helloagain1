import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'featuresitem20',
	templateUrl: '/app/html/pages/Homepage/elements/featuresitem20.html',
})

export class Featuresitem20 {


	featuresitem20 = { 
		iconClass : 'icon-clock',
		title : 'Quick waiters',
		desc : 'Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend, lorem fermentum orci sit amet, iaculis libero.',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('featuresitem20', this.featuresitem20);
		}





}