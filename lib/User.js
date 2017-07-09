var mongoose = require('mongoose'); 
 
 var userSchema = new mongoose.Schema({
 	username: {type:String, unique:true},
 	passward:{type:String},
 	firstname: String,
 	lastname: String
 });
 var user = mongoose.model('myuser', userSchema);
 module.exports =user;