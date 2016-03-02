var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
var session = require('express-session');
var _ = require('lodash');
var config = require('./config.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: config.sessionSecret,resave: false, saveUninitialized: true}));

console.log(config.sessionSecret);

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
