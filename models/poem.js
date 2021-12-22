const mongoose = require('mongoose');

const poemSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		poem: {
			type: String,
			required: true,
		},
		adjectives: {
			type: String,
			required: false,
		},
		users: {
			ref: 'User',
			type: mongoose.Schema.Types.ObjectId,
		},
	},
	{ timestamps: true }
);

const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
