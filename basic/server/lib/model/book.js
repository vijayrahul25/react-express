const mongoose = require('../db');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
        title: String,
        isbn: Number,
        seq: Number,
        quantity:Number,
        pageCount: Number,
        thumbnailUrl: String,
        shortDescription: String,
        longDescription: String,
        status: String,
        authors: Array,
        categories: Array

});


const books = mongoose.model('books', bookSchema);
module.exports = books;
