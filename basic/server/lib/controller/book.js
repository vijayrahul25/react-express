const Books = require('./../model/book');

let bookController = {};

bookController.getAllBooks = async function(req, res)  {
    var data = await Books.find({});
    return res.status(200).send({ data });
}

module.exports = bookController;