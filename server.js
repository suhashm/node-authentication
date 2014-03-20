

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require('./config/database.js')[env];


mongoose.connect(configDB.url);

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error...'));
db.once('open',function callback(){
    console.log('nodeAuth db opened-value is '+configDB.url);
});


//require('./config/passport')(passport);

app.configure(function(){
    // set up our express application
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.cookieParser()); // read cookies (needed for auth)
    app.use(express.bodyParser()); // get information from html forms

    app.set('view engine', 'ejs'); // set up ejs for templating

    // required for passport
    app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
});

//require('./config/route.js')(app, passport);

app.listen(port);
console.log("Awesome begins at port "+port);

