/* eslint-disable strict */
const bcrypt = require('bcryptjs');

const getErrorMessage = require('./../errorhandler.js');
const User = require('./../model/user');

module.exports = function (passport) {
	// return passport.authenticate('jwt', { session: false });
	const authController = {};
	authController.validateJsonToken = function (req, res, next) {
		
		passport.authenticate('jwt', {
			session: false,
		}, (err, user, info) => {
			if (err) {
				console.log('error in passport auth middleware', err);
				console.log('info in passport auth middleware', info);
				return next(err);
			}
			if (!user) {
				return res.json({
					error: 'UNAUTHORIZED REQUEST'
				});
			}
			// Forward user information to the next middleware
			req.user = user;
			next();
		})(req, res, next);
	};

	authController.loginStrategy = async function (username, password, done) {
		try {
			const user = await User.findOne({ username: username });

			if (!user) {
				return done({ error: 'User not found' }, false);
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return done({ error: 'Invalid Credential' }, false);
			}

			return done(null, user);
		} catch (e) {
			console.log('login strategy error: ', e);
			return done({ error: 'internal error' }, false);
		}
	};

	authController.signupStrategy = async function (username, password, done) {
		try {
			const user = await User.findOne({ username: username });

			if (user) {
				console.log('changes  ', username, password, 'done-', done);
				return done({ error: 'User already exist' }, false);
			}

			const newUser = new User({
				username: username,
				password: password,
			});

			await newUser.save();
			return done(null, newUser);
		} catch (e) {
			console.log('signup strategy error: ', e);
			var errorMessage = 'internal error';
			if (e.name === 'ValidationError') {
				errorMessage = getErrorMessage(e);
			}
			console.log(errorMessage);
			return done({ error: errorMessage }, false);
		}
	};

	authController.JsonStrategy = async function (jwtPayload, done) {
		try {
			const user = await User.findOne({ _id: jwtPayload._id }, { username: 1 });
			if (user) {
				done(null, user);
			}
		} catch (e) {
			console.log('jwt error: ', e);
			console.log('jwtid', jwtPayload);
			return done({ error: 'internal error' }, false);
		}
	}

	return authController;
};
