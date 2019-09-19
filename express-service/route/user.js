/* eslint-disable strict */
const config = require('./../config');

module.exports = function (express, passport) {
	var router = express.Router();
	const authController = require('./../lib/controller/authController')(passport);
	const jwt = require('jsonwebtoken');
	// sample protected request
	router.get('/protected', authController.validateJsonToken, function (req, res) {
		res.status(200).send({ message: 'page 1 !' });
	});

	router.post('/login', function (req, res, next) {
		passport.authenticate('login-strategy', { session: false }, function (err, user) {
			if (err) { return res.status(200).send(err); }

			if (!user) { return res.status(200).send({ error: 'user not found' }); }

			req.login(user, { session: false }, (err) => {
				if (err) { res.status(200).send(err); }
				const { _id, username } = user; 
				const token = jwt.sign({ _id, username }, config.secret, {
					expiresIn: config.tokenExpireTime // expires in 24 hours
				});
				
				return res.status(200).send({ success: 'login success !!', token });
			});
		})(req, res, next);
	});

	router.post('/signup', function (req, res, next) {
		passport.authenticate('signup-strategy', { session: false }, function (err, user) {
			console.log('error in signup', err)
			if (err) { return res.status(200).send(err); }

			if (!user) { return res.status(200).send({ error: 'user not registered' }); }

			return res.status(200).send({ success: 'user registered !' });
		})(req, res, next);
	});
	
	// we need to validate using database save/delete token 
	// router.get('/logout', function(req, res) {
	// 	req.logout(); 
	// 	return res.status(200).send({ success: 'user logout !' });
	// });
	return router;
};
