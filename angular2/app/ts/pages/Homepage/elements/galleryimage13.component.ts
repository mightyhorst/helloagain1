import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'galleryimage13',
	templateUrl: '/app/html/pages/Homepage/elements/galleryimage13.html',
})

export class Galleryimage13 {


	galleryimage13 = { 
		href : '{{api.gallery[1].href}}',
		imgSrc : '{{api.gallery[1].img_src}}',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('galleryimage13', this.galleryimage13);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}