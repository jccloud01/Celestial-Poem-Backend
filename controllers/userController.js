app.get('/getUsername', verifyJWT, (req, res) => {
	res.json({ isLogged: true, username: req.user.username });
});

app.post('/login', (req, res) => {
	const userLogged = req.body;

	User.findOne({ username: userLogged.username }).then((dbUser) => {
		if (!dbUser) {
			return res.json({
				message: 'Invalid Username or Password',
			});
		}
		bcrypt.compare(userLogged.password, dbUser.password).then((isCorrect) => {
			if (isCorrect) {
				const info = {
					id: dbUser._id,
					username: dbUser.username,
				};
				jwt.sign(
					info,
					process.env.JWT_SECRET,
					{ expiresIn: 90000 },
					(err, token) => {
						if (err) return res.json({ message: err });
						return res.json({
							message: 'Success',
							token: 'Coin ' + token,
						});
					}
				);
			} else {
				return res.json({
					message: 'Invalid Username or Password',
				});
			}
		});
	});
});

function verifyJWT(req, res, next) {
	const token = req.headers['x-access-token']?.split(' ')[1];
	if (token) {
		jwt.verify(token.process.env.PASSWORD, (err, decoded) => {
			if (err)
				return res.json({
					isLogged: false,
					message: 'Failed to Authenticate',
				});
			req.user = {};
			req.user.id = decoded.id;
			req.user.username = decoded.username;
			next();
		});
	} else {
		res.json({ message: 'Incorrect Token Given' });
	}
}
