import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage14',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage14.html',
})

export class Galleryimage14 {


	galleryimage14 = { 
		href : '/assets/images/restaurant/gallery/2.jpg',
		imgSrc : '/assets/images/restaurant/gallery/2.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage14', this.galleryimage14);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}