const Books = require('./../model/book');

let bookController = {};

bookController.getAllBooks = async function(req, res)  {
    
    const pageNumber = parseInt(req.query.start);
    const pageSize = parseInt(req.query.end);
    const start = ( pageNumber - 1 ) * pageSize;

    var data = await Books.find({}).skip(start).limit(pageSize).sort({'_id':1});
    return res.status(200).send({ data });
}
bookController.getBookCount = async function(req, res)  {    
    const count = await Books.count();
    return res.status(200).send({ count });
}

module.exports = bookController;