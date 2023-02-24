/** Middlewares
 * req => Middlewares =>res
 * Middlewares sits inbetween a request and a response.
 * It does something with the request and the spits out the response
 * a Middleware has access to REQUEST, RESPONSE, NEXT
 */

// Method of Invoking Middlewares
// this applies to all Routess
//this applies to all Routes going through /api only
// app.use('/api', logger)
// this specific for a single route
// app.get('/', logger, (req, res) => {
// 	res.send('<h1>Homepage</h1>');
// });

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	console.log(method, url);
	next();
};

module.exports = { logger };
