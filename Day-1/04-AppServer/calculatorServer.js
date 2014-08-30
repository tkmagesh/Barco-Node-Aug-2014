var calculator = require("./calculator");

module.exports = function(req,res){
	if (req.url.pathname === "/calculator"){
		//assumption -> the request method == "GET"
		/*
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

		});
		*/
		console.log(req.data);
		var operation = req.data.operation,
				n1 = parseInt(req.data.n1,10),
				n2 = parseInt(req.data.n2,10);
			var result = calculator[operation](n1,n2);
			res.end("<h1>" + result + "</h1>");	
		return false;
	} else {
		return true;
	}
}