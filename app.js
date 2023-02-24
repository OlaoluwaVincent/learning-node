const express = require('express');
const { people } = require('./data');
const app = express();
const port = 8085;

//serve the app
app.use(express.static('./methods-public'));
//parse the form object into the req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

//save name to data array of person
app.post('/api/people', (req, res) => {
	const { name } = req.body;

	if (name === '') {
		return res
			.status(400)
			.json({ success: false, message: 'Provide a name' });
	}

	if (!name) {
		return res
			.status(400)
			.json({ success: false, message: 'Provide a name' });
	}
	res.status(201).json({ success: true, person: name });
});

//update
app.put('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const person = people.map((p) => {
		if (p.id === Number(id)) {
			p.name = name;
		}
		return p;
	});

	if (person) {
		return res.status(200).json({ success: true, person });
	} else {
		return res
			.status(400)
			.json({ success: false, message: 'Username not found' });
	}

	// const includePerson = people.filter((p) => p.name.includes(name));
	// const startWithPerson = people.filter((p) => p.name.startsWith(name));

	// if (person) {
	// 	res.status(200).json(person);
	// } else {
	// 	res.status(400).json({ success: false, message: 'Username not found' });
	// }
});

// login
app.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please provide credentials');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

// delete
app.delete('/api/people/:id', (req, res) => {
	const { id } = req.params;
	const person = people.find((p) => p.id === Number(id));

	if (!person) {
		return res
			.status(400)
			.json({ success: false, message: 'Invalid ID: ' + id });
	}
	const newPerson = people.filter((p) => p.id !== Number(id));
	res.status(200).json({ success: true, person: newPerson });
});
