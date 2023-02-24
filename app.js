const express = require('express');
const app = express();
const port = 8084;
const { logger } = require('./middleware/logger');
const authorize = require('./middleware/authorize');

// Method of Invoking Middlewares
// this applies to all Routes
app.use([logger, authorize]);
//this applies to all Routes going through /api only
// app.use('/api', logger)
// this specific for a single route
// app.get('/', logger, (req, res) => {
// 	res.send('<h1>Homepage</h1>');
// });

//Routes
app.get('/', (req, res) => {
	res.send('<h1>Homepage</h1>');
});
app.get('/about', (req, res) => {
	res.send('<h1>This Page</h1>');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
