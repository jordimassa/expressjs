var http = require('http');

var myServer= http.createServer(function( request, response) {
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Hola como estamos</h1>");
	response.end();
});

myServer.listen(3000, function() {
	console.log("Servidor iniciado en ip" + this.address().address + "por el puerto "+this.address().port);
});