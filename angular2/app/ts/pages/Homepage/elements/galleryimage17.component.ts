import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage17',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage17.html',
})

export class Galleryimage17 {


	galleryimage17 = { 
		href : '/assets/images/restaurant/gallery/10.jpg',
		imgSrc : '/assets/images/restaurant/gallery/10.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage17', this.galleryimage17);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}