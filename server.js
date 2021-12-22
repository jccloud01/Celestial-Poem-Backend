require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const UserController = require('./controllers/userController');
const PoemController = require('./controllers/poemController');

const User = require('./models/user');
const Poem = require('./models/poem');

app.get('/', function (req, res) {
	res.send('hello');
});

app.use('/user', UserController);
app.use('/poem', PoemController);


app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
