const mongoose = require('../db/connection');

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			min: 8,
		},
		poems: [
			{
				ref: 'Poem',
				type: mongoose.Schema.Types.ObjectId,
			},
		],
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
