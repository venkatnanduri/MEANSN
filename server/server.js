var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller.js');

mongoose.connect('mongodb://localhost:27017/time-waste');
app.use(body-parser.json());
app.use('/app',express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req,res){
  res.sendfile('index.html');
});

//authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
app.listen('3000', function(){
  console.log("Listening for local host 3000");
});
