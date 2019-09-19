const bookController = require('./../lib/controller/book');
//const Books = require('./../lib/model/book');
module.exports = function (express) {
    var bookRouter = express.Router();
    
    bookRouter.get('/', bookController.getAllBooks);
    bookRouter.get('/count', bookController.getBookCount);
    return bookRouter;
}
