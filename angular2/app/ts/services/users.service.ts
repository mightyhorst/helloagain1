import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Users } from '/app/js/models/users';
import '/app/js/rxjs-operators';

@Injectable()
export class UsersService { 
	users: Array<Users> = new Array<Users>();
	url: string = '/api/user';

	constructor (private _http: Http){}

	getUsers(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createUsersModels(data.data), error => console.error(error));
	}
	getUsersData(rowNum: number){
		return this.users[rowNum];
	}
	createUsersModels(data:Array<any>) {
		for (var d of data) {
			var model: Users = new Users(d.id, d.email, d.pwd, d.first_name, d.last_name, d.about);
			this.users.push(model);
		}
	}
}