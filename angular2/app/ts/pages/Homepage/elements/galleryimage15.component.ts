import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage15',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage15.html',
})

export class Galleryimage15 {


	galleryimage15 = { 
		href : '/assets/images/restaurant/gallery/4.jpg',
		imgSrc : '/assets/images/restaurant/gallery/4.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage15', this.galleryimage15);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}