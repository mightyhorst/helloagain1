export class BlogPosts{
	id;
	title;
	body;
	user_id;

	constructor (id, title, body, user_id) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.user_id = user_id;
	}
}