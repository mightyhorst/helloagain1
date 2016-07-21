import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage18',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage18.html',
})

export class Galleryimage18 {


	galleryimage18 = { 
		href : '/assets/images/restaurant/gallery/3.jpg',
		imgSrc : '/assets/images/restaurant/gallery/3.jpg',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage18', this.galleryimage18);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}