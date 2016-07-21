import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage16',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage16.html',
})

export class Galleryimage16 {


	galleryimage16 = { 
		href : '/assets/images/restaurant/gallery/6.jpg',
		imgSrc : '/assets/images/restaurant/gallery/6.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage16', this.galleryimage16);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}