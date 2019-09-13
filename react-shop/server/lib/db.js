/* eslint-disable strict */
/* MONGOOSE SETUP */
const mongoose = require('mongoose');
const uri = 'mongodb://admin:admin123@localhost/admin';

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, dbName: 'library' }).then(function (result) {
	console.log('connection established');
}).catch(function (error) {
	console.log('error connecting database: ', error);
});

module.exports = mongoose;
