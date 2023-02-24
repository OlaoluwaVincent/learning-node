const express = require('express');
const router = express.Router();
const {
	getAllPeople,
	createPerson,
	deletePerson,
	updatePerson,
} = require('./controllers');

router.route('/').get(getAllPeople).post(createPerson);
router.route('/:id').delete(deletePerson).put(updatePerson);

module.exports = router;
