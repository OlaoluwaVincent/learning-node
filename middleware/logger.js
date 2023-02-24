/** Middlewares
 * req => Middlewares =>res
 * Middlewares sits inbetween a request and a response.
 * It does something with the request and the spits out the response
 * a Middleware has access to REQUEST, RESPONSE, NEXT
 */

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	console.log(method, url);
	next();
};

module.exports = { logger };
