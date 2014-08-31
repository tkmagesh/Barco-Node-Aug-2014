var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(connection){
	var timer;
	console.log("a new connection is established");
	connection.on("text", function(data){
		console.log("data received from client ", data);
		if (data === "time?"){
			timer = setInterval(function(){
				connection.sendText(new Date().toString());
			},10000);
		}
		if (data === "stop"){
			clearInterval(timer);
		}
	});
});
server.listen(9090);
console.log("Web Socket server is running on port 9090");