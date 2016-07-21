export class Food{
	id;
	title;
	description;
	price;
	type;

	constructor (id, title, description, price, type) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.type = type;
	}
}