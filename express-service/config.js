'use strict';
require('dotenv').config()
module.exports = {
	secret: process.env.SECRET,
	tokenExpireTime : process.env.TOKEN_EXPIRE_MINUTES * process.env.TOKEN_EXPIRE_SECONDS * process.env.TOKEN_EXPIRE_HOURS
};