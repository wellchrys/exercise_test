const Book = require('../../../../app/books/book');

const call = ({ id: id }) => Book.find(id);

module.exports = { call };
