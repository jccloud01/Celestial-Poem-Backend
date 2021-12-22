const Poem = require('../models/poem');
// const User = require('../models/user');

// async function addUser(username, email, password) {
// 	let newUser = await User.create({
// 		username: username,
//         email: email,
// 		password: password,
// 	});
// 	console.log('successfully created ', newUser.userame);
// 	return newUser;
// }

async function addPoem(title, poem, adjectives, poemId) {
	let newPoem = await Poem.create({
		title: title,
		poem: poem,
		adjectives: adjectives,
		poemId: poemId,
	});
	console.log('successfully created ', newPoem.title);
	return newPoem;
}
async function addPoems() {
	Poem.deleteMany({}).then(() => {
		Poem.deleteMany({}).then(() => {
			addPoem('Blue', 'testing1blue3', 'creative', poem._id)
		
	});
})}


addPoems();
