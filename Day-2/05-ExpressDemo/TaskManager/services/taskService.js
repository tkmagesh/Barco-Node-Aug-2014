var Task = require("../models/Task");

var tasksList = [
	new Task(1, "Learn JavaScript"),
	new Task(2,"Explore jQuery", true),
	new Task(3, "Master Node.js")
];

var service = {
	getAll : function(){
		return tasksList.slice(0);
	},
	add : function(taskName, callback){
		var newId = tasksList.reduce(function(seed,value){
	       return seed > value.id ? seed : value.id;
	    },0) + 1;

	    tasksList.push(new Task(newId,taskName,false));
	    
	},
	toggle : function(id){
		var task = tasksList.filter(function(t) {
			return t.id === id;
		})[0];
		task.toggleCompletion();
	}
}
module.exports = service;