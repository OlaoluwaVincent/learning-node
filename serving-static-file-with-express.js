const express = require('express');
const { readFileSync } = require('fs');
const path = require('path');

const app = express();

// This is used to serve static file with all the routing handled automatically
app.use(express.static('./serving-static-file-with-express.js'));

// Serve the files manually
/** Set up routes
app.get('/', (req, res) => {
	const indexPage = readFileSync('./web/index.html');
	res.setHeader('Content-Type', 'text/html');
	res.status(200).send(indexPage);
});

app.get('/js.js', (req, res) => {
	const javaScript = readFileSync('./web/js.js');
	res.setHeader('Content-Type', 'text/javascript');
	res.status(200).send(javaScript);
});

app.get('/style.css', (req, res) => {
	const styles = readFileSync('./web/style.css');
	res.setHeader('Content-Type', 'text/css');
	res.status(200).send(styles);
});

app.get('/images/:imageName', (req, res) => {
	const imageDir = './web/images/';
	const imageName = req.params.imageName;
	const image = readFileSync(path.join(imageDir, imageName));
	res.setHeader('Content-Type', 'image/jpeg');
	res.status(200).send(image);
});

app.all('*', (req, res) => {
	res.status(404).send('<h3>Resource not available</h3>');
});

*/

// Start server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
