const Poem = require('../models/poem');
const User = require('../models/user');

async function addUser(username, email, password) {
	let newUser = await User.create({
		username: username,
        email: email,
		password: password,
	});
	console.log('successfully created ', newUser.userame);
	return newUser;
}

async function addPoem(title, poem, adjectives, userId) {
	let newPoem = await Poem.create({
		title: title,
		poem: poem,
		adjectives: adjectives,
		users: userId,
	});
	console.log('successfully created ', newPoem.title);
	return newPoem;
}
async function addUsers() {
	User.deleteMany({}).then(() => {
		Poem.deleteMany({}).then(() => {
			addUser('Jules', 'jc.cloud@gmail.com', 'myCatWrites12').then(async (user) => {
				const e1 = await Promise.resolve(
					addPoem('one', 'poem of course', 'calm', user._id)
				);
				const e2 = await Promise.resolve(
					addPoem('two', 'random', 'calm', user._id)
				);
				const e3 = await Promise.resolve(
					addPoem('three', 'test1blue3', 'calming', user._id)
				);
				const e4 = await Promise.resolve(
					addPoem('four', 'one two tree bored', 'calming', user._id)
				);
				user.poems.push(e1, e2, e3, e4);
				user.save();
			});
		});
	});
}

addUsers();
