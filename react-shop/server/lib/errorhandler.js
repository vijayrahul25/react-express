/* eslint-disable strict */
const erroHandler = function (err) {	
	var errormessage = [];
	Object.keys(err.errors).forEach((key) => errormessage.push(err.errors[key].message));
	return errormessage;
};

module.exports = erroHandler;
