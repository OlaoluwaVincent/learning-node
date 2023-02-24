const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === 'john') {
		req.user = { name: 'John', id: 3 };
	} else {
		return res.status(401).send('Unauthorised');
	}
	next();
};

module.exports = authorize;
