import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ConfigService } from '/app/js/static-services/config.service';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { UsersService } from '/app/js/services/users.service';
import { BlogPostsService } from '/app/js/services/blogposts.service';
import { FoodService } from '/app/js/services/food.service';
import { DrinksService } from '/app/js/services/drinks.service';


@Component({
	selector: 'app',
	template: '<router-outlet></router-outlet>',
	directives: [
		ROUTER_DIRECTIVES,
	],
	providers: [
		ConfigService,
		SharedData,
		UsersService,
		BlogPostsService,
		FoodService,
		DrinksService,
	]
})

export class AppComponent {


	

	constructor(
		private _configService: ConfigService,
		private _sharedData: SharedData,
		private _usersService: UsersService,
		private _blogPostsService: BlogPostsService,
		private _foodService: FoodService,
		private _drinksService: DrinksService
	) {}

	ngOnInit() {
		this._configService.getConfig().subscribe(
			data  => this._configService.configFile = data.data,
			error => console.error(error),
			()    => {
				this._sharedData.getSharedData(this._configService.getDomain());
				this._usersService.getUsers(this._configService.getDomain());
				this._blogPostsService.getBlogPosts(this._configService.getDomain());
				this._foodService.getFood(this._configService.getDomain());
				this._drinksService.getDrinks(this._configService.getDomain());
			}
		);
	}





}