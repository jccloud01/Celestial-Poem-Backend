


//POST-MVP DUE TO BUGS


// const express = require('express');
// const { model } = require('mongoose');
// const Poem = require('../models/poem');
// const router = express.Router();
// const User = require('../models/user');

// router.post('/', (req, res) => {
// 	console.log(req.body);
// 	User.find({ userName: req.body.userName }).then((users) => {
// 		if (users.length !== 0) {
// 			res.status(400).json({
// 				message: `username is taken`,
// 			});
// 		} else {
// 			User.create(req.body).then((user) =>
// 				res.json({
// 					status: 201,
// 					user: user,
// 				})
// 			);
// 		}
// 	});
// });

// router.get('/', (req, res) => {
// 	User.find()
// 		.populate('poems')
// 		.then((user) =>
// 			res.json({
// 				status: 200,
// 				user: user,
// 			})
// 		).catch((err => {
// 			console.log(err)
// 		}));
// });

// router.delete('/:id', (req, res) => {
// 	User.findByIdAndDelete(req.params.id).then(() => res.status(204));
// });

// router.get('/:id', (req, res) => {
// 	User.findById(req.params.id)
// 		.populate('poems')
// 		.then((user) =>
// 			res.json({
// 				status: 200,
// 				user: user,
// 			})
// 		);
// });

// router.put('/:poemId/:userId', (req, res) => {
// 	Poem.findByIdAndUpdate(req.params.poemId, req.body, { new: true }).then(
// 		(poem) => {
// 			console.log('poem', poem);
// 			User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
// 				.populate('poems')
// 				.then((user) => {
// 					console.log('user', user);
// 					poem.save();
// 					res.json({
// 						status: 200,
// 						user: user,
// 					});
// 				});
// 		}
// 	);
// });


// module.exports = router;
