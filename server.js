var express = require('express')
, app = express()
, port = 8080
, bodyParser = require('body-parser')
, session = require('express-session')
, _ = require('lodash')
, config = require('./config.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: config.sessionSecret,resave: false, saveUninitialized: true}));

console.log(config.sessionSecret);

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
