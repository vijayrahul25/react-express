/* eslint-disable strict */
/* MONGOOSE SETUP 27017 */
const mongoose = require('mongoose');
require('dotenv').config()

const CONNECT_URI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_ADMIN_DB}`;

mongoose.connect(CONNECT_URI, { useNewUrlParser: true, useCreateIndex: true, dbName: process.env.MONGO_CURRENT_APP_DB }).then(function (result) {
	console.log('connection established');
}).catch(function (error) {
	console.log('error connecting database: ', error);
});

module.exports = mongoose;
