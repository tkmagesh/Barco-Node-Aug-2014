var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/list', function(req,res){
	res.send("<h1>All users list</h1>");
});
router.get('/new', function(req,res){
	res.send("<h1>Add new User</h1>");
});

module.exports = router;
