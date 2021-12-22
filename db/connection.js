const mongoose = require('mongoose');

mongoose.Promise = Promise;

let mongoURI =
	'mongodb+srv://julesverne:Monopoly12@celestialpoems.mky3r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((instance) => {
		console.log(`Connected to db: ${instance.connections[0].name}`);
	})
	.catch((error) => {
		console.log('Connetion failed', error);
	});

module.exports = mongoose;
