const mongoose = require('../db/connection');

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
		
	},
	{ timestamps: true }
);

const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
