import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import '/app/js/rxjs-operators';

@Injectable()
export class ConfigService {

	url: string = '/app.config.json';
	configFile;

	constructor (private _http: Http){}

	getConfig() {
		return this._http.get(this.url).map(res => res.json());
	}

	getDomain() {
		return this.configFile.domain;
	}
}