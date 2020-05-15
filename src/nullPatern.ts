class User {
	constructor(
		public name,
		public age
	) {
	}

	hasAccess() {
		return this.name === 'Jean';
	}
}

class NullUser {
	constructor(
		public name = 'Guest',
		public age = 'Guest ages'
	) {
	}

	hasAccess() {
		return false;
	}
}

const users = [
	new User('Jean', 3),
	new User('pierre', 6)
];

function getUser(userName) {
	return users.find(user => user.name === userName) || new NullUser();
}

getUser('d');
getUser('Jean').hasAccess();


