const Books = require('./../model/book');

let bookController = {};

bookController.getAllBooks = async function(req, res)  {
    
    const start = parseInt(req.query.start);
    const end = parseInt(req.query.end);
    var data = await Books.find({}).limit(end).skip(start);
    return res.status(200).send({ data });
}
bookController.getBookCount = async function(req, res)  {    
    const count = await Books.count();
    return res.status(200).send({ count });
}

module.exports = bookController;