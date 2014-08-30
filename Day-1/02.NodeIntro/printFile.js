var fs = require("fs"),
	fileName = "test.txt";
if (fs.existsSync(fileName)){
	console.log ("file exists..")
	fs.readFile(fileName, "utf-8", function(err,data){
		if (err) {
			console.log("unknown exception ", err);
			return;
		}
		console.log(data);
	});
} else {
	console.log("file doesnot exist..");
}
