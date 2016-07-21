import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Drinks } from '/app/js/models/drinks';
import '/app/js/rxjs-operators';

@Injectable()
export class DrinksService { 
	drinks: Array<Drinks> = new Array<Drinks>();
	url: string = '/api/drink';

	constructor (private _http: Http){}

	getDrinks(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createDrinksModels(data.data), error => console.error(error));
	}
	getDrinksData(rowNum: number){
		return this.drinks[rowNum];
	}
	createDrinksModels(data:Array<any>) {
		for (var d of data) {
			var model: Drinks = new Drinks(d.id, d.title, d.price);
			this.drinks.push(model);
		}
	}
}