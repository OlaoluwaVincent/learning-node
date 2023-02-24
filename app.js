const express = require('express');
const peopleRoutes = require('./routes');
const app = express();
const port = 8085;

//serve the app
app.use(express.static('./methods-public'));
//parse the form object into the req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/people', peopleRoutes);

// login
app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please provide credentials');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
