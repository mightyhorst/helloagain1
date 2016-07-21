import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';

declare var MessageService: any;


@Component({
	selector: 'companylogo1',
	templateUrl: '/app/html/pages/Homepage/elements/companylogo1.html',
})

export class CompanyLogo1 {


	_messageService;
	companylogo1 = { 
		companyLogo : '/assets/images/restaurant/gallery/1.jpg',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('companylogo1', this.companylogo1);
	
		this._messageService = new MessageService();
	}

	callHandler() {
		var returnedData: any = this._messageService.callMobile(this._sharedData.getData("contactitem24").desc);
		var callSuccess: any = returnedData.callSuccess;
		var callMessage: any = returnedData.callMessage;
		var returnedData: any = this._messageService.sendTxt(this._sharedData.getData("contactitem24").desc, this._sharedData.getData("featuresitem19").desc);
		var txtSuccess: any = returnedData.txtSuccess;
		var txtMessage: any = returnedData.txtMessage;
	}





}