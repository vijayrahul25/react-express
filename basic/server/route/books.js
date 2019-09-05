const bookController = require('./../lib/controller/book');
//const Books = require('./../lib/model/book');
module.exports = function (express) {
    var bookRouter = express.Router();
    
    bookRouter.get('/books', bookController.getAllBooks);
    return bookRouter;
}
