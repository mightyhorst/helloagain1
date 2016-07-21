import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BlogPosts } from '/app/js/models/blogposts';
import '/app/js/rxjs-operators';

@Injectable()
export class BlogPostsService { 
	blogPosts: Array<BlogPosts> = new Array<BlogPosts>();
	url: string = '/api/blogpost';

	constructor (private _http: Http){}

	getBlogPosts(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createBlogPostsModels(data.data), error => console.error(error));
	}
	getBlogPostsData(rowNum: number){
		return this.blogPosts[rowNum];
	}
	createBlogPostsModels(data:Array<any>) {
		for (var d of data) {
			var model: BlogPosts = new BlogPosts(d.id, d.title, d.body, d.user_id);
			this.blogPosts.push(model);
		}
	}
}