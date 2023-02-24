const { people } = require('./data');

const getAllPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const user = people.find((p) => p.id === Number(id));
	if (!user) {
		return res
			.status(400)
			.json({ success: false, message: 'user not found' });
	}
	const person = people.map((p) => {
		if (p.id === Number(id)) {
			p.name = name;
		}
		return p;
	});

	if (person) {
		return res.status(200).json({ success: true, person });
	}
};

const deletePerson = (req, res) => {
	const { id } = req.params;
	const person = people.find((p) => p.id === Number(id));

	if (!person) {
		return res
			.status(400)
			.json({ success: false, message: 'Invalid ID: ' + id });
	}
	const newPerson = people.filter((p) => p.id !== Number(id));
	res.status(200).json({ success: true, person: newPerson });
};

const createPerson = (req, res) => {
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
};

module.exports = {
	getAllPeople,
	createPerson,
	deletePerson,
	updatePerson,
};
