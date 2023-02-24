const express = require('express');
const { people } = require('./data');
const app = express();
const port = 8085;

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please provide credentials');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
