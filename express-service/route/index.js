
module.exports = function (express, passport) {
    var user = require('./user')(express, passport);
    var book = require('./books' )(express);
    var indexRouter = express.Router();

    indexRouter.use('/books', book);
    indexRouter.use('/user', user);
    return indexRouter;
}
