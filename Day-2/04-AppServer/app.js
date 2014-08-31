var http = require("http");
var engine = require("./engine");

engine.add(require("./urlParser"));
engine.add(require("./staticFileServer"));
engine.add(require("./calculatorServer"));
engine.add(function(req,res){
	res.writeHead(404);
	res.end();
});
http.createServer(engine.run()).listen(9090);
console.log("application running on port 9090");
