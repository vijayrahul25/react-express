/* eslint-disable strict */
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const config = require('../config');

module.exports = function (passport) {
	const authController = require('./controller/authController')(passport);

	// login strategy by async await
	passport.use('login-strategy', new LocalStrategy(authController.loginStrategy));

	// signup strategy by async await
	passport.use('signup-strategy', new LocalStrategy(authController.signupStrategy));

	passport.use(new JWTStrategy(
		{
			jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.secret,
		}, authController.JsonStrategy));
};
