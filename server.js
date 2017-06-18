var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser');
var session      = require('express-session');
app.use(cookieParser());
app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: true,
            saveUninitialized: true }));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// require private server side assignment
require("./private/assignment/app.js")(app);
require("./test/app.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);