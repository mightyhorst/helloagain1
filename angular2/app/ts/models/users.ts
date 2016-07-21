export class Users{
	id;
	email;
	pwd;
	first_name;
	last_name;
	about;

	constructor (id, email, pwd, first_name, last_name, about) {
		this.id = id;
		this.email = email;
		this.pwd = pwd;
		this.first_name = first_name;
		this.last_name = last_name;
		this.about = about;
	}
}