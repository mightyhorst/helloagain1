// A service that will share component data to other components (useful for when we reference other components in workflows)

import { Injectable } from '@angular/core';

@Injectable()
export class SharedData {

	shareData: any = {};

	getSharedData() {
		this.shareData = {};
	}

	addData (name: any, data: any) {
		this.shareData[name] = data;
	}

	getData (name: any) {
		return this.shareData[name];
	}

}	