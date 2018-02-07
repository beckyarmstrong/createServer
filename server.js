const http = require('http');

const PORTONE = 7000;

const PORTTWO = 7500;

function handleRequestONE(request, response) {
	response.end("You're pretty");
}

function handleRequestTWO(request, response) {
	response.end("You're ugly" + request.url);
}

const serverONE = http.createServer(handleRequestONE);
const serverTWO = http.createServer(handleRequestTWO);

serverONE.listen(PORTONE, function() {
	console.log("Server listening on", PORTONE);

});

serverTWO.listen(PORTTWO, function() {
	console.log("Server listening on", PORTTWO);

});
