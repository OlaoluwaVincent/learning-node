const http = require('http');
const { readFileSync, readdirSync } = require('fs');
const path = require('path');

// get all files
const indexPage = readFileSync('./web/index.html');
const styles = readFileSync('./web/style.css');
const javaScript = readFileSync('./web/js.js');
const imageDir = './web/images/';

const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === '/') {
		res.writeHead(200, 'Successful', { 'content-type': 'text/html' });
		res.write(indexPage);
		res.end();
	} else if (url === '/js.js') {
		res.writeHead(200, 'Successful', { 'content-type': 'text/javascript' });
		res.write(javaScript);
		res.end();
	} else if (url === '/style.css') {
		res.writeHead(200, 'Successful', { 'content-type': 'text/css' });
		res.write(styles);
		res.end();
	} else if (url.startsWith('/images')) {
		// url.lastIndexOf('/') finds the index of the last occurrence of the forward slash character ('/') in the URL counting from the back.
		// We add 1 to this index to get the index of the first character of the filename.
		// We store this string in the ${imageName} variable.
		const imageName = url.substring(url.lastIndexOf('/') + 1);
		// Join the ${imageDir} and the ${imageName} together
		const imageDir = './web/images/';
		const image = readFileSync(path.join(imageDir, imageName));
		res.writeHead(200, { 'content-type': 'image/jpeg' });
		res.end(image);
	} else {
		res.writeHead(404, 'Not found', { 'content-type': 'text/html' });
		res.end('<p>Not found</p>');
	}
});

server.listen(8081);
