var url = require("url"),
	qs = require("querystring");

module.exports = function(req,res){
	//assumption -> the request type is GET
		req.url = url.parse(req.url);
		console.log(req.url);
		req.data = qs.parse(req.url.query);
	//return boolean
	return true;
};