const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
app.use(helmet());

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use(cors())
// app.set('view engine', 'pug');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port ' + port));

/*  PASSPORT SETUP  */
const passport = require('passport');
require('./lib/passport')(passport);

var user = require('./route/user')(express, passport);
var book = require('./route/books')(express);


app.use('/api/books', book);
app.use('/api/user', user);

app.use(function (req, res) {
	return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

// error handler
app.use(function (err, req, res, next) {
	res.status(404).send({ Error: err.message });
});
