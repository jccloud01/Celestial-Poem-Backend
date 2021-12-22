const express = require('express');
const router = express.Router();
const Poem = require('../models/poem');
// const User = require('../models/user');

router.post('/:poemId', (req, res) => {
	console.log('body', req.body);

	Poem.create(req.body).then((newPoem) => {
		User.findById(req.params.userId)
			.populate('poems')
			.then((user) => {
				console.log(user);
				user.poems.push(newPoem);
				return user;
			})
			.then((user) => {
				user.save(function () {
					res.status(200).json(user);
				});
			});
	});
});

router.get('/', (req, res) => {
	Poem.find({}).then((poem) =>
		res.json({
			status: 200,
			poem: poem,
		})
	);
});

router.delete('/:id', (req, res) => {
	Poem.findByIdAndDelete(req.params.id).then(() => res.status(204));
});

router.delete('/:poemId', (req, res) => {
	Poem.findByIdAndDelete(req.params.poemId).then((poem) => {
		User.findById(req.params.poemId)
			.populate('poems')
			.then((user) => {
				user.poems.pull({ _id: req.params.poemId });
				res.json({
					status: 200,
					user: user,
				});
			});
	});
});

router.put('/:id', (req, res) => {
	Poem.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
		(poem) =>
			res.json({
				status: 200,
				poem: poem,
			})
	);
});

module.exports = router;
 