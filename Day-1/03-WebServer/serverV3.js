var http = require("http"),
	fs = require("fs"),
	path = require("path"),
	url = require("url"),
	qs = require("querystring"),
	calculator = require("./calculator");

var server = http.createServer(onClientConnection);

String.prototype.endsWith = function(extn){
   return this.substr(this.length - extn.length) === extn;
}

var extns = [".html",".js",".css",".txt",".jpg",".ico"];

function isStatic(pathName){
   return extns.some(function(extn){
        return pathName.endsWith(extn);
   });
}


function onClientConnection(req,res){
	var urlObj = url.parse(req.url,true);
	urlObj.pathname = urlObj.pathname === "/" ? "index.html" : urlObj.pathname;
	if (isStatic(urlObj.pathname)){
		var fileName = urlObj.pathname
			filePath = path.join(__dirname, fileName);

		if (!fs.existsSync(filePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(filePath);
		stream.pipe(res);
		return;
	}
	if (urlObj.pathname === "/calculator"){
		//assumption -> the request method == "POST"
		var rawReqData = "";
		req.on("data", function(data){
			rawReqData += data;
		});
		req.on("end", function(){
			reqData = qs.parse(rawReqData);
			var operation = reqData.operation,
				n1 = parseInt(reqData.n1,10),
				n2 = parseInt(reqData.n2,10);
			var result = calculator[operation](n1,n2);
			res.end("<h1>" + result + "</h1>");	
		})
		
	}
	
}
server.listen("8080");
console.log("Web server listening on port 8080..!!");