var express = require('express');
var router = express.Router();
var taskService = require("../services/taskService");


/* GET users listing. */
router.get('/', function(req, res) {
  var tasksList = taskService.getAll();
  res.render('tasks/index', {data : tasksList});
});

router.get('/new', function(req, res) {
  res.render('tasks/new');
});

router.post('/new', function(req, res) {
	 var data = req.body;
   taskService.add(data.taskName)
   res.redirect('/tasks');
});

router.post('/toggle', function(req,res){
  var taskId = parseInt(req.body.taskId);
  taskService.toggle(taskId);
  res.redirect('/tasks');
});

module.exports = router;