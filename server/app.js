const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('./config/mongo');

//Import routes
const activityRoute = require('./routes/activity.route');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set up our express application
app.use(logger('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors());
app.use(helmet()); //Set Security headers

// Set up API Routes
app.use('/', activityRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.sendStatus(err.status || 500);
    //res.render('error');
});

module.exports = app;