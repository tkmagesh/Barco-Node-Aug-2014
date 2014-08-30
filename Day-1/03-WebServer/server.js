var http = require("http"),
	fs = require("fs");

var server = http.createServer(onClientConnection);
function onClientConnection(req,res){
	fs.readFile("index.html", function(err,data){
		if (err) {
			res.statusCode = 500;
			res.end();
			return;
		}
		res.write(data);
		res.end();
	});
}
server.listen("8080");
console.log("Web server listening on port 8080..!!");