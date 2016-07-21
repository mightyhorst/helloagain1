import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Food } from '/app/js/models/food';
import '/app/js/rxjs-operators';

@Injectable()
export class FoodService { 
	food: Array<Food> = new Array<Food>();
	url: string = '/api/food';

	constructor (private _http: Http){}

	getFood(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createFoodModels(data.data), error => console.error(error));
	}
	getFoodData(rowNum: number){
		return this.food[rowNum];
	}
	createFoodModels(data:Array<any>) {
		for (var d of data) {
			var model: Food = new Food(d.id, d.title, d.description, d.price, d.type);
			this.food.push(model);
		}
	}
}