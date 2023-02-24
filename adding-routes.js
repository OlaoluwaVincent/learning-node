const express = require('express');
const app = express();
const port = 8083;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/:productID/reviews/:reviewID', (req, res) => {
	// this will hold the variables
	// const {productID,reviewID} = req.params
});

app.get('/api/v1/query', (req, res) => {
	// handing query params  = req.query
	// https://localhost:4000/api/v1/query?name=ola&id=3
	// this will return an object with {name:ola, id:'3'}
	// all the values in a query are strings
});
app.get('*', (req, res) => {
	res.send('GET request to the homepage');
});

// Algollia.com

app.listen(port, () => console.log(`Listening on port ${port}...`));
