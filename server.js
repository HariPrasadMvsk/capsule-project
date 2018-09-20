const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
	instanceLocator: 'v1:us1:51ac1435-d28e-46aa-b3cd-fb19e28436e4',
	key: 'afb0a175-7fcf-42fe-a090-27231280192d:+GIErLmVkOKq3iMxo5zYY9yfo2IYYBOh9BRbEhHREMA='
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/build'));

app.post('/users', (req, res) => {
	const { username } = req.body;
	chatkit
	.createUser({ 
		id: username, 
		name: username 
	})
	.then(() => res.sendStatus(201))
	.catch(error => {
		if (error.error_type === 'services/chatkit/user_already_exists') {
			res.sendStatus(200);
		} else {
			res.status(error.status).json(error);
		}
	});
});

app.post('/authenticate', (req, res) => {
	const authData = chatkit.authenticate({ userId: req.query.user_id });
	res.status(authData.status).send(authData.body);
})

const PORT = process.env.PORT || 3001 ;

app.listen(PORT, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Running on port ${PORT}`);
	}
});
