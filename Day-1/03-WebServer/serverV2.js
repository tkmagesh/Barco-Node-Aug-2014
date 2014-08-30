var http = require("http"),
	fs = require("fs"),
	path = require("path");

var server = http.createServer(onClientConnection);


function onClientConnection(req,res){
	//console.dir(req);
	var url = req.url;
	var fileName = "index.html";
	if (url !== "/"){
		fileName = path.join(__dirname,url);
	}
	console.log("filename = ", fileName);
	if (!fs.existsSync(fileName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(fileName);
	/*stream.on("data", function(data){
		res.write(data);
	});
	stream.on("end", function(){
		res.end();
	});*/
	stream.pipe(res);
}
server.listen("8080");
console.log("Web server listening on port 8080..!!");