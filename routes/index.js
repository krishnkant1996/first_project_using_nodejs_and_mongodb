var express = require('express');
var user = require('../lib/user.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login' , function(req,res){
	var username = req.body.username;
	var passward = req.body.passward;
	user.findOne({username:username,passward:passward},function(err,user) {
		if (err) {
			console.log(err);
			return res.status(500).send();
		}
		if (!user) {
			return res.status(404).send();
		}
		return res.status(200).send();
	})
});

router.post('/register' , function(req,res,next) {
	var username = req.body.username;
	var passward = req.body.passward;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	var newuser = new user();
	newuser.username = username;
	newuser.passward = passward;
	newuser.firstname = firstname;
	newuser.lastname = lastname; 
	newuser.save(function(err,saveUser) {
		if (err) {
			console.log(err);
			return res.status(500).send();
		}
		return res.status(200).send();
	})


})
module.exports = router;
